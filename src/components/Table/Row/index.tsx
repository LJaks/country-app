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
} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'

import { AppState, Color, Country } from '../../../types'
import Flags from '../Flags'
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
  const { flag, name, capital, region } = country
  const { theme } = useTheme()
  const dispatch = useDispatch()

  const handleAddCountry = () => {
    dispatch(addCountry(country))
  }

  const handleRemoveCountry = () => {
    dispatch(removeCountry(country))
  }

  const handleAddVisited = () => {
    dispatch(addVisitedCountry(country))
  }
  const handleRemoveVisited = () => {
    dispatch(removeVisitedCountry(country))
  }

  const countryInCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  ).find((cntr) => cntr.name === name)

  const countryVisited = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  ).find((cntr) => cntr.name === name)

  return (
    <TableRow>
      <TableCell style={{ textAlign: 'center' }}>
        <Flags flag={flag} />
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        <LightTooltip
          title="Read more"
          aria-label="Read more about a country"
          placement="bottom"
        >
          <Link
            style={{ textDecoration: 'none', color: theme['--primary'] }}
            to={`/countries/${name}`}
          >
            {name}
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
              !countryInCart ? handleAddCountry() : handleRemoveCountry()
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
              !countryVisited ? handleAddVisited() : handleRemoveVisited()
            }}
          >
            {!countryVisited ? <CheckIcon /> : <ClearIcon />}
          </Button>
        </LightTooltip>
      </TableCell>
    </TableRow>
  )
}
