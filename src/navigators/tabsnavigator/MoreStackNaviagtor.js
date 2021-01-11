import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoreScreen from '../../screens/tabs/more/MoreScreen';
const Stack = createStackNavigator();

const MoreStackNavigator = ()=>(
    <Stack.Navigator
    screenOptions={{}}
    initialRouteName="MoreScreen"
    >
        <Stack.Screen
            options={{
                title: 'MoreScreen',
                headerShown: false,
            }}
            name="MoreScreen"
            component={MoreScreen} />
    </Stack.Navigator>
);
export default MoreStackNavigator;