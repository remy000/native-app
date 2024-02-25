import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Calculator from '../screens/Calculator';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../hooks/ThemeContext';
import ImagePicker from '../screens/ImagePicker';
import Contacts from '../screens/Contacts';

const Tab=createBottomTabNavigator();

export default function TabNavigator() {
  const {isDarkTheme,toggleTheme,backgroundColor,textColor}=useTheme();
  return (
    <Tab.Navigator
    options={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name='home' component={Home}
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            headerShown: false,
            tabBarStyle:{
              backgroundColor:backgroundColor
            },
            tabBarLabelStyle:{
              color:textColor
            }
          }}
        />
        <Tab.Screen name='calculator' component={Calculator}
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calculator" color={color} size={size} />
            ),
            headerShown: false,
            tabBarStyle:{
              backgroundColor:backgroundColor
            },
            tabBarLabelStyle:{
              color:textColor
            }
          }}
        />
        <Tab.Screen name='about' component={About}
         options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
            headerShown: false,
            tabBarStyle:{
              backgroundColor:backgroundColor
            },
            tabBarLabelStyle:{
              color:textColor
            }
          }}
        />
         <Tab.Screen name='Gallery' component={ImagePicker}
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="images" color={color} size={size} />
            ),
            headerShown: false,
            tabBarStyle:{
              backgroundColor:backgroundColor
            },
            tabBarLabelStyle:{
              color:textColor
            }
          }}
        />
          <Tab.Screen name='Contacts' component={Contacts}
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
              
            ),
            headerShown: false,
            tabBarStyle:{
              backgroundColor:backgroundColor
            },
            tabBarLabelStyle:{
              color:textColor
            }
          }}
        />
    </Tab.Navigator>
  )
}
