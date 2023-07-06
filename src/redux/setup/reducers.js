import { combineReducers } from 'redux';
import PredictReducer from '../predict/reducers';


/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
  PredictReducer,
});

export default rootReducer;
