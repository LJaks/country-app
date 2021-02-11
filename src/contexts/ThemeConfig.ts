import { Color, Theme, ThemeType } from '../types'

export const THEMES: Record<ThemeType, Theme> = {
  blue: {
    '--primary': Color.BLUE,
  },
  green: {
    '--primary': Color.GREEN,
  },
  red: {
    '--primary': Color.RED,
  },
  violet: {
    '--primary': Color.VIOLET,
  },
  gray: {
    '--primary': Color.GRAY,
  },
}
