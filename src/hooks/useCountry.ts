import { useEffect, useMemo, useState } from 'react'
import { fetchCountries } from '../redux/actions/country'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, Country } from '../types'

export default function useCountry(
  searchName: string
  // sortOrder: string
  // sortColumn: SortColumn = SortColumn.Name
): [Country[]] {
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries
  )
  const [filter, setFilter] = useState<Country[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  const searchResult = useMemo(() => {
    //filtering
    let filtered = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(searchName.toLowerCase())
    })
    //sorting
    // filtered.sort((a, b) => {
    //   const aValue = a[sortColumn];
    //   const bValue = b[sortColumn];
    //   if (sortOrder === "asc") {
    //     if (!isNaN(+aValue) && !isNaN(+bValue)) {
    //       return +aValue - +bValue;
    //     }
    //     if (aValue < bValue) {
    //       return -1;
    //     } else if (aValue > bValue) {
    //       return 1;
    //     }
    //   } else {
    //     if (!isNaN(+aValue) && !isNaN(+bValue)) {
    //       return +bValue - +aValue;
    //     }
    //     if (aValue > bValue) {
    //       return -1;
    //     } else if (aValue < bValue) {
    //       return 1;
    //     }
    //   }
    //   return 0;
    // });
    setFilter(filtered)
  }, [allCountries, searchName])

  return [filter]
}
