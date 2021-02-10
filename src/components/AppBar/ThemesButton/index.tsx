import React from 'react'

import { IconButton, Menu, MenuItem } from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import PaletteIcon from '@material-ui/icons/Palette'
import { useTheme } from '../../../contexts/ThemeContect'
import { Color, ThemeType } from '../../../types'

export default function ThemesButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { setTheme } = useTheme()

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
        <MenuItem onClick={() => handleThemeChange('green')}>
          <div>
            <span style={{ background: Color.GREEN }}>G</span> green
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('red')}>
          <div>
            <span style={{ background: Color.RED }}>R</span> red
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('violet')}>
          <div>
            <span style={{ background: Color.VIOLET }}>V</span> violet
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
