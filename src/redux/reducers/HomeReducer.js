import {SET_ITEMS,} from '../ACTION_TYPES';

const initialState = {items:null}

const HomeReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_ITEMS:
            return {...state,items:action.payload};

        default:
            return state;
    }
}
export default HomeReducer;