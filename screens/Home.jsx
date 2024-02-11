import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.paragraph}>To Our App</Text>
      
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#d3d3d3'
        
    },
    text:{
        color:'#00008b',
        display:'flex',
        fontSize:40,
        fontWeight:'bold',

    },
    paragraph:{
        color:'#00008b',
        fontSize:20,
        

    }
})
