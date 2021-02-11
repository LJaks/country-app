import { useEffect, useState } from 'react'
import { fetchCountries } from '../redux/actions/country'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, Country } from '../types'

export default function useCountry(searchName: string): [Country[]] {
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries
  )
  const [filter, setFilter] = useState<Country[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    let filtered = allCountries.filter((country) =>
      country.name.toLowerCase().includes(searchName.toLowerCase())
    )
    setFilter(filtered)
  }, [allCountries, searchName])

  return [filter]
}
