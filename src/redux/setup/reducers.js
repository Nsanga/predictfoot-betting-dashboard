import { combineReducers } from 'redux';
import PredictReducer from '../predict/reducers';
import LandingReducer from '../landingPage/reducers';


/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
  PredictReducer,
  LandingReducer
});

export default rootReducer;
