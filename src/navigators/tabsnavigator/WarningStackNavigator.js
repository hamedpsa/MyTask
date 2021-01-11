import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WarninScreen from '../../screens/tabs/warning/WarninScreen';

const Stack = createStackNavigator();

const WarningStackNavigator = ()=>(
    <Stack.Navigator
    screenOptions={{}}
    initialRouteName="WarninScreen"
    >
        <Stack.Screen
            options={{
                title: 'WarninScreen',
                headerShown: false,
            }}
            name="WarninScreen"
            component={WarninScreen} />
    </Stack.Navigator>
);
export default WarningStackNavigator;