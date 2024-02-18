import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
export default function Home() {
    const { isDarkTheme, backgroundColor, textColor } = useTheme();
    const containerStyle = [
        styles.container,
        { backgroundColor: backgroundColor },
      ];
      const textStyle=[
        styles.text,
        {color:isDarkTheme?textColor:'#00008b'}
      ]
  return (
    <View style={containerStyle}>
        <Text style={textStyle}>Welcome</Text>
        <Text style={styles.paragraph}>To Our App</Text>
      
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    text:{
        display:'flex',
        fontSize:40,
        fontWeight:'bold',

    },
    paragraph:{
        color:'#00008b',
        fontSize:20,
        

    }
})
