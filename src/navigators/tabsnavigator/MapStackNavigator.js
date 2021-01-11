import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../../screens/tabs/map/MapScreen';

const Stack = createStackNavigator();

const MapStackNavigator = ()=>(
    <Stack.Navigator
    screenOptions={{}}
    initialRouteName="MapScreen"
    >
        <Stack.Screen
            options={{
                title: 'MapScreen',
                headerShown: false,
            }}
            name="MapScreen"
            component={MapScreen} />
    </Stack.Navigator>
);
export default MapStackNavigator;