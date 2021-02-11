import {
  CartActions,
  CartState,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
} from '../../types'

export default function countriesReducer(
  state: CartState = { countriesInCart: [] },
  action: CartActions
): CartState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { country } = action.payload
      if (state.countriesInCart.find((c) => c.name === country.name)) {
        return state
      }
      // Always return new state (e.g, new object) if changed
      return { ...state, countriesInCart: [...state.countriesInCart, country] }
    }

    case REMOVE_COUNTRY: {
      const { country } = action.payload
      const index = state.countriesInCart.findIndex(
        (c) => c.name === country.name
      )
      if (index >= 0) {
        state.countriesInCart.splice(index, 1)
        return { ...state, countriesInCart: [...state.countriesInCart] }
      }
      return state
    }

    default:
      return state
  }
}
