import React from 'react'

import { Table, TableBody } from '@material-ui/core'

import { Country } from '../../types'
import TableHeader from './Header'
import Row from './Row'

export type TableOfCountriesProps = {
  data: Country[]
}

export default function TableOfCountries({ data }: TableOfCountriesProps) {
  return (
    <Table>
      <TableHeader />
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
