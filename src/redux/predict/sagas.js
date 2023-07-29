import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as types from './types';
import { url } from '../../urlLoader';
import { getUnauthRequest } from 'helper/api';
import { deleteUnauthRequest } from 'helper/api';
import { postUnauthRequest } from 'helper/api';
import { postRequestFormData } from 'helper/api';


//fetch country games by date 
function* fetchCountryByDate(action) {
  try {
    const {date} = action.payload;
    let request = `${url}/fixture/getCountries/?date=${date}`;
    const data = yield getUnauthRequest(request);
   
    if (data.success) {
      yield put({ type: types.GET_COUNTRY_SUCCESS, payload: { results: data.data.country } });
    } else {
      yield put({ type: types.GET_COUNTRY_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_COUNTRY_FAILED, payload: error });
  }
}

//fetch championship games by date 
function* fetchChampionshipByDate(action) {
  try {
    const {date, country} = action.payload;
    let request = `${url}/fixture/getChampionships?date=${date}&country=${country}`;
    const data = yield getUnauthRequest(request);
    
    if (data.success) {
      yield put({ type: types.GET_CHAMPIONSHIP_SUCCESS, payload: { results: data.data.championship } });
    } else {
      yield put({ type: types.GET_CHAMPIONSHIP_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_CHAMPIONSHIP_FAILED, payload: error });
  }
}

//fetch championship games by date 
function* fetchMatchByDate(action) {
  console.log('payload', action)
  try {
    const {date, championship} = action.payload;
    let request = `${url}/fixture/getMatches?date=${date}&championship=${championship}`;
    const data = yield getUnauthRequest(request);
    console.log('match', data)
    if (data.success) {
      yield put({ type: types.GET_MATCH_SUCCESS, payload: { results: data.data } });
    } else {
      yield put({ type: types.GET_MATCH_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_MATCH_FAILED, payload: error });
  }
}


function* fetchPredictRequest(action) {
  try {
    const { dateFrom, dateTo, type, search, page, limit } = action.payload;
    let link = `${url}/predict/get?dateFrom=${dateFrom}&dateTo=${dateTo}&type=${type}&search=${search}&page=${page}&limit=${limit}`;
    const data = yield getUnauthRequest(link);

    if (data.success) {
      yield put({ type: types.GET_PREDICT_SUCCESS, payload: { results: data.data.results, totalPages: data.data.totalPages, page: data.data.page } });
    } else {
      yield put({ type: types.GET_PREDICT_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_PREDICT_FAILED, payload: error });
  }
}

function* fetchOldPredictRequest(action) {
  console.log('action', action)
  try {
    const { dateFrom, dateTo, type, search, page, limit } = action.payload;
    let link = `${url}/predict/get?dateFrom=${dateFrom}&dateTo=${dateTo}&type=${type}&search=${search}&page=${page}&limit=${limit}`;
    console.log('Lien-Old::', link);

    const data = yield getUnauthRequest(link);
    console.log('dataOld::', data);

    if (data.success) {
      yield put({ type: types.GET_OLD_TIPS_SUCCESS, payload: { results: data.data.results, totalPages: data.data.totalPages, page: data.data.page } });
    } else {
      yield put({ type: types.GET_OLD_TIPS_FAILED, payload: "echec recuperation des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_OLD_TIPS_FAILED, payload: error });
  }
}

function* deletePredictRequest(action) {
  try {
    const { id } = action.payload;
    const data = yield deleteUnauthRequest(`${url}/predict/delete?Id=${id}`, {});

    if (data.success) {
      yield put({ type: types.DELETE_PREDICT_SUCCESS, payload: id });
    } else {
      yield put({ type: types.DELETE_PREDICT_FAILED, payload: "echec suppression des données" });
    }

  } catch (error) {
    console.log(error);
    yield put({ type: types.DELETE_PREDICT_FAILED, payload: error });
  }
}

function* addPredictRequest(action) {
  try {
    const formData = action.payload;
    console.log('formData', formData)
    const data = yield postUnauthRequest(`${url}/predict/create`, formData);
    console.log('predict', data)

    if (data.success) {
      yield put({ type: types.ADD_PREDICT_SUCCESS, payload: data.data });
    } else {
      yield put({ type: types.ADD_PREDICT_FAILED, payload: 'Échec de l\'ajout de la prédiction' });
    }

  } catch (error) {
    console.error(error);
    yield put({ type: types.ADD_PREDICT_FAILED, payload: error });
  }
}


export default function* PredictSaga() {
  yield takeEvery(types.GET_PREDICT_REQUEST, fetchPredictRequest);
  yield takeEvery(types.GET_OLD_TIPS_REQUEST, fetchOldPredictRequest);
  yield takeLatest(types.ADD_PREDICT_REQUEST, addPredictRequest);
  yield takeLatest(types.DELETE_PREDICT_REQUEST, deletePredictRequest);
  yield takeLatest(types.GET_COUNTRY_REQUEST, fetchCountryByDate);
  yield takeLatest(types.GET_CHAMPIONSHIP_REQUEST, fetchChampionshipByDate);
  yield takeLatest(types.GET_MATCH_REQUEST, fetchMatchByDate);
}




