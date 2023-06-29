
import * as types from './types';

const INITIAL_STATE = {
  predicts: [],
  totalPages: 0,
  page: 0,
  message: "",
  loading: false,
  error: null
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
        message: action.payload.message
      };
    case types.GET_PREDICT_FAILED:
      return {
        ...state,
        loading: false,
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
      return {
        ...state,
        predicts: updatedPredicts,
        loading: false,
        error: null,
      };
    case types.DELETE_PREDICT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default PredictReducer;
