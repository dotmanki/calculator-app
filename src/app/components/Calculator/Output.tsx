import { useCalculator } from '@/app/hooks/useCalculator'
import React from 'react'

const Output = () => {
  const { input } = useCalculator()
  return (
    <div className='w-100 h-20 rounded-xl bg-ground-screen flex justify-end items-center px-6 text-4xl text-primary-text'>
      {input}
    </div>
  )
}

export default Output
