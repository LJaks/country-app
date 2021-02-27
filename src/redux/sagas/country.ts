import { takeLatest, select } from 'redux-saga/effects'

function* saveToLocalStorage() {
  const state = yield select()
  yield localStorage.setItem('cart', JSON.stringify(state))
}
export default [takeLatest('*', saveToLocalStorage)]
