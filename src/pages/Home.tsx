import React, { useState } from 'react'
import orderBy from 'lodash/orderBy'

import useCountry from '../hooks/useCountry'
import { SortDirection, SortColumn } from '../types'
import TableOfCountries from '../components/Table'
import AppBar from '../components/AppBar'
import Chart from '../components/Chart'
import background from '../assets/worldMap.svg'

export default function Home() {
  const [searchName, setSearchName] = useState('')
  const [data] = useCountry(searchName)
  const [columnToSort, setColumnToSort] = useState<SortColumn>()
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.Descending
  )

  const handleSearch = (searchName: string) => {
    setSearchName(searchName)
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
    <div>
      <AppBar searchName={searchName} handleSearch={handleSearch} />
      <div
        style={{
          backgroundImage: `url(${background}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '80% auto',
          backgroundPosition: 'center top',
          backgroundPositionY: '30px',
          padding: '40px 0',
          marginTop: '40px',
        }}
      >
        <Chart />
      </div>
      <TableOfCountries
        data={orderBy(data, columnToSort, sortDirection)}
        handleSort={handleSort}
      />
    </div>
  )
}
