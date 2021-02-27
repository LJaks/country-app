import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import FavoriteIcon from '@material-ui/icons/Favorite'
import { IconButton, Badge } from '@material-ui/core/'

import WishList from '../../WishList'
import { AppState } from '../../../types'

export default function CartButton() {
  const [open, setOpen] = useState(false)

  const countriesinCart = useSelector(
    (state: AppState) => state.cart.countriesInCart
  )

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton
        edge="end"
        aria-label="want to visit countries"
        aria-haspopup="true"
        color="inherit"
        style={{ margin: '0 10px' }}
        onClick={handleOpen}
      >
        Wish List
        <Badge badgeContent={countriesinCart.length} color="secondary">
          <FavoriteIcon />
        </Badge>
      </IconButton>
      <WishList handleClose={handleClose} open={open} />
    </>
  )
}
