import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  makeStyles,
  CardContent,
  Card,
  Typography,
  Button,
  Theme,
  withStyles,
  Tooltip,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { AppState, Color, Country } from '../types'
import { useTheme } from '../contexts/ThemeContext'
import {
  addCountry,
  addVisitedCountry,
  removeCountry,
  removeVisitedCountry,
} from '../redux/actions'

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: 400,
  },
}))(Tooltip)

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
  card: {
    minWidth: 275,
    width: '50%',
    height: '70%',
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(95, 93, 126, 0.4)',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.6)',
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  button: {
    color: 'white',
    height: 50,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.6)',
  },
  flag: {
    width: 300,
    borderRadius: 10,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.6)',
  },
})

export default function CountryPage() {
  const { name } = useParams<{ name: string }>()
  const { theme } = useTheme()
  const classes = useStyles()
  const dispatch = useDispatch()

  const country = useSelector((state: AppState) =>
    state.country.allCountries.find((cntr) => cntr.name === name)
  )

  const countryInCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  ).find((cntr) => cntr.name === name)

  const countryVisited = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  ).find((cntr) => cntr.name === name)

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

  return (
    <div className={classes.root}>
      <div style={{ marginTop: '50px' }}>
        <Button
          className={classes.button}
          style={{ background: theme['--primary'] }}
        >
          <ArrowBackIcon />
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            Back Home
          </Link>
        </Button>
      </div>
      {country ? (
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <img
              className={classes.flag}
              src={country.flag}
              alt="Country flag"
            />
            <Typography className={classes.title} variant="h2" component="h2">
              {country.name}
            </Typography>
            <Typography
              className={classes.text}
            >{`Native name: ${country.nativeName}`}</Typography>
            <Typography className={classes.text}>{`Capital: ${
              country.capital ? country.capital : '-'
            }`}</Typography>
            <Typography
              className={classes.text}
            >{`Region: ${country.region}`}</Typography>
            <Typography
              className={classes.text}
            >{`Demonym: ${country.demonym}`}</Typography>
            <Typography
              className={classes.text}
            >{`Population: ${country.population.toLocaleString()}`}</Typography>
            <Typography
              className={classes.text}
            >{`Languages: ${country.languages.map(
                (lang) => lang.name
              )}`}</Typography>
            <Typography
              className={classes.text}
            >{`Currency: ${country.currencies.map(
                (curr) => curr.name
              )} (symbol: ${country.currencies.map(
                (curr) => curr.symbol
              )}, code: ${country.currencies.map(
                (curr) => curr.code
              )})`}</Typography>
            <div>
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
                  className={classes.button}
                  style={{
                    background: !countryInCart
                      ? theme['--primary']
                      : Color.GRAY,
                    color: Color.WHITE,
                    margin: '10px',
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
                  className={classes.button}
                  style={{
                    background: !countryVisited
                      ? theme['--primary']
                      : Color.GRAY,
                    color: Color.WHITE,
                    margin: '10px',
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
            </div>
          </CardContent>
        </Card>
      ) : (
        <p className={classes.title}>Country not found. Please try again!</p>
      )}
    </div>
  )
}
