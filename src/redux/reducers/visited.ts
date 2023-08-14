import {
  ADD_COUNTRY_VISITED,
  REMOVE_COUNTRY_VISITED,
  VisitedActions,
  VisitedState,
} from '../../types'

export default function countriesReducer(
  state: VisitedState = { countriesInVisitedList: [] },
  action: VisitedActions
): VisitedState {
  switch (action.type) {
    case ADD_COUNTRY_VISITED: {
      const { country } = action.payload
      if (
        state.countriesInVisitedList.find(
          (c) => c.name.common === country.name.common
        )
      ) {
        return state
      }
      // Always return new state (e.g, new object) if changed
      return {
        ...state,
        countriesInVisitedList: [...state.countriesInVisitedList, country],
      }
    }

    case REMOVE_COUNTRY_VISITED: {
      const { country } = action.payload
      const index = state.countriesInVisitedList.findIndex(
        (c) => c.name.common === country.name.common
      )
      if (index >= 0) {
        state.countriesInVisitedList.splice(index, 1)
        return {
          ...state,
          countriesInVisitedList: [...state.countriesInVisitedList],
        }
      }
      return state
    }

    default:
      return state
  }
}
