import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Pressable, Image } from 'react-native';
import { Strings, } from '../constants/Strins';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 56,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tab_btn:{
        width:'25%',
        height:56 , 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

const BottomTabBarComponent = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tab_btn}
                    >
                        {
                        index===0?
                            (isFocused ?
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/car_enable.png')} /> :
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/car_disable.png')} />):
                        index===1?
                            (isFocused ?
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/map_enable.png')} /> :
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/map_disable.png')} />):
                        index===2?
                            (isFocused ?
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/alert_enable.png')} /> :
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/alert_disable.png')} />):
                        index===3?
                            (isFocused ?
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/more_enable.png')} /> :
                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/more_disable.png')} />):null
                        }
                        <Text style={{ color: isFocused ? Strings.appColor : Strings.grayColor,fontFamily:Strings.fontName,fontSize:10,fontWeight:'700' }}>
                            {index===0?Strings.TabCarName:index===1?Strings.TabMapName:
                            index===2?Strings.TabWarningName:index===3?Strings.TabMoreName:null}
                        </Text>
                    </Pressable>
                );
            })}

        </View>

    )
}
export default BottomTabBarComponent;