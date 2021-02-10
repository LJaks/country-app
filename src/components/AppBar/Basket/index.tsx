import React from 'react'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { IconButton } from '@material-ui/core/'

export default function Basket() {
  return (
    <IconButton
      edge="end"
      aria-label="basket"
      aria-haspopup="true"
      color="inherit"
    >
      <ShoppingBasketIcon />
    </IconButton>
  )
}
