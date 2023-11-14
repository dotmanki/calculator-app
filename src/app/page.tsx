'use client'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { useTheme } from './hooks/useTheme'
import Calculator from './components/Calculator/Calculator'

export default function Home() {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <main className='bg-ground-main w-100 h-screen p-6 lg:flex lg:justify-center lg:items-center'>
      <div className='lg:w-1/3'>
        <Navbar />
        <Calculator />
      </div>
    </main>
  )
}
