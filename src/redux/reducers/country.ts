import {
  CountryActions,
  CountryState,
  // FETCH_COUNTRIES_ERROR,
  // FETCH_COUNTRIES_PENDING,
  // FETCH_COUNTRIES_SUCCESS,
  SET_COUNTRIES,
} from '../../types'

export default function countriesReducer(
  state: CountryState = { allCountries: [] },
  action: CountryActions
): CountryState {
  switch (action.type) {
    // case FETCH_COUNTRIES_PENDING:
    //   return {
    //     ...state,
    //     pending: true,
    //   }
    // case FETCH_COUNTRIES_SUCCESS:
    //   return {
    //     ...state,
    //     pending: false,
    //     countries: action.countries,
    //   }
    // case FETCH_COUNTRIES_ERROR:
    //   return {
    //     ...state,
    //     pending: false,
    //     error: action.error,
    //   }
    case SET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.country,
      }
    default:
      return state
  }
}
