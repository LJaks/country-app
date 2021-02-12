import { all } from 'redux-saga/effects'

import countrySagas from './country'

export default function* rootSaga() {
  yield all([...countrySagas])
}
