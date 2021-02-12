import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
//import BottomTabNavigator from './BottomTabNavigator';
import DrawerStackNavigator from './DrawerStackNavigator';
import LogInStackNavigator from './LogInStackNavigator';
import AddStackNavigator from './AddStackNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="SplashScreen"
        >
            <Stack.Screen
                options={{
                    title: 'SplashScreen',
                    headerShown: false,
                }}
                name="SplashScreen"
                component={SplashScreen} />
            <Stack.Screen
                options={{
                    title: 'LogIn Screen',
                    headerShown: false,
                }}
                name="LogInStackNavigator"
                component={LogInStackNavigator} />
            <Stack.Screen
                options={{
                    title: 'DrawerStackNavigator',
                    headerShown: false,
                }}
                name="DrawerStackNavigator"
                component={DrawerStackNavigator} />
            <Stack.Screen
                options={{
                    title: 'AddStackNavigator',
                    headerShown: false,
                }}
                name="AddStackNavigator"
                component={AddStackNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
);
export default MainStackNavigator;