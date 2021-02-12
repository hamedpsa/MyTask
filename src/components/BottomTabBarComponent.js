import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
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
    tab_btn: {
        width: '25%',
        height: 56,
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
                    console.log(state.index,route.name)
                    if (!isFocused && !event.defaultPrevented) {
                        if (route.name=== "AddResult") {
                            navigation.navigate("AddStackNavigator");
                        } else{

                            navigation.navigate(route.name);
                        }
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
                            index === 0 ?
                                (isFocused ?
                                    <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/homefill.png')} /> :
                                    <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/home.png')} />) :
                                index === 1 ?
                                    (isFocused ?
                                        <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/expfill.png')} /> :
                                        <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/exp.png')} />) :
                                    index === 2 ?
                                        (isFocused ?
                                            <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/add.png')} /> :
                                            <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/add.png')} />) :
                                        index === 3 ?
                                            (isFocused ?
                                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/warnfill.png')} /> :
                                                <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/warn.png')} />) :
                                            index === 4 ?
                                                (isFocused ?
                                                    <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/morefill.png')} /> :
                                                    <Image style={{ width: 24, height: 24, }} resizeMode='contain' source={require('../assets/images/tabsIcon/more.png')} />) : null
                        }
                        <Text style={{ color: isFocused ? 'black' : 'gray', fontFamily: Strings.fontName, fontSize: 10,  }}>
                            {index === 0 ? Strings.TabHomeName : index === 1 ? Strings.TabExploreName :index === 2 ? Strings.TabAddName :
                                index === 3 ? Strings.TabWarnName : index === 4 ? Strings.TabMoreName : null}
                        </Text>
                    </Pressable>
                );
            })}

        </View>

    )
}
export default BottomTabBarComponent;