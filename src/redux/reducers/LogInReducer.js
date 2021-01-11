import {SET_TOKEN,} from '../ACTION_TYPES';

const initialState = {token:null}

const LogInReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_TOKEN:
            return {...state,token:action.payload};

        default:
            return state;
    }
}
export default LogInReducer;