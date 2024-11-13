import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome To My App!
        Search,Find,Meet Someone,Explore The World!
      </Text>
      <View style={styles.buttonContainer}>
        <Link href="/profile" style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </Link>
        <Link href="/chat" style={styles.button}>
          <Text style={styles.buttonText}>Chat</Text>
        </Link>
        <Link href="/matchnavigator" style={styles.button}>
          <Text style={styles.buttonText}>Match</Text>
        </Link>
        <Link href="" style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </Link>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
  },
  header: {
    alignItems: 'auto',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',  
    textAlign:'center', 
  },
  buttonContainer: {
    flexDirection: 'collumn',
    alignItems: 'center',
    marginBottom:10,
  },
  button: {
    backgroundColor: 'aquamarine',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginBottom: 20,
    marginTop:30,
    width: 200,
    alignItems: 'center',
    textAlign:'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold', 
  },
});

export default Home; // Export the component with capitalized name
