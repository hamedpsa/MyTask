import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../../screens/tabs/explore/ExploreScreen';

const Stack = createStackNavigator();

const ExploreStackNavigator = ()=>(
    <Stack.Navigator
    screenOptions={{}}
    initialRouteName="ExploreScreen"
    >
        <Stack.Screen
            options={{
                title: 'ExploreScreen',
                headerShown: false,
            }}
            name="ExploreScreen"
            component={ExploreScreen} />
    </Stack.Navigator>
);
export default ExploreStackNavigator;