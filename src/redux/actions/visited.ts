import {
  ADD_COUNTRY_VISITED,
  Country,
  REMOVE_COUNTRY_VISITED,
  VisitedActions,
} from '../../types'

export function addVisitedCountry(country: Country): VisitedActions {
  return {
    type: ADD_COUNTRY_VISITED,
    payload: { country },
  }
}
export function removeVisitedCountry(country: Country): VisitedActions {
  return {
    type: REMOVE_COUNTRY_VISITED,
    payload: { country },
  }
}
