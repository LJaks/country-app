import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { Theme, ThemeType } from '../types'
import { THEMES } from './ThemeConfig'

export type ThemeContextProps = {
  themeType: ThemeType
  theme: Theme
  setTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'blue',
  theme: THEMES['blue'],
} as ThemeContextProps)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('blue')

  return (
    <ThemeContext.Provider
      value={{ themeType: theme, theme: THEMES[theme], setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
