'use client'

import React, { useState, useEffect } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

type ThemeOption = Theme | 'auto'

interface ThemeOptionConfig {
  value: ThemeOption
  label: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const themeOptions: ThemeOptionConfig[] = [
  {
    value: 'light',
    label: 'Light',
    icon: Sun,
    description: 'Light theme'
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: Moon,
    description: 'Dark theme'
  },
  {
    value: 'auto',
    label: 'Auto',
    icon: Monitor,
    description: 'System preference'
  }
]

export const ThemeSelector: React.FC = () => {
  const { setTheme, theme } = useTheme()
  const [value, setValue] = useState<ThemeOption>('auto')

  const cycleTheme = () => {
    const currentIndex = themeOptions.findIndex(option => option.value === value)
    const nextIndex = (currentIndex + 1) % themeOptions.length
    const nextTheme = themeOptions[nextIndex].value

    // Update local state immediately for responsive UI
    setValue(nextTheme)

    if (nextTheme === 'auto') {
      setTheme(null)
    } else {
      setTheme(nextTheme)
    }
  }

  // Initialize and sync with localStorage and theme context
  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey) as ThemeOption
    const currentValue = preference ?? 'auto'
    setValue(currentValue)
  }, [])

  // Sync with theme context changes - this is the key fix
  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey) as ThemeOption
    const currentValue = preference ?? 'auto'
    
    // Update local state to match the current theme preference
    setValue(currentValue)
  }, [theme]) // This will trigger whenever the theme context changes

  const currentOption = themeOptions.find(option => option.value === value) || themeOptions[2]
  const CurrentIcon = currentOption.icon

  return (
    <motion.button
      onClick={cycleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Current theme: ${currentOption.label}. Click to cycle to next theme`}
      title={`Current: ${currentOption.label} - Click to cycle themes`}
    >
      <motion.div
        key={value} // This ensures the icon animates when it changes
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center"
      >
        <CurrentIcon className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200" />
      </motion.div>
      
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors duration-200 hidden sm:inline">
        {currentOption.label}
      </span>
      
      {/* Subtle indicator that this cycles */}
      <motion.div
        className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  )
}
