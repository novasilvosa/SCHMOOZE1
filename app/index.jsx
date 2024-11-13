import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import images from '../constants/images.js';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={styles.content}>
          <Image source={images.logo} style={styles.logo} />
          <Image source={images.szchmooze} style={styles.image} resizeMode="contain" />

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Now you can find friends or special someone to be with
            </Text>
          </View>
          <Text style={styles.subTitle}>
            Perfect match with szchmooze
          </Text>

          <CustomButton style={"styles.footer"}
            title="Continue with Email"
            handlePress={() => router.push('/register')}
            containerStyles="w-full mt-50"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="lightblue" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082', // Indigo color for background
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh',
    paddingHorizontal: 16,
  },
  logo: {
    width: 300,
    height: 250,
    marginTop: 50,
    
  },
  image: {
    width: 200,
    height: 100,
  },
  textContainer: {
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: "",
    color: "white"
  },
});
