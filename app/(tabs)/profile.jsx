import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Button } from 'react-native';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [backgroundImage, setBackgroundImage] = useState(require('../../assets/images/p.jpg'));

  // Function to open image picker
  const pickImage = async () => {
    // Ask for permission to access the gallery
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }

    // Pick an image from the gallery
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Set the selected image as background
      setBackgroundImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        
      <ImageBackground 
        source={backgroundImage}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Button title="Edit Background" onPress={pickImage} />
        </View>
      </ImageBackground>
      </View>

      
      <Link href="" style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </Link>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#008081',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'lightgreen',
  },
  button: {
    backgroundColor: 'aquamarine',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    textAlign: 'center',
    marginLeft: 120,
    marginBottom: 70,
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-end',
    borderRadius: 50,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 10,
  },
});

export default Profile;
