import React, { Component } from 'react';
import {
  View, Text, Image, Dimensions, ImageBackground, Modal,
  TouchableOpacity, Pressable, TextInput, ActivityIndicator, Alert
} from 'react-native';
import { Strings, } from '../../../constants/Strins';
import { SigninStyles, } from '../../../styles/LoginStyles/SigninStyles';
import { setToken, signin, } from '../../../redux/actions/LogInActions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class SignInWithUserPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpass: false,
      showIndicator: false,
      username: '',
      password: '',
    };
  }
  _renderSigninForm() {
    return (

      <View
        style={SigninStyles.signin_form_container}
      >
        <View
          style={SigninStyles.signin_form_box}
        >
          <View
            style={SigninStyles.signin_form_box_left}
          >
            <View
              style={SigninStyles.signin_form_input_lay}
            >
              <TextInput
                ref={(ref) => this.usernameInput = ref}
                style={SigninStyles.signin_form_textinput}
                autoFocus={false}
                //placeholder=' search '
                value={this.state.username}
                maxLength={100}
                selectionColor={'gray'}
                onChangeText={async (txt) => {
                  this.setState({ username: txt });
                }}
              />
              <View
                style={{ width: 24, height: '100%' }}
              />

            </View>

          </View>
          <View
            style={SigninStyles.signin_form_box_right}
          >
            <Image
              style={SigninStyles.sigin_form_lable_ic}
              source={require('../../../assets/images/username_ic.png')}
              resizeMode="contain"
            />
            <Text
              style={SigninStyles.signin_form_lable_txt}
            >نام کاربری</Text>

          </View>

        </View>
        <View
          style={SigninStyles.signin_form_box}
        >
          <View
            style={SigninStyles.signin_form_box_left}
          >
            <View
              style={SigninStyles.signin_form_input_lay}
            >
              <TextInput
                ref={(ref) => this.passwordInput = ref}
                style={SigninStyles.signin_form_textinput}
                autoFocus={false}
                //placeholder=' search '
                value={this.state.password}
                maxLength={100}
                selectionColor={'gray'}
                onChangeText={async (txt) => {
                  this.setState({ password: txt });
                }}
                secureTextEntry={!this.state.showpass}
              />
              <TouchableOpacity
                style={SigninStyles.signin_form_show_pass}
                onPress={() => {
                  this.setState({ showpass: !this.state.showpass })
                }}
              >

                {
                  this.state.showpass ?
                    <Image
                      style={{ width: 24, height: 24, }}
                      source={require('../../../assets/images/show_pass.png')}
                      resizeMode="contain"
                    /> :
                    <Image
                      style={{ width: 24, height: 24, }}
                      source={require('../../../assets/images/hide_pass.png')}
                      resizeMode="contain"

                    />
                }
              </TouchableOpacity>

            </View>

          </View>
          <View
            style={SigninStyles.signin_form_box_right}
          >
            <Image
              style={SigninStyles.sigin_form_lable_ic}
              source={require('../../../assets/images/password_ic.png')}
              resizeMode="contain"
            />
            <Text
              style={SigninStyles.signin_form_lable_txt}
            >رمز عبور </Text>

          </View>

        </View>
        <View
          style={SigninStyles.signin_form_fgpass_lay}
        >
          <View
            style={SigninStyles.signin_form_fgpass_lay_left}
          >
            <TouchableOpacity
              style={SigninStyles.signin_form_fgpass_btn}
              onPress={() => { }}
            >
              <Text
                style={SigninStyles.signin_form_fgpass_text}
              >رمز عبور خود را فراموش کرده اید؟</Text>

            </TouchableOpacity>

          </View>
          <View
            style={{
              width: '34%', height: '100%',
            }}
          ></View>

        </View>

        <View
          style={SigninStyles.signin_form_down_lay}
        >
          <View
            style={SigninStyles.signin_form_down_lay_left}
          >
            <View
              style={SigninStyles.signin_form_down_lay_left_gap}
            >
            </View>
            <TouchableOpacity
              style={SigninStyles.signin_form_down_lay_phone_btn}
              onPress={()=>{
                console.log(this.props.token)
                console.log(this.props.token===undefined)
              }}
            >
              <Image
                style={SigninStyles.signin_form_down_lay_phone_ic}
                source={require('../../../assets/images/phone.png')}
              />
              <Text
                style={SigninStyles.signin_form_down_lay_phone_txt}
              > 02158431</Text>

            </TouchableOpacity>

          </View>
          <View
            style={SigninStyles.signin_form_down_lay_mid}
          >
            <TouchableOpacity
              style={SigninStyles.signin_form_signin_btn}
              onPress={() => {
                this._signin();
              }}
            >
              <Text
                style={SigninStyles.signin_form_signin_txt}
              >ورود</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={SigninStyles.signin_form_signup_btn}
              onPress={() => {
                this.props.navigation.navigate("SignUpStepOne")
              }}
            >
              <Text
                style={SigninStyles.signin_form_signup_txt}
              >ثبت نام</Text>

            </TouchableOpacity>
          </View>
          <View
            style={{ width: '29%', }}
          >
          </View>
        </View>
      </View>
    )
  }
  async _signin() {
    const { username, password } = this.state;
    this.setState({ showIndicator: true });
    await this.props.signin(username, password);
    this.setState({ showIndicator: false });
    if (this.props.token===null || this.props.token===undefined) {
      Alert.alert('Error','An error is occoured!!!')
    }else{
      this.props.navigation.replace('BottomTabNavigator')
    }

  }
 async componentDidMount(){
   const username = await AsyncStorage.getItem('@username');
   const password = await AsyncStorage.getItem('@password');
   this.setState({username,password})

  }

  render() {
    return (
      <View
        style={SigninStyles.siginin_conatiner}
      >
        <ImageBackground
          style={SigninStyles.sigin_img_background}
          source={require('../../../assets/images/bkg.png')}
          resizeMode="repeat"
        >
          <View
            style={SigninStyles.sigin_main}
          >
            <View
              style={SigninStyles.signin_main_uperview}
            >

              <Image
                style={SigninStyles.signin_behyab_icon}
                source={require('../../../assets/images/behyab.png')}
              />
              <Text
                style={SigninStyles.signin_behyab_text}
              >{Strings.appHelpingText}</Text>
            </View>
            <View
              style={SigninStyles.signin_form_bcg}
            >
              {
                this._renderSigninForm()
              }
              {
                this.state.showIndicator &&
                <ActivityIndicator
                  size="small"
                  color="gray"
                />
              }

            </View>

          </View>

          <Image
            style={SigninStyles.signin_lower_img}
            source={require('../../../assets/images/bcg.png')}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.LogInReducer.token,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),

    signin: (username, password) => dispatch(signin(username, password)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInWithUserPass);
//export default SignInWithUserPass;
