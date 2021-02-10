import { Input, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { SearchProps } from '../../../types'

export default function Search({ searchName, handleSearch }: SearchProps) {
  return (
    <Input
      value={searchName}
      onChange={handleSearch}
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
      style={{ color: 'white' }}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon style={{ color: 'white' }} />
        </InputAdornment>
      }
    />
  )
}
