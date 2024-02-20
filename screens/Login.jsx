import React,{useEffect,useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {GoogleSignin,GoogleSigninButton} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [error,setError]=useState();
  const [userInfo,setUserInfo]=useState(null);

  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:"321522277489-8d3oe4n76di4k9505vq0o9biu368a3fg.apps.googleusercontent.com",
    });
  },[]);

  const signin=async()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const user=await GoogleSignin.signIn();
      setUserInfo(user);
      navigation.navigate('App');
      
    } catch (e) {
      setError(e);
      console.log(e);
      
    }
  }


  return (
    <View style={styles.container}>
      {
        error&&<Text>{JSON.stringify(error)}</Text>
      }
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.googleButton} onPress={signin}>
        <Image source={require('../assets/google.jpg')} style={styles.googleImg}/>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity> */}
      <GoogleSigninButton onPress={signin}/>
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
