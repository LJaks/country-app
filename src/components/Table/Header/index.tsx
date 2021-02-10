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
    { name: 'Languages', value: SortColumn.Languages },
    { name: 'Population', value: SortColumn.Population },
    { name: 'Region', value: SortColumn.Region },
    { name: '', value: SortColumn.Empty },
  ]

  return (
    <TableHead>
      <TableRow>
        {headerNames.map(({ name, value }) => (
          <TableCell key={name} onClick={() => handleSort(value)}>
            <TableSortLabel>{name}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
