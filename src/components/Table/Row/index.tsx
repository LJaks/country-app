import React, { useState } from 'react'
import { Color, Country } from '../../../types'
import Flags from '../Flags'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { Link } from 'react-router-dom'

import { TableRow, TableCell } from '@material-ui/core/'
import { useTheme } from '../../../contexts/ThemeContect'
import { useDispatch } from 'react-redux'
import { addCountry } from '../../../redux/actions/cart'

export default function Row({
  flag,
  name,
  languages,
  population,
  region,
}: Country) {
  const { theme } = useTheme()
  const [addedToCart, setAddedToCart] = useState(false)
  const dispatch = useDispatch()

  const handleAddCountry = () => {
    const country = {
      flag,
      name,
      languages,
      population,
      region,
    }
    dispatch(addCountry(country))
    setAddedToCart(true)
  }

  return (
    <TableRow>
      <TableCell>
        <Flags flag={flag} />
      </TableCell>
      <TableCell>
        <Link to={`/countries/${name}`}>{name}</Link>
      </TableCell>
      <TableCell>
        {languages.map((language, index) =>
          index === 0 ? language.name : `, ${language.name}`
        )}
      </TableCell>
      <TableCell>{population.toLocaleString('de-DE')}</TableCell>
      <TableCell>{region}</TableCell>
      <TableCell>
        <Button
          // disabled={disabled}
          variant="contained"
          style={
            !addedToCart
              ? { background: theme['--primary'], color: Color.WHITE }
              : { background: Color.GRAY }
          }
          onClick={() => handleAddCountry()}
        >
          <AddIcon />
        </Button>
      </TableCell>
    </TableRow>
  )
}
