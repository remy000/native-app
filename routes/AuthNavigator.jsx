import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

import React from 'react'

export default function AuthNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='App' component={DrawerNavigator}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}
