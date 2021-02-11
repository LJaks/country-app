import { all } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import countrySagas from './country'

export default function* rootSaga() {
  yield all([...productSagas, ...uiSagas, ...countrySagas])
}
