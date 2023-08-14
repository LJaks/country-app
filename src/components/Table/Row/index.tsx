import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {
  TableRow,
  TableCell,
  Button,
  withStyles,
  Theme,
  Tooltip,
} from '@material-ui/core'

import { AppState, Color, Country } from '../../../types'
import CountryFlags from '../Flags'
import { useTheme } from '../../../contexts/ThemeContext'
import { addCountry, removeCountry } from '../../../redux/actions/cart'
import {
  addVisitedCountry,
  removeVisitedCountry,
} from '../../../redux/actions/visited'

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: 400,
  },
}))(Tooltip)

export default function Row(country: Country) {
  const { flags, name, capital, region } = country
  const { theme } = useTheme()
  const dispatch = useDispatch()

  const handleAddCountry = (country: Country) => {
    dispatch(addCountry(country))
  }

  const handleRemoveCountry = (country: Country) => {
    dispatch(removeCountry(country))
  }

  const handleAddVisited = (country: Country) => {
    dispatch(addVisitedCountry(country))
  }
  const handleRemoveVisited = (country: Country) => {
    dispatch(removeVisitedCountry(country))
  }

  const countryInCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  ).find((cntr) => cntr.name.common === name.common)

  const countryVisited = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  ).find((cntr) => cntr.name.common === name.common)

  return (
    <TableRow>
      <TableCell style={{ textAlign: 'center' }}>
        <CountryFlags flag={flags} />
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        <LightTooltip
          title="Press to read more"
          aria-label="Read more about a country"
          placement="top"
        >
          <Link
            style={{ textDecoration: 'none', color: theme['--primary'] }}
            to={`/countries/${name.common}`}
          >
            {name.common}
          </Link>
        </LightTooltip>
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        {capital ? capital : '-'}
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        {region ? region : '-'}
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        <LightTooltip
          title={
            !countryInCart
              ? 'Add country to wish list'
              : 'Remove country from wish list'
          }
          aria-label={
            !countryInCart
              ? 'Add country to wish list'
              : 'Remove country from wish list'
          }
          placement="top"
          arrow
        >
          <Button
            variant="contained"
            style={{
              background: !countryInCart ? theme['--primary'] : Color.GRAY,
              color: Color.WHITE,
            }}
            onClick={() => {
              !countryInCart
                ? handleAddCountry(country)
                : handleRemoveCountry(country)
            }}
          >
            {!countryInCart ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </Button>
        </LightTooltip>
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        <LightTooltip
          title={
            !countryVisited
              ? 'Add country to visited list'
              : 'Remove country from visited list'
          }
          aria-label={
            !countryVisited
              ? 'Add country to visited list'
              : 'Remove country from visited list'
          }
          placement="top"
          arrow
        >
          <Button
            variant="contained"
            style={{
              background: !countryVisited ? theme['--primary'] : Color.GRAY,
              color: Color.WHITE,
            }}
            onClick={() => {
              !countryVisited
                ? handleAddVisited(country)
                : handleRemoveVisited(country)
            }}
          >
            {!countryVisited ? <CheckIcon /> : <ClearIcon />}
          </Button>
        </LightTooltip>
      </TableCell>
    </TableRow>
  )
}
