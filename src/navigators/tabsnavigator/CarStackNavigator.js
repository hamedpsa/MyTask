import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CarScreen from '../../screens/tabs/car/CarScreen';

const Stack = createStackNavigator();

const CarStackNavigator = ()=>(
    <Stack.Navigator
    screenOptions={{}}
    initialRouteName="CarScreen"
    >
        <Stack.Screen
            options={{
                title: 'CarScreen',
                headerShown: false,
            }}
            name="CarScreen"
            component={CarScreen} />
    </Stack.Navigator>
);
export default CarStackNavigator;