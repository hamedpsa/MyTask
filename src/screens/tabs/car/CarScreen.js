import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {setToken,} from '../../../redux/actions/LogInActions';
import store from '../../../redux/store';
import {initSocket,} from '../../../services/socket/socket';
class CarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtInSearch:''
    };
  }
  componentDidMount(){
    const {navigation} = this.props;
    initSocket({navigation});
  }
  render() {
    return (
      <View
      style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}
      >
        <Text>token:</Text>
        <Text>{this.props.token}</Text>
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

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarScreen);
//export default CarScreen;
