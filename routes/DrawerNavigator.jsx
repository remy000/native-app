import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import Calculator from '../screens/Calculator';
import About from '../screens/About';
import Home from '../screens/Home';


const Drawer=createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
    const toggleDrawer = () => {
      navigation.toggleDrawer();
    };
  
    return (
      <TouchableOpacity onPress={toggleDrawer}>
        <MaterialIcons name="menu" size={30} style={{marginLeft:4}} />
      </TouchableOpacity>
    );
  };

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator >
        <Drawer.Screen
        name='Home'
        component={TabNavigator}
        options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>
        })}
        />
        <Drawer.Screen name='Calculator' component={Calculator} 
         options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>
        })}/>
        <Drawer.Screen name='About' component={About}
         options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>
        })}/>

    </Drawer.Navigator>
  )
}
