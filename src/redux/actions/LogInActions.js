import { SET_TOKEN, } from '../ACTION_TYPES';
import { callApi, } from '../../services/restapi/baseApi';
import { SigninConfig, SignoutConfig } from '../../services/restapi/configs';
import AsyncStorage from '@react-native-async-storage/async-storage';


const setToken = (token) => ({ type: SET_TOKEN, payload: token });

const signin = (username, password) => async (dispatch) => {
    let response = await callApi(SigninConfig(username, password));
    if (response?.status === 200) {
        console.log(response.data);
        dispatch(setToken(response.data.token));
        await AsyncStorage.setItem('@token', response.data.token);
        await AsyncStorage.setItem('@username', username);
        await AsyncStorage.setItem('@password', password);
        console.log(response.data.token)
    }

}
const signout = () => async (dispatch) => {
    let response = await callApi(SignoutConfig());
    if (response?.status === 200) {
        console.log(response.data);
        dispatch(setToken(null));
        await AsyncStorage.setItem('@token', '');
    }

}

export { setToken, signin, signout }
