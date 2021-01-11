import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import {signout,} from '../../../redux/actions/LogInActions';
import { connect } from 'react-redux';

class MoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndicator:false,
    };
  }
  async _signout() {
    this.setState({showIndicator:true});
    await this.props.signout();
    this.setState({showIndicator:false});
    this.props.navigation.replace('LogInStackNavigator')

  }

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <TouchableOpacity
          onPress={() => {
            this._signout()
          }}
        >

          <Text> LogOut </Text>
        </TouchableOpacity>
        {
          this.state.showIndicator &&
          <ActivityIndicator
            size="small"
            color="gray"
          />
        }
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
    signout: () => dispatch(signout()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen);
//export default MoreScreen;
