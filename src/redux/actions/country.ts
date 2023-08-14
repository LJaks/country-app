import { Dispatch } from 'redux'
import {
  Country,
  CountryActions,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types'

export function fetchCountriesPending() {
  return {
    type: FETCH_COUNTRIES_PENDING,
  }
}
export function fetchCountriesSuccess(country: Country[]): CountryActions {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: { country },
  }
}
export function fetchCountriesError(error: Error) {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: { error },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountries() {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountriesPending())
    fetch(`https://restcountries.com/v3.1/all`)
      .then((resp) => resp.json())
      .then((countries) => {
        dispatch(fetchCountriesSuccess(countries))
      })
      .catch((error) => {
        dispatch(fetchCountriesError(error))
      })
  }
}
