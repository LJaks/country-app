import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  makeStyles,
  CardContent,
  Card,
  Typography,
  Button,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { AppState } from '../types'
import { useTheme } from '../contexts/ThemeContext'

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
    width: '70%',
    height: '70%',
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '',
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
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
    margin: 10,
  },
  button: {
    color: 'white',
    height: 50,
  },
  flag: {
    width: 300,
    borderRadius: 10,
  },
})

export default function Country() {
  const { name } = useParams<{ name: string }>()
  const { theme } = useTheme()
  const classes = useStyles()

  const country = useSelector((state: AppState) =>
    state.country.allCountries.find((cntr) => cntr.name === name)
  )

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
        <Card
          style={{ background: theme['--primary'] }}
          className={classes.card}
        >
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
            <Typography
              className={classes.text}
            >{`Capital: ${country.capital}`}</Typography>
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
          </CardContent>
        </Card>
      ) : (
        <p className={classes.title}>Country not found. Please try again!</p>
      )}
    </div>
  )
}
