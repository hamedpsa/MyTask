import {SET_ITEMS,} from '../ACTION_TYPES';
import { callApi, } from '../../services/restapi/baseApi';
import {getItems, } from '../../services/restapi/configs';

const setItems = (items) => ({ type: SET_ITEMS, payload: items });

const fetchItems = () => async (dispatch) => {
    let response = await callApi(getItems());
    if (response?.status === 200) {
        console.log(response.data);
        dispatch(setItems(response.data));
    }

}
export { setItems, fetchItems,  }
