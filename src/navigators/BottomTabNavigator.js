import React, { Component, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarStackNavigator from './tabsnavigator/CarStackNavigator';
import MapStackNavigator from './tabsnavigator/MapStackNavigator';
import WarningStackNavigator from './tabsnavigator/WarningStackNavigator';
import MoreStackNaviagtor from './tabsnavigator/MoreStackNaviagtor';
import BottomTabBarComponent from '../components/BottomTabBarComponent';
import { Strings, } from '../constants/Strins';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
    useEffect(() => {
       // initSocket();
    })
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
            }}
            tabBar={props => <BottomTabBarComponent {...props} />}
            initialRouteName='CarStackNavigator'
        >
            <Tab.Screen
                name="CarStackNavigator"
                component={CarStackNavigator}
                options={{

                }}
            />
            <Tab.Screen
                name="MapStackNavigator"
                component={MapStackNavigator}
                options={{

                }}
            />
            <Tab.Screen
                name="WarningStackNavigator"
                component={WarningStackNavigator}
                options={{

                }}
            />
            <Tab.Screen
                name="MoreStackNaviagtor"
                component={MoreStackNaviagtor}
                options={{

                }}
            />

        </Tab.Navigator>
    )
};
export default BottomTabNavigator;