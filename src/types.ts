// Action types
export const FETCH_COUNTRIES_PENDING = 'FETCH_COUNTRIES_PENDING'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const ADD_COUNTRY_VISITED = 'ADD_COUNTRY_VISITED'
export const REMOVE_COUNTRY_VISITED = 'REMOVE_COUNTRY_VISITED'

export type FlagProps = {
  flag: string
}
export type Languages = {
  name: string
}
export type Currencies = {
  name: string
  symbol: string
  code: string
}

export type Country = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
  nativeName?: string
  capital: string
  demonym?: string
  currencies: Currencies[]
}

// Filtering
export type SearchProps = {
  handleSearch: (searchName: string) => void
  searchName: string
}
// Sorting
export enum SortColumn {
  Flag = 'flag',
  Name = 'name',
  Region = 'region',
  Capital = 'capital',
}
export type HeaderName = {
  name: string
  value: SortColumn
}
export type TableHeaderProps = {
  handleSort: (column: SortColumn) => void
}
export type TableOfCountriesProps = {
  data: Country[]
  handleSort: (column: SortColumn) => void
}

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export type CartProps = {
  open: boolean
  handleClose: () => void
}

//fetch action types
export type FetchCountriesPending = {
  type: typeof FETCH_COUNTRIES_PENDING
}
export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: {
    country: Country[]
  }
}
export type FetchCountriesError = {
  type: typeof FETCH_COUNTRIES_ERROR
  error: Error
}

// Use this union in reducer
export type CountryActions =
  | FetchCountriesPending
  | FetchCountriesSuccess
  | FetchCountriesError

// Country action types
export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}
export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}
export type CartActions = AddCountryAction | RemoveCountryAction

export type AddCountryToVisitedAction = {
  type: typeof ADD_COUNTRY_VISITED
  payload: {
    country: Country
  }
}
export type RemoveCountryFromVisitedAction = {
  type: typeof REMOVE_COUNTRY_VISITED
  payload: {
    country: Country
  }
}
export type VisitedActions =
  | AddCountryToVisitedAction
  | RemoveCountryFromVisitedAction

// Theme types
export enum Color {
  GREEN = '#4caf50',
  VIOLET = '#673ab7',
  RED = '#f44336',
  BLUE = '#3f50b5',
  WHITE = '#FFF',
  ORANGE = '#ff9800',
  GRAY = '#bdbdbd',
}
export type ThemeType = 'blue' | 'green' | 'red' | 'violet' | 'orange' | 'gray'

export type Theme = {
  '--primary': Color
}

export type CountryState = {
  allCountries: Country[]
  pending: boolean
  error: Error | null
}

export type CartState = {
  countriesInCart: Country[]
}
export type VisitedState = {
  countriesInVisitedList: Country[]
}

export type AppState = {
  country: CountryState
  cart: CartState
  visited: VisitedState
}
