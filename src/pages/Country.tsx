import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Flags from '../components/Table/Flags'

export default function Country() {
  const { name } = useParams<{ name: string }>()

  const countries = useSelector((state: AppState) =>
    state.country.allCountries.find((country) => country.name === name)
  )

  if (!countries) {
    return <div>Country's not found</div>
  }

  return (
    <>
      <Button>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
      </Button>
      <div className="flag">
        <Flags flag={countries.flag} />
      </div>
      <div>
        <h1>{countries.name}</h1>
        <p>{`Region: ${countries.region}`}</p>
        <p>{`Population: ${countries.population.toLocaleString()}`}</p>
        <p>{`Languages: ${countries.languages.map((lang) => lang.name)}`}</p>
      </div>
    </>
  )
}
