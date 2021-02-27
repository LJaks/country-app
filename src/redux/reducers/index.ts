import { combineReducers } from 'redux'

import country from './country'
import cart from './cart'
import visited from './visited'

const createRootReducer = () =>
  combineReducers({
    country,
    cart,
    visited,
  })

export default createRootReducer
