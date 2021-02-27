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
  orange: {
    '--primary': Color.ORANGE,
  },
  gray: {
    '--primary': Color.GRAY,
  },
}
