import { Color, Theme, ThemeType } from '../types'

export const THEMES: Record<ThemeType, Theme> = {
  green: {
    '--primary': Color.GREEN,
  },
  red: {
    '--primary': Color.RED,
  },
  violet: {
    '--primary': Color.VIOLET,
  },
}
