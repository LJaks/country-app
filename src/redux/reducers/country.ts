import {
  CountryActions,
  CountryState,
  FETCH_COUNTRIES_PENDING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  // SET_COUNTRIES,
} from '../../types'

const initialState: CountryState = {
  pending: false,
  allCountries: [],
  error: null,
}

export default function countriesReducer(
  state: CountryState = initialState,
  action: CountryActions
): CountryState {
  switch (action.type) {
    case FETCH_COUNTRIES_PENDING:
      return {
        ...state,
        pending: true,
      }
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        pending: false,
        allCountries: action.payload.country,
      }
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    // case SET_COUNTRIES:
    //   return {
    //     ...state,
    //     allCountries: action.payload.country,
    //   }

    default:
      return state
  }
}
