import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>About our App!</Text>
        <Text style={styles.paragraph}>
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