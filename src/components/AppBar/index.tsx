import React from 'react'

import {
  Toolbar,
  AppBar,
  createStyles,
  fade,
  makeStyles,
  Theme,
} from '@material-ui/core'

import CartButton from './CartButton'
import Search from './Search'
import ThemesButton from './ThemesButton'

import { SearchProps } from '../../types'
import { useTheme } from '../../contexts/ThemeContext'
import VisitedButton from './VisitedButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
  })
)

export default function AppNavBar({ searchName, handleSearch }: SearchProps) {
  const classes = useStyles()
  const { theme } = useTheme()

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        // position="fixed"
        className="app-bar"
        style={{ background: theme['--primary'] }}
      >
        <Toolbar>
          <ThemesButton />
          <div className={classes.search}>
            <Search searchName={searchName} handleSearch={handleSearch} />
          </div>
          <div className={classes.root} />
          <CartButton />
          <VisitedButton />
        </Toolbar>
      </AppBar>
    </div>
  )
}
