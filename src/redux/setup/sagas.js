import { all } from 'redux-saga/effects';
import PredictSaga from '../predict/sagas';

/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([
    PredictSaga(),
  ]);
}
