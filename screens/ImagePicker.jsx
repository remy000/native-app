import React,{useState} from 'react'
import {Button, Image,View, StyleSheet, Text} from 'react-native'
import * as Picker from 'expo-image-picker'

const ImagePicker = () => {
    const [selectedImg, setSelectedImg]=useState(null);
    const [error,setError]=useState('');
    const pickImage=async()=>{
        const {status}=await Picker.requestMediaLibraryPermissionsAsync();
        if(status!=='granted'){
            setError('permission denied');
            return;
        }
        const results=await Picker.launchImageLibraryAsync({
            mediaTypes:Picker.MediaTypeOptions.Images,
            quality:1,
            allowsEditing:true,
            aspect:[4,3]
        });
        if (!results.canceled){
            setSelectedImg(results.assets[0].uri);
        }
    }
    return (
        <View style={styles.container}>
            <Text>{error?error:''}</Text>
          {selectedImg && (
            <Image source={{ uri: selectedImg }} style={styles.image} />
          )}
          <Button title="Select Image" onPress={pickImage} />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
      },
    });

export default ImagePicker
