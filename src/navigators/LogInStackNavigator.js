import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInWithUserPass from '../screens/login/signin/SignInWithUserPass';
import SignInWithFingerPrint from '../screens/login/signin/SignInWithFingerPrint';
import SignInWithFace from '../screens/login/signin/SignInWithFace';
import SignUpStepOne from '../screens/login/singup/SignUpStepOne';
import SignUpStepTwo from '../screens/login/singup/SignUpStepTwo';
import SignUpStepThree from '../screens/login/singup/SignUpStepThree';
import SignUpCheckFingerPrint from '../screens/login/singup/SignUpCheckFingerPrint';
import SignUpCheckFaceDetect from '../screens/login/singup/SignUpCheckFaceDetect';

const Stack = createStackNavigator();

const LogInStackNavigator = () => (
    <Stack.Navigator
        screenOptions={{}}
        initialRouteName="SignInWithUserPass"
    >
        <Stack.Screen
            options={{
                title: 'SignInWithUserPass',
                headerShown: false,
            }}
            name="SignInWithUserPass"
            component={SignInWithUserPass} />
        <Stack.Screen
            options={{
                title: 'SignInWithFingerPrint',
                headerShown: false,
            }}
            name="SignInWithFingerPrint"
            component={SignInWithFingerPrint} />
        <Stack.Screen
            options={{
                title: 'SignInWithFace',
                headerShown: false,
            }}
            name="SignInWithFace"
            component={SignInWithFace} />
        <Stack.Screen
            options={{
                title: 'SignUpStepOne',
                headerShown: false,
            }}
            name="SignUpStepOne"
            component={SignUpStepOne} />
        <Stack.Screen
            options={{
                title: 'SignUpStepTwo',
                headerShown: false,
            }}
            name="SignUpStepTwo"
            component={SignUpStepTwo} />
        <Stack.Screen
            options={{
                title: 'SignUpStepThree',
                headerShown: false,
            }}
            name="SignUpStepThree"
            component={SignUpStepThree} />
        <Stack.Screen
            options={{
                title: 'SignUpCheckFingerPrint',
                headerShown: false,
            }}
            name="SignUpCheckFingerPrint"
            component={SignUpCheckFingerPrint} />
        <Stack.Screen
            options={{
                title: 'SignUpCheckFaceDetect',
                headerShown: false,
            }}
            name="SignUpCheckFaceDetect"
            component={SignUpCheckFaceDetect} />
    </Stack.Navigator>
);
export default LogInStackNavigator;