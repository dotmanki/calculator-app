import { create } from 'zustand'

interface CalculatorProps {
  input: string
  setInput: (input: string) => void
}

export const useCalculator = create<CalculatorProps>((set) => ({
  input: '',
  setInput: (input: string) => set({ input }),
}))
