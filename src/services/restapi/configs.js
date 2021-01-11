import axios from 'axios';
import store from '../../redux/store';

const BaseUrl = 'https://mytest.com/server1';

export const SigninConfig = (username,password)=>{
    console.log(username,password)
    let data = JSON.stringify({"username":username,"password":password});
    return{
        method: 'post',
        url: `${BaseUrl}/sign-in`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
}
export const SignoutConfig = ()=>{
    return{
      method: 'get',
      url: `${BaseUrl}/sign-out`,
      headers: { 
        'Authorization': `Bearer ${store.getState().LogInReducer.token}`
      }
    }
}