import React from 'react'

import { Table, TableBody } from '@material-ui/core'

import { Country, TableOfCountriesProps } from '../../types'
import TableHeader from './Header'
import Row from './Row'

export default function TableOfCountries({
  data,
  handleSort,
}: TableOfCountriesProps) {
  return (
    <Table>
      <TableHeader handleSort={handleSort} />
      <TableBody>
        {data.map((country: Country) => {
          const { flag, name, languages, population, region } = country
          return (
            <Row
              key={name}
              flag={flag}
              name={name}
              languages={languages}
              population={population}
              region={region}
            />
          )
        })}
      </TableBody>
    </Table>
  )
}
