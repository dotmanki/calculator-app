import { useCalculator } from '@/app/hooks/useCalculator'
import React, { useEffect } from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  secondary?: boolean
  accent?: boolean
  double?: boolean
}
const Key = ({ label, secondary, accent, double }: Props) => {
  const { input, setInput } = useCalculator()

  const onClick = () => {
    if (Number(label) || label === '0' || label === '.') {
      setInput(input + label)
    }

    if (label === 'RESET') {
      setInput('')
    }

    if (label === 'DEL') {
      setInput(input.slice(0, -1))
    }

    if (label === '+' || label === '-' || label === 'x' || label === '/') {
      setInput(input + label)
    }

    if (label === '=') {
      try {
        setInput(eval(input).toString())
      } catch (error) {
        setInput('Syntax Error')
        setTimeout(() => {
          setInput('')
        }, 2000)
      }
    }
  }
  return (
    <button
      className={`w-full h-14 rounded text-3xl flex justify-center items-center shadow-key hover:brightness-125 ${
        secondary
          ? 'bg-primary-key-bg text-key-secondary-text shadow-primary-key-shadow text-xl'
          : accent
          ? 'bg-secondary-key-toggle text-key-accent-text shadow-secondary-key-shadow text-xl'
          : 'bg-accent-key-bg text-key-text'
      } ${double && 'col-span-2 w-full'}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Key
