import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  IconButton,
  Modal,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'

import Flags from '../Table/Flags'
import { removeVisitedCountry } from '../../redux/actions'
import { AppState } from '../../types'
import { useTheme } from '../../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'fixed',
      width: '70%',
      height: '70%',
      right: 'calc(50% - 35%)',
      top: 'calc(50% - 35%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid transparent',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 4, 3),
      overflow: 'hidden',
    },
    content: {
      // overflowY: 'scroll',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center,',
    },
    overflow: {
      overflowY: 'scroll',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center,',
    },
    button: {
      position: 'absolute',
      right: 0,
      top: 0,
      marginRight: 20,
      marginTop: 20,
      fontWeight: 'bold',
    },
    line: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '70%',
      marginBottom: 10,
      margin: '0 auto',
    },
    name: {
      display: 'flex',
      width: '100%',
      marginLeft: 20,
      textDecoration: 'none',
    },
  })
)

export type VisitedProps = {
  openVisited: boolean
  handleCloseVisited: () => void
}

export default function Visited({
  openVisited,
  handleCloseVisited,
}: VisitedProps) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { theme } = useTheme()

  const visitedCountries = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  )

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={openVisited}
      onClose={handleCloseVisited}
    >
      <div className={classes.paper}>
        <IconButton className={classes.button} onClick={handleCloseVisited}>
          X
        </IconButton>
        <h2 id="modal-title">List of visited countries</h2>
        {visitedCountries.length === 0 ? (
          <p>No visited countries to view!</p>
        ) : (
          <div
            className={
              visitedCountries.length > 6 ? classes.overflow : classes.content
            }
          >
            {visitedCountries.map((c) => (
              <div className={classes.line} id="modal-description" key={c.name}>
                <Flags flag={c.flag} />
                <Link
                  className={classes.name}
                  style={{ color: theme['--primary'] }}
                  to={`/countries/${c.name}`}
                >
                  {c.name}
                </Link>
                <IconButton
                  onClick={() => {
                    dispatch(removeVisitedCountry(c))
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}
