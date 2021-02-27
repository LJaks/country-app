import React from 'react'

import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'

import { TableHeaderProps, HeaderName, SortColumn } from '../../../types'

export default function TableHeader({ handleSort }: TableHeaderProps) {
  const headerNames: HeaderName[] = [
    { name: 'Flag', value: SortColumn.Flag },
    { name: 'Name', value: SortColumn.Name },
    { name: 'Capital', value: SortColumn.Capital },
    { name: 'Region', value: SortColumn.Region },
  ]

  return (
    <TableHead>
      <TableRow>
        {headerNames.map(({ name, value }) => (
          <TableCell
            style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}
            key={name}
            onClick={() => handleSort(value)}
          >
            <TableSortLabel>{name}</TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}
