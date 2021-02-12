import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator, } from '@react-navigation/material-top-tabs';
import GaleryPicker from '../screens/tabs/add/GaleryPicker';
import CameraPicker from '../screens/tabs/add/CameraPicker';
import FilePicker from '../screens/tabs/add/FilePicker';
import VoicePicker from '../screens/tabs/add/VoicePicker';
import LocationPicker from '../screens/tabs/add/LocationPicker';
import AddResult from '../screens/tabs/add/AddResult';

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
    <Tab.Navigator

        initialRouteName="GaleryPicker"
    >
        <Tab.Screen
            name="GaleryPicker"
            component={GaleryPicker}
            options={{

            }}
        />
        <Tab.Screen
            name="CameraPicker"
            component={CameraPicker}
            options={{

            }}
        />
        <Tab.Screen
            name="FilePicker"
            component={FilePicker}
            options={{

            }}
        />
        <Tab.Screen
            name="VoicePicker"
            component={VoicePicker}
            options={{

            }}
        />
        <Tab.Screen
            name="LocationPicker"
            component={LocationPicker}
            options={{

            }}
        />

    </Tab.Navigator>
)

const AddStackNavigator = () => (
    <Stack.Navigator
        initialRouteName="TopTabNavigator"

    >
        <Stack.Screen
            options={{
                title: 'TopTabNavigator',
                headerShown: false,
            }}
            name="TopTabNavigator"
            component={TopTabNavigator}
        />
        <Stack.Screen
            options={{
                title: 'AddResult',
                headerShown: false,
            }}
            name="AddResult"
            component={AddResult}
        />
    </Stack.Navigator>
);
export default AddStackNavigator;