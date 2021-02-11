import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Flags from '../components/Table/Flags'
import { useTheme } from '../contexts/ThemeContect'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '50%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    color: 'white',
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
    <div>
      <Button style={{ background: theme['--primary'] }}>
        <Link to="/">
          <ArrowBackIcon className={classes.button} />
        </Link>
      </Button>
      {country ? (
        <Card className={classes.root}>
          <CardContent>
            <div className="flag">
              <Flags flag={country.flag} />
            </div>
            <Typography className={classes.title} variant="h2" component="h2">
              {country.name}
            </Typography>
            {/* <h1>{country.name}</h1> */}
            <p>{`Region: ${country.region}`}</p>
            <p>{`Population: ${country.population.toLocaleString()}`}</p>
            <p>{`Languages: ${country.languages.map((lang) => lang.name)}`}</p>
          </CardContent>
        </Card>
      ) : (
        <p className={classes.title}>Country not found. Please try again!</p>
      )}
    </div>
  )
}
