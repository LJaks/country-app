import { combineReducers } from 'redux'

import country from './country'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    country,
    cart,
  })

export default createRootReducer
