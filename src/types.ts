// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const FETCH_COUNTRIES_PENDING = 'FETCH_COUNTRIES_PENDING'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SET_COUNTRIES = 'SET_COUNTRIES'

export type FlagProps = {
  flag: string
}
export type Languages = {
  name: string
}

export type Country = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
}
export type SearchProps = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchName: string
}

//fetch action types

export type FetchCountriesPending = {
  type: typeof FETCH_COUNTRIES_PENDING
}
export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  // countries: Country[]
}
export type FetchCountriesError = {
  type: typeof FETCH_COUNTRIES_ERROR
  error: Error
}
export type FetchCountries = {
  type: typeof FETCH_COUNTRIES
}

export type SetCountries = {
  type: typeof SET_COUNTRIES
  payload: {
    country: Country[]
  }
}

// Use this union in reducer
export type CountryActions =
  | FetchCountriesPending
  | FetchCountriesSuccess
  | FetchCountriesError
  | FetchCountries
  | SetCountries

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// Theme types

export enum Color {
  GREEN = '#008000',
  VIOLET = '#9E25FC',
  RED = '	#FF0000',
  WHITE = '#FFF',
}
export type ThemeType = 'green' | 'red' | 'violet'

export type Theme = {
  '--primary': Color
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}
//Product action types
export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

export type CountryState = {
  allCountries: Country[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  country: CountryState
}
