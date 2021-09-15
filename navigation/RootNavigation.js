import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {Welcome} from "../screens/Welcome";
import {Login} from "../screens/auth";
export default function RootNavigation() {
    const Stack=createStackNavigator();
    const ScreenOption={
headerShown:false,
    };
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={ScreenOption}>
      
        <Stack.Screen name="Login" component={Login} /> 
        </Stack.Navigator>
        </NavigationContainer>
    );
}