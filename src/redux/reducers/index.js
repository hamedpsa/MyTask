import {combineReducers,} from 'redux';
import HomeReducer from './HomeReducer';
import LogInReducer from './LogInReducer';
import MapReducer from './MapReducer';
import MoreReducer from './MoreReducer';
import OtherReducer from './OtherReducer';
import WarningReducer from './WarningReducer';

const rootReducer = combineReducers({ HomeReducer, LogInReducer, MapReducer, MoreReducer, OtherReducer, WarningReducer  });

export default rootReducer;