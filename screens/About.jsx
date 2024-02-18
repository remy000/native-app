import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../hooks/ThemeContext';

export default function About() {
    const { isDarkTheme, backgroundColor, textColor } = useTheme();
    const containerStyle = [
        styles.container,
        { backgroundColor: backgroundColor },
      ];
      const textStyle=[
        styles.text,
        {color:isDarkTheme?textColor:'#00008b'}
      ]
      const paragText=[
        styles.paragraph,
        {color:textColor}
      ]
  return (
    <View style={containerStyle}>
        <Text style={textStyle}>About our App!</Text>
        <Text style={paragText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit dicta incidunt voluptatibus corporis accusantium quos sint officiis enim delectus asperiores magni, deserunt repellat praesentium neque voluptates consequuntur perferendis unde?
        </Text>
        <Button title='ReadMore'/>
      
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:"#d3d3d3"
    },
    text:{
        marginTop:20,
        paddingTop:40,
        fontSize:30,
        fontWeight:'bold',
        color:'#00008b'
    },
    paragraph:{
        display:"flex",
        lineHeight:30,
        marginTop:30,
        padding:4,
        textAlign:'center',
        marginBottom:20,
        textTransform:'capitalize'

    },
})