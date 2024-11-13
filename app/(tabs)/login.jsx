import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    if (retryCount >= 3) {
      Alert.alert('Account Locked', 'Too many failed attempts. Please try again later or reset your password.');
      return;
    }

    setLoading(true);

    try {
      // Retrieve stored email and password from SecureStore
      const registeredEmail = await SecureStore.getItemAsync('registeredEmail');
      const registeredPassword = await SecureStore.getItemAsync('registeredPassword');

      // Validate login
      if (email === registeredEmail && password === registeredPassword) {
        Alert.alert('Success', 'Logged in successfully');
        router.push('/home'); // Navigate to the home screen
      } else {
        Alert.alert('Error', 'Invalid email or password.');
        setRetryCount(retryCount + 1);
        setPassword('');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>
      {retryCount > 0 && <Text style={styles.retryText}>{`Failed Attempts: ${retryCount}/3`}</Text>}
      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <Link href="/register">
          <Text style={styles.linkText}>Sign Up</Text>
        </Link>
      </View>
      <View style={styles.footer}>
        <Link href="/register">
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#008080',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderColor: 'white',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'aquamarine',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  forgotText: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  retryText: {
    color: 'yellow',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Login;
