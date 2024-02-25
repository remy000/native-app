import React,{useState,useEffect} from 'react'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';
import Calculator from '../screens/Calculator';
import About from '../screens/About';
import Home from '../screens/Home';
import ImagePicker from '../screens/ImagePicker';
import Contacts from '../screens/Contacts';
import { useTheme } from '../hooks/ThemeContext';



const Drawer=createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  const {textColor}=useTheme();
    const toggleDrawer = () => {
      navigation.toggleDrawer();
    };

  
  
    return (
      <TouchableOpacity onPress={toggleDrawer}>
        <MaterialIcons name="menu" size={30} style={{marginLeft:4, color:textColor}}  />
      </TouchableOpacity>
    );
  };

export default function DrawerNavigator() {
  const {isDarkTheme,toggleTheme,backgroundColor,textColor}=useTheme();
  return (
    <Drawer.Navigator>
        <Drawer.Screen
        name='Home'
        component={TabNavigator}
        options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>,
            drawerStyle:{
              backgroundColor:backgroundColor,
            },
            drawerLabelStyle:{
              color:textColor
            },
            headerStyle:{
              backgroundColor:backgroundColor,
            },
            headerTitleStyle:{
              color:textColor
            },
        })}
        />
        <Drawer.Screen name='Calculator' component={Calculator} 
         options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>,
            drawerStyle:{
              backgroundColor:backgroundColor,
              color:textColor
            },
            drawerLabelStyle:{
              color:textColor
            },
            headerStyle:{
              backgroundColor:backgroundColor,
            },
            headerTitleStyle:{
              color:textColor
            }
        })}/>
        <Drawer.Screen name='About' component={About}
         options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>,
            drawerStyle:{
              backgroundColor:backgroundColor,
            },
            drawerLabelStyle:{
              color:textColor
            },
            headerStyle:{
              backgroundColor:backgroundColor,
            },
            headerTitleStyle:{
              color:textColor
            }
        })}/>
         <Drawer.Screen
        name='Images'
        component={ImagePicker}
        options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>,
            drawerStyle:{
              backgroundColor:backgroundColor,
            },
            drawerLabelStyle:{
              color:textColor
            },
            headerStyle:{
              backgroundColor:backgroundColor,
            },
            headerTitleStyle:{
              color:textColor
            },
        })}
        />
         <Drawer.Screen
        name='Contacts'
        component={Contacts}
        options={({navigation})=>({
            headerLeft:()=><CustomHeader navigation={navigation}/>,
            drawerStyle:{
              backgroundColor:backgroundColor,
            },
            drawerLabelStyle:{
              color:textColor
            },
            headerStyle:{
              backgroundColor:backgroundColor,
            },
            headerTitleStyle:{
              color:textColor
            },
        })}
        />
        <Drawer.Screen
        name="ThemeToggle"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                name={isDarkTheme ? 'moon' : 'sunny'}
                size={24}
                style={{ marginRight: 10,color:textColor}}
              />
              <Text style={{color:textColor}}>Toggle Theme</Text>
            </View>
          ),
          drawerStyle:{
            backgroundColor:backgroundColor
          },
          drawerLabelStyle:{
            color:textColor
          },
          headerStyle:{
            backgroundColor:backgroundColor,
          },
          headerTitleStyle:{
            color:textColor
          }
        }}
      >
        {() => (
          <View style={{backgroundColor:backgroundColor, flex:1, color:textColor }}>
            <Text style={{ margin: 16,  color:textColor, fontSize:20}}>
              Choose your theme:
            </Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme}
              style={{ marginBottom: 16 }}
            />
            <Text style={{color:textColor, fontSize:20, marginLeft:16}}>
              {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
            </Text>
          </View>
        )}
      </Drawer.Screen>
    

    </Drawer.Navigator>
    
  )
}