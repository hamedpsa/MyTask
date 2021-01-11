import {combineReducers,} from 'redux';
import CarReducer from './CarReducer';
import LogInReducer from './LogInReducer';
import MapReducer from './MapReducer';
import MoreReducer from './MoreReducer';
import OtherReducer from './OtherReducer';
import WarningReducer from './WarningReducer';

const rootReducer = combineReducers({ CarReducer, LogInReducer, MapReducer, MoreReducer, OtherReducer, WarningReducer  });

export default rootReducer;