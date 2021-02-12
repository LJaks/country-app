import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { IconButton, Badge } from '@material-ui/core/'

import Cart from '../../Cart'
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
        aria-label="basket"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpen}
      >
        <Badge badgeContent={countriesinCart.length} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
      <Cart handleClose={handleClose} open={open} />
    </>
  )
}
