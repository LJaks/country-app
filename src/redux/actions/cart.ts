import { Country, CartActions, ADD_COUNTRY, REMOVE_COUNTRY } from '../../types'

export function addCountry(country: Country): CartActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}
export function removeCountry(country: Country): CartActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}
