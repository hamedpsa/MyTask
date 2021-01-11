import {createStore, applyMiddleware} from 'redux';
//import reducer from './reducer';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;