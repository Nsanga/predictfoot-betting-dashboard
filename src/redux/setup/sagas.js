import { all } from 'redux-saga/effects';
import PredictSaga from '../predict/sagas';
import LandingSaga from 'redux/landingPage/sagas';

/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([
    PredictSaga(),
    LandingSaga()
  ]);
}
