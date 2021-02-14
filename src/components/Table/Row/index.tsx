import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AddIcon from '@material-ui/icons/Add'
import CheckIcon from '@material-ui/icons/Check'
import {
  TableRow,
  TableCell,
  Button,
  withStyles,
  Theme,
} from '@material-ui/core/'
import Tooltip from '@material-ui/core/Tooltip'

import { AppState, Color, Country } from '../../../types'
import Flags from '../Flags'
import { useTheme } from '../../../contexts/ThemeContext'
import { addCountry } from '../../../redux/actions/cart'
import { addVisitedCountry } from '../../../redux/actions/visited'

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    // backgroundColor: theme.palette.common.black,
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: 400,
  },
}))(Tooltip)

export default function Row({
  flag,
  name,
  languages,
  population,
  region,
}: Country) {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  // const classes = LightTooltip()

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

  const handleVisited = () => {
    const country = {
      flag,
      name,
      languages,
      population,
      region,
    }
    dispatch(addVisitedCountry(country))
  }

  const countryInCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  ).find((cntr) => cntr.name === name)

  const countryVisited = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  ).find((cntr) => cntr.name === name)

  return (
    <TableRow>
      <TableCell>
        <Flags flag={flag} />
      </TableCell>
      <TableCell>
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
      <TableCell>
        {languages.map((language, index) =>
          index === 0 ? language.name : `, ${language.name}`
        )}
      </TableCell>
      <TableCell>{population.toLocaleString('de-DE')}</TableCell>
      <TableCell>{region}</TableCell>
      <TableCell>
        {!countryInCart ? (
          <LightTooltip
            title="Add country to wish list"
            aria-label="Add country to wish list"
            placement="top"
            arrow
          >
            <Button
              variant="contained"
              style={{ background: theme['--primary'], color: Color.WHITE }}
              onClick={() => handleAddCountry()}
            >
              <AddIcon />
            </Button>
          </LightTooltip>
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
      <TableCell>
        {!countryVisited ? (
          <LightTooltip
            title="Add country to visited list"
            aria-label="Add country to visited list"
            placement="top"
            arrow
          >
            <Button
              variant="contained"
              style={{ background: theme['--primary'], color: Color.WHITE }}
              onClick={() => handleVisited()}
            >
              <CheckIcon />
            </Button>
          </LightTooltip>
        ) : (
          <Button
            disabled
            variant="contained"
            style={{ background: Color.GRAY }}
          >
            <CheckIcon />
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}
