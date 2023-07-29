
import calculateTotalCoast from 'helper/CalculateCoast';
import * as types from './types';

const INITIAL_STATE = {
  predicts: [],
  oldPredicts: [],
  countries:[],
  championships: [],
  matchs: [],
  totalPages: 0,
  page: 0,
  loading: false,
  loadingOld:false,
  error: null,
  totalCoast: 0,
  totalOldCoast: 0,
};

function PredictReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PREDICT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_PREDICT_SUCCESS:
      return {
        ...state,
        loading: false,
        predicts: action.payload.results,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
        totalCoast: calculateTotalCoast(action.payload.results),
      };
    case types.GET_PREDICT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.toString(),
      };
    case types.GET_OLD_TIPS_REQUEST:
      return {
        ...state,
        loadingOld: true,
        error: null,
      };
    case types.GET_OLD_TIPS_SUCCESS:
      return {
        ...state,
        loadingOld: false,
        oldPredicts: action.payload.results,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
        totalOldCoast: calculateTotalCoast(action.payload.results),
      };
    case types.GET_OLD_TIPS_FAILED:
      return {
        ...state,
        loadingOld: false,
        error: action.payload.toString(),
      };
    case types.ADD_PREDICT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_PREDICT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_PREDICT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_PREDICT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_PREDICT_SUCCESS:
      const id = action.payload;
      const updatedPredicts = state.predicts.filter((predict) => predict._id !== id);
      const updatedOldPredicts = state.oldPredicts.filter((oldPredicts) => oldPredicts._id !== id);
      return {
        ...state,
        predicts: updatedPredicts,
        oldPredicts: updatedOldPredicts,
        loading: false,
        error: null,
      };
    case types.DELETE_PREDICT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case types.GET_COUNTRY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case types.GET_COUNTRY_SUCCESS:
        return {
          ...state,
          loading: false,
          countries: action.payload.results,
        };
      case types.GET_COUNTRY_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload.toString(),
        };
        case types.GET_CHAMPIONSHIP_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case types.GET_CHAMPIONSHIP_SUCCESS:
        return {
          ...state,
          loading: false,
          championships: action.payload.results,
        };
      case types.GET_CHAMPIONSHIP_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload.toString(),
        };
        case types.GET_MATCH_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case types.GET_MATCH_SUCCESS:
        return {
          ...state,
          loading: false,
          matchs: action.payload.results,
        };
      case types.GET_MATCH_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload.toString(),
        };
    default:
      return state;
  }
}


export default PredictReducer;
