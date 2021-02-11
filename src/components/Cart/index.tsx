import React from 'react'

import Modal from '@material-ui/core/Modal'
import { IconButton } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import Flags from '../Table/Flags'
import { Link } from 'react-router-dom'
import { removeCountry } from '../../redux/actions/cart'

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
    },
    name: {
      display: 'flex',
      width: '100%',
      marginLeft: 20,
    },
  })
)

export type CartProps = {
  open: boolean
  handleClose: () => void
}

export default function Cart({ open, handleClose }: CartProps) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const countriesinCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  )

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <IconButton className={classes.button} onClick={handleClose}>
          X
        </IconButton>
        <h2 id="modal-title">Countries List</h2>
        {countriesinCart.length === 0 ? (
          <p>No countries to view!</p>
        ) : (
          countriesinCart.map((c) => (
            <div className={classes.line} id="modal-description" key={c.name}>
              <Flags flag={c.flag} />
              <Link className={classes.name} to={`/countries/${c.name}`}>
                {c.name}
              </Link>
              <IconButton
                onClick={() => {
                  dispatch(removeCountry(c))
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))
        )}
      </div>
    </Modal>
  )
}
