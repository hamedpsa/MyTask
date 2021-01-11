import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ImageBackground, Modal, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Strings, } from '../../../constants/Strins';
import { LoginStyles, } from '../../../styles/LoginStyles/SpalshScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { setToken, } from '../redux/action';
import { connect } from 'react-redux';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class SignUpStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _renderFlags() {
    return (
      <View
        style={{
          width: 0.86 * Width, height: 100, flexDirection: 'row-reverse',
          alignItems: 'flex-end', justifyContent: 'space-around'
        }}
      >
        <Image
          style={{ width: 22, height: 53, }}
          source={require("../../../assets/images/one_in.png")}
        />
        <Image
          style={{ width: 22, height: 22, }}
          source={require("../../../assets/images/two_dis.png")}
        />
        <Image
          style={{ width: 22, height: 22, }}
          source={require("../../../assets/images/three_dis.png")}
        />

      </View>
    )
  }
  _renderStepOneForm() {
    return (
      <View
        style={{ width: 0.86 * Width, backgroundColor: 'white', elevation: 36, borderRadius: 5, padding: 10, }}
      >
        <View
          style={{
            width: '100%', height: 42, flexDirection: 'row', 
          }}
        >
          <View
            style={{ width: '60%', height: '100%',justifyContent:'center',alignItems:'flex-end' }}
          >
            <View
              style={{
                width: '82%', height: 34, borderRadius: 5, backgroundColor: '#f6f6f6',
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <TextInput
                style={{ width: '100%', height:'100%', fontSize: 12,}}
              />

            </View>

          </View>
          <View
            style={{ width: '40%', height: '100%',
            alignItems:'flex-end',justifyContent:'center',paddingRight:4 }}
          >
            <Text
            style={{
              fontFamily:'iransans',fontSize:12,color:'#565656',
            }}
            >نام خودرو</Text>

          </View>

        </View>
        <View
          style={{
            width: '100%', height: 42, flexDirection: 'row', 
          }}
        >
          <View
            style={{ width: '60%', height: '100%',justifyContent:'center',alignItems:'flex-end' }}
          >
            <View
              style={{
                width: '82%', height: 34, borderRadius: 5, backgroundColor: '#f6f6f6',
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <TextInput
                style={{ width: '100%', height:'100%', fontSize: 12,}}
              />

            </View>

          </View>
          <View
            style={{ width: '40%', height: '100%',
            alignItems:'flex-end',justifyContent:'center',paddingRight:4 }}
          >
            <Text
            style={{
              fontFamily:'iransans',fontSize:12,color:'#565656',
            }}
            >شماره سریال</Text>

          </View>

        </View>
        <View
          style={{
            width: '100%', height: 42, flexDirection: 'row', 
          }}
        >
          <View
            style={{ width: '60%', height: '100%',justifyContent:'center',alignItems:'flex-end' }}
          >
            <View
              style={{
                width: '82%', height: 34, borderRadius: 5, backgroundColor: '#f6f6f6',
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <TextInput
                style={{ width: '100%', height:'100%', fontSize: 12,}}
              />

            </View>

          </View>
          <View
            style={{ width: '40%', height: '100%', 
            alignItems:'flex-end',justifyContent:'center',paddingRight:4 }}
          >
            <Text
            style={{
              fontFamily:'iransans',fontSize:12,color:'#565656',
            }}
            >کد گارانتی</Text>

          </View>

        </View>
        <View
        style={{ width: '100%', height: 10, flexDirection: 'row', 
      }}
        >

        </View>

        <View
          style={{
            width: '100%', height: 48, justifyContent:'center',alignItems:'center'
          }}
        >
          <TouchableOpacity
          style={{width:'50%',height:32,justifyContent:'center',
          alignItems:'center',backgroundColor:'#bee9e7',borderRadius:5}}
          onPress={()=>{
            this.props.navigation.navigate('SignUpStepTwo')
          }}
          >
            <Text
            style={{fontFamily:'iransans',fontSize:12,color:'#189a93'}}
            >بعدی</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
  _renderHeader() {
    return (
      <View
        style={{
          width: '100%', height: 56,
        }}
      >
        <View
          style={{
            width: '100%', flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 24,
            }}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../assets/images/arrow_back.png')}
              resizeMode="contain"
            />

          </TouchableOpacity>
          <Text
            style={{ fontFamily: 'iransans', fontSize: 18, fontWeight: 'bold', color: '#4f4f4f' }}
          >ثبت نام</Text>
          <View style={{ width: 20, height: 20 }}>

          </View>

        </View>
        <View
          style={{
            width: '100%', height: 0.5, backgroundColor: 'gray'
          }}
        />


      </View>
    )
  }

  render() {
    return (
      <View
        style={{
          width: '100%', 
          flex: 1, 
          backgroundColor: 'white'
        }}
      >
        <ImageBackground
          style={{
            width: Width, 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
          source={require('../../../assets/images/bkg.png')}
          resizeMode="repeat"
        >
          {
            this._renderHeader()
          }
          <View
            style={{
              width: '100%',
              flex: 1,
              //backgroundColor: 'rgba(255,255,255,0.88)',
              //justifyContent: 'center', 
              alignItems: 'center',
              //paddingTop: 0.14 * Height,
            }}
          >
            <View
              style={{
                width: '100%', height: '20%', justifyContent: 'flex-end', alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.90)',

              }}
            >
              {this._renderFlags()}

            </View>
            <View
              style={{
                width: '100%', height: '80%', justifyContent: 'flex-start', alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.94)',

              }}
            >
              {
                this._renderStepOneForm()
              }

            </View>

          </View>

          <Image
            style={{
              width: Width,
              height: 0.71 * Width,
              backgroundColor: 'rgba(255,255,255,0.98)'
            }}
            source={require('../../../assets/images/BG.png')}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    // token: state.token,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // setToken: (token) => dispatch(setToken(token)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpStepOne);
//export default SignUpStepOne;
