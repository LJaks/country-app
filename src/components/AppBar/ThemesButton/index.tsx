import React from 'react'

import { IconButton, Menu, MenuItem } from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import PaletteIcon from '@material-ui/icons/Palette'
import { makeStyles } from '@material-ui/core/styles'

import { useTheme } from '../../../contexts/ThemeContect'
import { Color, ThemeType } from '../../../types'

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  line: {
    display: 'flex',
    with: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 7,
    width: 40,
    height: 40,
    marginRight: 10,
  },
})

export default function ThemesButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { setTheme } = useTheme()
  const classes = useStyles()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleThemeChange = (theme: ThemeType) => {
    setTheme(theme)
    setAnchorEl(null)
  }

  return (
    <div className="theme-block">
      <IconButton
        style={{ color: 'white' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <PaletteIcon />
        {anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.root}>
          <MenuItem onClick={() => handleThemeChange('blue')}>
            <div className={classes.line}>
              <span
                className={classes.icons}
                style={{ background: Color.BLUE }}
              >
                B
              </span>{' '}
              blue
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('green')}>
            <div className={classes.line}>
              <span
                className={classes.icons}
                style={{ background: Color.GREEN }}
              >
                G
              </span>{' '}
              green
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('red')}>
            <div className={classes.line}>
              <span className={classes.icons} style={{ background: Color.RED }}>
                R
              </span>{' '}
              red
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('violet')}>
            <div className={classes.line}>
              <span
                className={classes.icons}
                style={{ background: Color.VIOLET }}
              >
                V
              </span>{' '}
              violet
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  )
}
