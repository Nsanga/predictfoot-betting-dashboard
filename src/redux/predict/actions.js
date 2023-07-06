
import * as types from './types';

export const fetchPredictRequest = (payload) => ({
  type: types.GET_PREDICT_REQUEST,
  payload: payload
});

export const fetchOldTipsRequest = (payload) => ({
  type: types.GET_OLD_TIPS_REQUEST,
  payload: payload,
});

export const addPredictRequest = (formData) => ({
  type: types.ADD_PREDICT_REQUEST,
  payload: formData,
});

export const addPredictSuccess = () => ({
  type: types.ADD_PREDICT_SUCCESS,
});

export const addPredictFailure = (error) => ({
  type: types.ADD_PREDICT_FAILED,
  payload: error,
});

export const updatePredictRequest = (id) => ({
  type: types.UPDATE_PREDICT_REQUEST,
  payload: id,
});

export const updatePredictSuccess = (data) => ({
  type: types.UPDATE_PREDICT_SUCCESS,
  payload: data,
});

export const updatePredictFailure = error => ({
  type: types.UPDATE_PREDICT_FAILED,
  payload: error,
});

export const deletePredictRequest = (id) => ({
  type: types.DELETE_PREDICT_REQUEST,
  payload: {id},
});

export const deletePredictSuccess = (id) => ({
  type: types.DELETE_PREDICT_SUCCESS,
  payload: id,
});

export const deletePredictFailure = error => ({
  type: types.DELETE_PREDICT_FAILED,
  payload: error,
});
