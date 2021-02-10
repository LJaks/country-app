import React from 'react'

import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles'
import { IconButton, Toolbar, AppBar } from '@material-ui/core/'

import Basket from './Basket'
import Search from './Search'
import ThemesButton from './ThemesButton'
import { SearchProps } from '../../types'
import { useTheme } from '../../contexts/ThemeContect'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    themeButton: {
      marginRight: theme.spacing(2),
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
        position="static"
        // position="fixed"
        className="app-bar"
        style={{ background: theme['--primary'] }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.themeButton}
            color="inherit"
            aria-label="menu"
          >
            <ThemesButton />
          </IconButton>
          <div className={classes.search}>
            <Search searchName={searchName} handleSearch={handleSearch} />
          </div>
          <div className={classes.root} />
          <Basket />
        </Toolbar>
      </AppBar>
    </div>
  )
}
