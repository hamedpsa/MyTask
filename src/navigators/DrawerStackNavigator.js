import React, { Component, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = ()=>(
    <Drawer.Navigator>
        <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        />
    </Drawer.Navigator>
);
export default DrawerStackNavigator;