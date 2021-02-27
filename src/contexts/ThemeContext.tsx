import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Theme, ThemeType } from '../types'
import { THEMES } from './ThemeConfig'

export type ThemeContextProps = {
  themeType: ThemeType
  theme: Theme
  setTheme: (theme: ThemeType) => void
}

const storedTheme = (localStorage.getItem('theme') || 'blue') as ThemeType

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: storedTheme,
  theme: THEMES[storedTheme],
} as ThemeContextProps)

type ThemeProviderProps = {
  children?: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(storedTheme)

  const handleSetTheme = (theme: ThemeType) => {
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        themeType: theme,
        theme: THEMES[theme],
        setTheme: handleSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
