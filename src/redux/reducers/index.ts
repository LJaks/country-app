import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import country from './country'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    country,
    cart,
  })

export default createRootReducer
