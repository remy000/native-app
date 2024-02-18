import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = ({navigation}) => {
    const handleLogin = () => {
        // Handle login functionality
        // You can use libraries or APIs to implement the actual login process
      };
    
      const handleSignUp = () => {
        // Handle sign-up functionality
        // You can use libraries or APIs to implement the actual sign-up process
      };
    
      const handleGoogleSignIn = () => {
        navigation.navigate('App')
        // Handle Google sign-in functionality
        // You can use libraries or APIs to implement the actual Google sign-in process
      };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Image source={require('../assets/google.jpg')} style={styles.googleImg}/>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
  
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    button: {
      width: 200,
      height: 40,
      backgroundColor: '#00008b',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 16,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    googleButton: {
      width: 250,
      height: 40,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#00008b',
      display:'flex',
      flexDirection:'row'
    },
    googleButtonText: {
      color: '#00008b',
      fontSize: 16,
      fontWeight: 'bold',
    },
    googleImg:{
        height:25,
        width:25,
        marginRight:5
    }
  });
