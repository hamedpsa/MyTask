import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';
import { Strings, } from '../constants/Strins';
import {SplashScreenStyles,} from '../styles/LoginStyles/SpalshScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken, } from '../redux/actions/LogInActions';
import { connect } from 'react-redux';
 
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    setTimeout(async () => {
      let token = await AsyncStorage.getItem('@token');
      if (!token) {
       // this.props.navigation.replace('LogInStackNavigator');
        this.props.navigation.replace('DrawerStackNavigator');

      } else {
        this.props.setToken(token);
        this.props.navigation.replace('DrawerStackNavigator');
      }
    }, 3000);

  }

  render() {
    return (
      <View
        style={SplashScreenStyles.splash_screen_container}
      >

        <ImageBackground
          style={SplashScreenStyles.splash_screen_img_background}
          source={require('../assets/images/bkg.png')}
          resizeMode="repeat"
        >
          <View
            style={SplashScreenStyles.splash_screen_upper_view}
          >

            <Image
              style={SplashScreenStyles.splash_screen_behyab}
              source={require('../assets/images/behyab.png')}
            />
            <Text
              style={SplashScreenStyles.splash_screen_behyab_text}
            >{Strings.appHelpingText}</Text>
          </View>

          <Image
            style={SplashScreenStyles.splash_screen_lower_img}
            source={require('../assets/images/BG.png')}
            resizeMode="contain"
          />
        </ImageBackground>


      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
//export default SplashScreen;
