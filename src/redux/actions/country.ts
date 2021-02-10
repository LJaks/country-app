import { Dispatch } from 'redux'
import {
  Country,
  CountryActions,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  SET_COUNTRIES,
} from '../../types'

export function fetchCountriesPending() {
  return {
    type: FETCH_COUNTRIES_PENDING,
  }
}
export function fetchCountriesSuccess(countries: Country[]) {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: { countries },
  }
}
export function fetchCountriesError(error: Error) {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: { error },
  }
}
export function setCountries(country: Country[]): CountryActions {
  return {
    type: SET_COUNTRIES,
    payload: { country },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountries() {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountriesPending())
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((resp) => resp.json())
      .then((countries) => {
        dispatch(setCountries(countries))
        // dispatch(fetchCountriesSuccess(countries))
      })
      .catch((error) => {
        dispatch(fetchCountriesError(error))
      })
  }
}
