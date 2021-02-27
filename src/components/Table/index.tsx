import React, { useState } from 'react'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
    <>
      <TableContainer
        component={Paper}
        style={{
          width: '95%',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          margin: '0 auto',
          marginBottom: '20px',
        }}
      >
        <Table>
          <TableHeader handleSort={handleSort} />
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((country: Country) => {
              const {
                name,
                flag,
                languages,
                currencies,
                population,
                region,
                capital,
              } = country
              return (
                <Row
                  key={name}
                  flag={flag}
                  name={name}
                  languages={languages}
                  population={population}
                  region={region}
                  capital={capital}
                  currencies={currencies}
                />
              )
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          count={data.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
        />
      </TableContainer>
    </>
  )
}
