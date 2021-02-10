import React from 'react'

import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'

export default function TableHeader() {
  const headerNames = ['Flag', 'Name', 'Languages', 'Population', 'Region', '']

  return (
    <TableHead>
      <TableRow>
        {headerNames.map((name) => (
          <TableCell key={name}>
            <TableSortLabel>{name}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
