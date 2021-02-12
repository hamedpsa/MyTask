import React, { Component, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './tabsnavigator/HomeStackNavigator';
import ExploreStackNavigator from './tabsnavigator/ExploreStackNavigator';
import WarningStackNavigator from './tabsnavigator/WarningStackNavigator';
import MoreStackNaviagtor from './tabsnavigator/MoreStackNaviagtor';
import BottomTabBarComponent from '../components/BottomTabBarComponent';
import AddResult from '../screens/tabs/add/AddResult';
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
                activeTintColor: "black",
                inactiveTintColor: "gray",
                showLabel: false,
                style: { height: 52 }
            }}
            tabBar={props => <BottomTabBarComponent {...props} />}
            initialRouteName='HomeStackNavigator'
        >
            <Tab.Screen
                name="HomeStackNavigator"
                component={HomeStackNavigator}
                options={{

                }}
            />
            <Tab.Screen
                name="ExploreStackNavigator"
                component={ExploreStackNavigator}
                options={{

                }}
            />
            <Tab.Screen
                name="AddResult"
                component={AddResult}
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