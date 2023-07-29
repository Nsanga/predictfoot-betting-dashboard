
import * as types from './types';

//fetch country games by date 
export const fetchCountryByDate = (payload) => ({
  type: types.GET_COUNTRY_REQUEST,
  payload: payload
});

export const fetchChampionshipByDate = (payload) => ({
  type: types.GET_CHAMPIONSHIP_REQUEST,
  payload: payload
});

export const fetchMatchByDate = (payload) => ({
  type: types.GET_MATCH_REQUEST,
  payload: payload
});

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

export const updatePredictRequest = (id) => ({
  type: types.UPDATE_PREDICT_REQUEST,
  payload: id,
});

export const deletePredictRequest = (id) => ({
  type: types.DELETE_PREDICT_REQUEST,
  payload: {id},
});

