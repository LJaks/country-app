import React, { useState } from 'react'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { IconButton } from '@material-ui/core/'

import Cart from '../../Cart'

export default function CartButton() {
  const [open, setOpen] = useState(false)

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
        <ShoppingBasketIcon />
      </IconButton>
      <Cart handleClose={handleClose} open={open} />
    </>
  )
}
