import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import DoneAllIcon from '@material-ui/icons/DoneAll'
import { IconButton, Badge } from '@material-ui/core/'

import { AppState } from '../../../types'
import Visited from '../../Visited'

export default function VisitedButton() {
  const [openVisited, setOpenVisited] = useState(false)

  const visitedCountries = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  )
  const handleOpenVisited = () => {
    setOpenVisited(true)
  }
  const handleCloseVisited = () => {
    setOpenVisited(false)
  }

  return (
    <>
      <IconButton
        edge="end"
        aria-label="visited countries"
        aria-haspopup="true"
        color="inherit"
        style={{ margin: '0 10px' }}
        onClick={handleOpenVisited}
      >
        Visited
        <Badge badgeContent={visitedCountries.length} color="secondary">
          <DoneAllIcon />
        </Badge>
      </IconButton>
      <Visited
        handleCloseVisited={handleCloseVisited}
        openVisited={openVisited}
      />
    </>
  )
}
