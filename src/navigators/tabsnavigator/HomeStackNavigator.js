import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/tabs/home/HomeScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = ()=>(
    <Stack.Navigator
    screenOptions={{}}
    initialRouteName="HomeScreen"
    >
        <Stack.Screen
            options={{
                title: 'HomeScreen',
                headerShown: false,
            }}
            name="HomeScreen"
            component={HomeScreen} />
    </Stack.Navigator>
);
export default HomeStackNavigator;