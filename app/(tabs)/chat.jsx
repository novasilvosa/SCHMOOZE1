import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLocalSearchParams } from 'expo-router';
import { useRouter, Link } from 'expo-router';

const Stack = createNativeStackNavigator();

const Chat = ({ navigation }) => {
  const { matchImage, matchName } = useLocalSearchParams(); // Get params from the URL
  return (
    <ImageBackground
    source={require('../../assets/images/image.png')} // Background image
    style={styles.container}
  >
     <ScrollView contentContainerStyle={styles.scrollView}>
     <Text style={styles.title}>Perfect Match!</Text>


     <View style={styles.imageContainer}>
      
            <Image
              source={require('../../assets/images/mixba.jpg')}
              style={styles.overlayImageFirst}
            />
            <Image
              source={require('../../assets/images/p.jpg')} // Overlay image
              style={styles.overlayImage}
            />
           <TouchableOpacity
          style={styles.buttonContainerChat}
          onPress={() => navigation.navigate('Message')}>
             <Text style={styles.buttonChat}>Chat</Text>
             </TouchableOpacity>
            </View>


            <View style={styles.additionalSection}>
            <Text style={styles.additionalText}>More Chat Options</Text>
            <View style={styles.imageBox}>
            <Image
              source={require('../../assets/images/mia.jpg')} // Replace with your image
              style={styles.additionalImage}
            />
             <Text style={styles.textName}>Kent</Text>
             <Text style={styles.textName}>35</Text>
             <Text style={styles.textName}>American</Text>
             <Text style={styles.textName}>Martial Artist</Text>
             </View >
<View style={styles.imageBox}>
            <Image
              source={require('../../assets/images/mib.jpg')} // Replace with your image
              style={styles.additionalImage}
            />
              <Text style={styles.textName}>Brandy</Text>
              <Text style={styles.textName}>27</Text>
              <Text style={styles.textName}>Europian</Text>
              <Text style={styles.textName}>Surfer</Text>
              </View >
<View style={styles.imageBox}>
            <Image
              source={require('../../assets/images/wia.jpg')} // Replace with your image
              style={styles.additionalImage}
            />
  <Text style={styles.textName}>Trixia</Text>
  <Text style={styles.textName}>19</Text>
  <Text style={styles.textName}>Australian</Text>
  <Text style={styles.textName}>Photographer</Text>
  </View >

            <View style={styles.imageBox}>
            <Image
              source={require('../../assets/images/wib.jpg')} // Replace with your image
              style={styles.additionalImage}
              
            />
            <Text style={styles.textName}>Mia</Text>
            <Text style={styles.textName}>25 years old</Text>
            <Text style={styles.textName}>Christian</Text>
            <Text style={styles.textName}>Programmer</Text>
            </View >
            <Text style={styles.additionalText}>Stay connected!</Text>

            <Link href="/profile" style={styles.button}>
            <Text style={styles.buttonText}>Profile</Text>
            </Link>

          </View>

     </ScrollView>

  </ImageBackground>

  );
};



const Message = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
   <View><Text style={styles.chatText}>This is the chat page. You can start a conversation here.</Text></View>
   <ScrollView contentContainerStyle={styles.containerChats}>

   <View style={styles.flexContainer}>

       <View style={styles.firstView}>
<Image
source={require('../../assets/images/p.jpg')}
style={styles.firstImage}
/>

<Text style={styles.textImage1}>Hi</Text>
<Text style={styles.textImage3}>I'm doing fine</Text>
<Text style={styles.textImage3}>In Philippines</Text>
<Text style={styles.textImage1}>How about you?</Text>
<Text style={styles.textImage2}>How is life in there?</Text>
<Text style={styles.textImage3}>Ohhh...</Text>
<Text style={styles.textImage5}>Happy normal life,single, </Text>

       </View>

       <View style={styles.secondView}>
<Image
source={require('../../assets/images/mixba.jpg')}
style={styles.firstImage}
/>



<Text style={styles.textImage2}>Hello</Text> 
<Text style={styles.textImage2}>How are you?</Text>
<Text style={styles.textImage4}>Where do you live?</Text>
<Text style={styles.textImage4}>I live in Japan</Text>
<Text style={styles.textImage3}>It's fine ,I'm still single though</Text>
<Text style={styles.textImage1}>Yeah ,..for now</Text>
<Text style={styles.textImage1}>How about you're life in there too?</Text>


</View>

    </View>

         </ScrollView>
         <View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
         </View>
         </ScrollView>
   
  );
};

const Gender = ({ navigation }) => {
  return (
    <View></View>
  );
};

const Age = ({ navigation }) => {
  return (
    <View></View>
  );
};

const Match = () => {
  return (
    <View></View>
    );
  };
  
  

export default function MatchNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Favorite">
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Match" component={Match} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  containerChats:{
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 50,
      },
      flexContainer: {
        flex: 1,
        flexDirection: 'row',  // Aligns views horizontally
        justifyContent: 'space-around',  // Space between the views
        alignItems: 'center',  // Center the views vertically
        height: 1000,
        marginTop:50,
        marginBottom: 50,
      },
      firstView: {
        position: 'relative',
        width: 200,
        height: '100%',
        backgroundColor: 'blue',
      },
      firstImage:{
       borderRadius:25,
        marginBottom: 20,
      },
      textImage1:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft:10,
    marginBottom: 20,
      },
      textImage3:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft:10,
        marginTop: 70,
        marginBottom: 20,
          },
          textImage4:{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft:10,
            marginTop: 60,
            marginBottom: 20,
              },
              textImage5:{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft:10,
                marginTop: 120,
                marginBottom: 20,
                  },
    
      secondView: {
        position: 'relative',
        width: 200,
        height: '100%',
        backgroundColor: 'red',
      },
      textImage2:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft:10,
        marginBottom: 10,
        marginTop: 20,
          },







  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: '200px',    
  },
  chatText:{
    fontSize: 30,
    fontWeight: 'bold',

  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 20,
  
  },

  buttonContainerChat:{
    backgroundColor: 'red',
   position: 'absolute', top: 10, left: 200,width: 70, height: 50,
   marginLeft: 10,
   justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center',
borderRadius: 10,
  },
  buttonChat:{
   color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },


  imageContainer: {
    width: 300, // Set the width according to your needs
    height: 300, // Set the height according to your needs
    position: 'relative',
    marginVertical: 10,
    backgroundColor:'green',
    marginBottom: 30,
    borderRadius:30,

  },
  image: {
    width: '50%',  // Adjust the size
    height: '50%', // Adjust the size
    borderRadius: 10,
  },
  overlayImageFirst: {
    position: 'absolute',
    top: 0,
    left: 50,
    width: '50%',
    height: '50%',
    borderRadius: 10,
  },
  overlayImage: {
    position: 'absolute',
    top: 100,
    right: 50,
    width: '50%',
    height: '50%',
    borderRadius: 10,
  },
  additionalSection:{
alignItems: 'center',
backgroundColor:'green',
marginBottom: 30,
borderRadius:30,
  },
 additionalText: {
    fontSize: 30,
    color: 'yellow',
    marginTop: 10,
    fontWeight: 'bold',
  },

  additionalImage:{
marginBottom:20,
borderRadius:30,
padding:150
  },

  textName:{
    fontSize: 27,
    color: 'gray',
    marginTop: 1,
    fontWeight: 'bold',
marginLeft:120
  },
  imageBox:{
    backgroundColor: 'blue',
    borderRadius:30,
    marginTop:20,
    textAlign:'center',
  },

  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
