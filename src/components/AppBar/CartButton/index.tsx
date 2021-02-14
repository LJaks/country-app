import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ExploreIcon from '@material-ui/icons/Explore'
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
        onClick={handleOpen}
      >
        <Badge badgeContent={countriesinCart.length} color="secondary">
          <ExploreIcon />
        </Badge>
        Wish List
      </IconButton>
      <WishList handleClose={handleClose} open={open} />
    </>
  )
}
