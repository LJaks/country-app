import React, { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core'

import { Country, TableOfCountriesProps } from '../../types'
import TableHeader from './Header'
import Row from './Row'

export default function TableOfCountries({
  data,
  handleSort,
}: TableOfCountriesProps) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Table>
      <TableHeader handleSort={handleSort} />
      <TableBody>
        {(rowsPerPage > 0
          ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : data
        ).map((country: Country) => (
          <Row
            key={country.name}
            flag={country.flag}
            name={country.name}
            languages={country.languages}
            population={country.population}
            region={country.region}
          />
        ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TablePagination
        count={data.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        page={page}
      />
    </Table>
  )
}
