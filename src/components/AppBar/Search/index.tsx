import React, { useEffect, useState } from 'react'

import { InputBase, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { SearchProps } from '../../../types'

export default function Search({ searchName, handleSearch }: SearchProps) {
  const [displayValue, setDisplayValue] = useState(searchName)
  const [debounceValue, setDebounceValue] = useState(displayValue)

  useEffect(() => {
    setDisplayValue(searchName)
  }, [searchName])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(displayValue)
    }, 300)
    return () => clearTimeout(timeoutId)
  }, [displayValue])

  useEffect(() => {
    handleSearch(debounceValue)
  }, [debounceValue, handleSearch])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setDisplayValue(value)
  }

  return (
    <InputBase
      value={displayValue}
      onChange={handleOnChange}
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
