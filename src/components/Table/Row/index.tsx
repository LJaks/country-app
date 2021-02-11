import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AddIcon from '@material-ui/icons/Add'
import { TableRow, TableCell, Button } from '@material-ui/core/'

import { AppState, Color, Country } from '../../../types'
import Flags from '../Flags'
import { useTheme } from '../../../contexts/ThemeContext'
import { addCountry } from '../../../redux/actions/cart'

export default function Row({
  flag,
  name,
  languages,
  population,
  region,
}: Country) {
  const { theme } = useTheme()
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
  }

  const countryInCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  ).find((cntr) => cntr.name === name)

  return (
    <TableRow>
      <TableCell>
        <Flags flag={flag} />
      </TableCell>
      <TableCell>
        <Link
          style={{ textDecoration: 'none', color: theme['--primary'] }}
          to={`/countries/${name}`}
        >
          {name}
        </Link>
      </TableCell>
      <TableCell>
        {languages.map((language, index) =>
          index === 0 ? language.name : `, ${language.name}`
        )}
      </TableCell>
      <TableCell>{population.toLocaleString('de-DE')}</TableCell>
      <TableCell>{region}</TableCell>
      <TableCell>
        {!countryInCart ? (
          <Button
            variant="contained"
            style={{ background: theme['--primary'], color: Color.WHITE }}
            onClick={() => handleAddCountry()}
          >
            <AddIcon />
          </Button>
        ) : (
          <Button
            disabled
            variant="contained"
            style={{ background: Color.GRAY }}
          >
            <AddIcon />
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}
