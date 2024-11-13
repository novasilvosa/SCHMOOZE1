import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRouter, Link } from 'expo-router';

const Stack = createNativeStackNavigator();

const Favorite = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Purpose</Text>
      </View>
      {/* 2nd section */}
      <View style={styles.sectiontwo}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Ethnicity')}>
            <Text style={styles.sectiontwoButtonText}>Find Love?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Ethnicity')}>
            <Text style={styles.sectiontwoButtonText}>Friendship?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Ethnicity')}>
            <Text style={styles.sectiontwoButtonText}>Explore?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionone}>
          <Link href="/home" style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const Ethnicity = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose Your Preferred Ethnicity</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Gender')}>
          <Text style={styles.sectiontwoButtonText}>American</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Gender')}>
          <Text style={styles.sectiontwoButtonText}>European</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Gender')}>
          <Text style={styles.sectiontwoButtonText}>Asian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Gender')}>
          <Text style={styles.sectiontwoButtonText}>African</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Gender = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose Your Gender</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Age')}>
          <Text style={styles.sectiontwoButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Age')}>
          <Text style={styles.sectiontwoButtonText}>Female</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Age = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What Age?</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Sports')}>
          <Text style={styles.sectiontwoButtonText}>15-18</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Sports')}>
          <Text style={styles.sectiontwoButtonText}>18-24</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Sports')}>
          <Text style={styles.sectiontwoButtonText}>24-42</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Sports')}>
          <Text style={styles.sectiontwoButtonText}>42-82</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Sports = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sports</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Hobbies')}>
          <Text style={styles.sectiontwoButtonText}>Basketball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Hobbies')}>
          <Text style={styles.sectiontwoButtonText}>Volleyball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Hobbies')}>
          <Text style={styles.sectiontwoButtonText}>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Hobbies')}>
          <Text style={styles.sectiontwoButtonText}>Baseball</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Hobbies = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hobbies</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Values')}>
          <Text style={styles.sectiontwoButtonText}>Surfing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Values')}>
          <Text style={styles.sectiontwoButtonText}>Painting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Values')}>
          <Text style={styles.sectiontwoButtonText}>Photographer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Values')}>
          <Text style={styles.sectiontwoButtonText}>Martial Artist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Values')}>
          <Text style={styles.sectiontwoButtonText}>Video Games</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Values = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Values</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Honesty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Family-Oriented</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Equality</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Faith</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Work-Life Balance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Trust</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Adventure</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Open-Mindedness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Passion')}>
          <Text style={styles.sectiontwoButtonText}>Progressivism</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Passion = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Passions</Text>
      <View style={styles.sectiontwo}>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Graphic Design</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Cooking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Scuba Diving</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Conservation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Language Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Coding/Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Holistic Healing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectiontwoButton}
          onPress={() => navigation.navigate('Match')}>
          <Text style={styles.sectiontwoButtonText}>Robotics</Text>
        </TouchableOpacity>
        <View style={styles.sectionone}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
            <Text style={styles.sectiononeButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const Match = ({ navigation }) => {
    const router = useRouter();
  
    const handlePerfectMatch = (matchImage, matchName) => {
      router.push({
        pathname: '/chat', // navigate to chat.jsx
        params: {
          matchImage: 'mixba.jpg',
          matchName: 'Match ',
        },
      });
    };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Perfect Match</Text>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.perfectMatchButton}
            onPress={() => handlePerfectMatch('mixba.jpg', 'Match Andrew')}
          >
            <Image source={require('../../assets/images/mixba.jpg')} style={styles.image} />
            <Text style={styles.perfectMatchButtonText}>Andrew</Text>
            <Text style={styles.perfectMatchButtonText}>40</Text>
            <Text style={styles.perfectMatchButtonText}>Programmer</Text>
            <Text style={styles.perfectMatchButtonText}>Christian</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.perfectMatchButton}
            onPress={() => handlePerfectMatch('mixbb.jpg', 'Match Brix')}
          >
            <Image source={require('../../assets/images/mixbb.jpg')} style={styles.image} />
            <Text style={styles.perfectMatchButtonText}>Brix</Text>
            <Text style={styles.perfectMatchButtonText}>37</Text>
            <Text style={styles.perfectMatchButtonText}>Engineer</Text>
            <Text style={styles.perfectMatchButtonText}>Christian</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.perfectMatchButton}
            onPress={() => handlePerfectMatch('mixbl.jpg', 'Match Trixy')}
          >
            <Image source={require('../../assets/images/mixbl.jpg')} style={styles.image} />
            <Text style={styles.perfectMatchButtonText}>Trixy</Text>
            <Text style={styles.perfectMatchButtonText}>31</Text>
            <Text style={styles.perfectMatchButtonText}>WebDisgner</Text>
            <Text style={styles.perfectMatchButtonText}>Chinese</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.perfectMatchButton}
            onPress={() => handlePerfectMatch('wia.jpg', 'Match Mia')}
          >
            <Image source={require('../../assets/images/wia.jpg')} style={styles.image} />
            <Text style={styles.perfectMatchButtonText}>Mia</Text>
            <Text style={styles.perfectMatchButtonText}>25</Text>
            <Text style={styles.perfectMatchButtonText}>Artist</Text>
            <Text style={styles.perfectMatchButtonText}>American</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.perfectMatchButton}
            onPress={() => handlePerfectMatch('mixa.jpg', 'Match Alitha')}
          >
            <Image source={require('../../assets/images/mixa.jpg')} style={styles.image} />
            <Text style={styles.perfectMatchButtonText}>Alitha</Text>
            <Text style={styles.perfectMatchButtonText}>27</Text>
            <Text style={styles.perfectMatchButtonText}>Robotics</Text>
            <Text style={styles.perfectMatchButtonText}>Europian</Text>
          </TouchableOpacity>

          <View style={styles.sectionone}>
          <TouchableOpacity
           style={styles.sectiontwoButtonIce}
           onPress={() => navigation.navigate('Conversation')}>
            <Text style={styles.sectiononeButtonText}>Ice Breaker</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  };

  const Conversation = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Ice Breaker</Text>
        <View style={styles.sectiontwo}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
           >
            <Text style={styles.sectiontwoButtonText}>Are you happy today? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectiontwoButton}
           >
            <Text style={styles.sectiontwoButtonText}>Or inspired? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectiontwoButton}
           >
            <Text style={styles.sectiontwoButtonText}> And why?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Answer')}>
            <Text style={styles.sectiontwoButtonText}> Answer</Text>
          </TouchableOpacity>
          <View style={styles.sectionone}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
              <Text style={styles.sectiononeButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const Answer = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Answers</Text>
        <View style={styles.sectiontwo}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Yes')}>
            <Text style={styles.sectiontwoButtonText}>Yes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('No')}>
            <Text style={styles.sectiontwoButtonText}>No </Text>
          </TouchableOpacity>
         
          
          <View style={styles.sectionone}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
              <Text style={styles.sectiononeButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const Yes = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}></Text>
        <View style={styles.sectiontwo}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('WhyYes')}>
            <Text style={styles.sectiontwoButtonText}>Why Yes? </Text>
          </TouchableOpacity>                       
          <View style={styles.sectionone}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
              <Text style={styles.sectiononeButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const WhyYes = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}></Text>
        <View style={styles.sectiontwo}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Match')}>
            <Text style={styles.sectiontwoButtonText}>Because I sleep well </Text>
          </TouchableOpacity>  
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Match')}>
            <Text style={styles.sectiontwoButtonText}>Coz I drink my vitamins today </Text>
          </TouchableOpacity>                       
          <View style={styles.sectionone}>
            <TouchableOpacity   onPress={() => navigation.navigate('Answer')}style={styles.sectiononeButtonBack}>
              <Text style={styles.sectiononeButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const No = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}></Text>
        <View style={styles.sectiontwo}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('WhyNo')}>
            <Text style={styles.sectiontwoButtonText}>Why No? </Text>
          </TouchableOpacity>                       
          <View style={styles.sectionone}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectiononeButtonBack}>
              <Text style={styles.sectiononeButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const WhyNo = ({ navigation }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}></Text>
        <View style={styles.sectiontwo}>
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Match')}>
            <Text style={styles.sectiontwoButtonText}>Because I want someone to love </Text>
          </TouchableOpacity>   
          <TouchableOpacity
            style={styles.sectiontwoButton}
            onPress={() => navigation.navigate('Match')}>
            <Text style={styles.sectiontwoButtonText}>Because I need something to make me whole </Text>
          </TouchableOpacity>                     
          <View style={styles.sectionone}>
            <TouchableOpacity   onPress={() => navigation.navigate('Answer')}style={styles.sectiononeButtonBack}>
              <Text style={styles.sectiononeButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  

export default function MatchNavigator() {
  
  return (
    <NavigationContainer independent={true}>
      
      <Stack.Navigator initialRouteName="Favorite">
        <Stack.Screen name="Favorite" component={Favorite}   options={{
            headerShown:false
        }} />
        <Stack.Screen name="Ethnicity" component={Ethnicity}   options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Gender" component={Gender}   options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Age" component={Age}   options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Sports" component={Sports}   options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Hobbies" component={Hobbies}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="Values" component={Values}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="Passion" component={Passion}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="Match" component={Match}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="Conversation" component={Conversation}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="Answer" component={Answer}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="Yes" component={Yes}   options={{
            headerShown:false
        }}/>
        <Stack.Screen name="WhyYes" component={WhyYes}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="No" component={No}   options={{
            headerShown:false
        }}/> 
        <Stack.Screen name="WhyNo" component={WhyNo}   options={{
            headerShown:false
        }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  sectiontwoButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    textAlign: 'center',
  },

  sectiontwoButtonIce:{
    backgroundColor: '#40E0D0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 55,
  },
  sectiontwoButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  sectiononeButton: {
    backgroundColor: '#40E0D0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    textAlign: 'center',
  },
  sectiononeButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 10,
    borderRadius: 30,
  },
  perfectMatchButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    width: 300,
    alignItems:'center',
   
  },
  perfectMatchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  sectiononeButtonBack:{
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
 
});
