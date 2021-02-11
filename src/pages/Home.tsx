import React, { useState } from 'react'
import orderBy from 'lodash/orderBy'

import useCountry from '../hooks/useCountry'
import { SortDirection, SortColumn } from '../types'
import TableOfCountries from '../components/Table'
import AppBar from '../components/AppBar'

export default function Home() {
  const [searchName, setSearchName] = useState('')
  const [data] = useCountry(searchName)
  const [columnToSort, setColumnToSort] = useState<SortColumn>(SortColumn.Empty)
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.Descending
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  }
  const handleSort = (column: SortColumn) => {
    setColumnToSort(column)
    setSortDirection(
      columnToSort === column
        ? sortDirection === SortDirection.Ascending
          ? SortDirection.Descending
          : SortDirection.Ascending
        : SortDirection.Ascending
    )
  }

  return (
    <>
      <AppBar searchName={searchName} handleSearch={handleSearch} />
      <TableOfCountries
        data={orderBy(data, columnToSort, sortDirection)}
        handleSort={handleSort}
      />
    </>
  )
}
