import { create } from 'zustand'

interface ThemeState {
  theme: 'default' | 'light' | 'dark'
  toggle: () => void
}

export const useTheme = create<ThemeState>((set) => ({
  theme: 'default',
  toggle: () => {
    set((state) => ({
      theme:
        state.theme === 'default'
          ? 'light'
          : state.theme === 'light'
          ? 'dark'
          : 'default',
    }))
  },
}))
