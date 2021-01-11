import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainStackNavigator from '../navigators/MainStackNavigator';

const index = () => (
    <Provider store={store}>

        <MainStackNavigator />

    </Provider>
);
export default index;