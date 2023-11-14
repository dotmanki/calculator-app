'use client'
import { useTheme } from '@/app/hooks/useTheme'
import CustomButton from './CustomButton'

const Switch = () => {
  const { theme, toggle } = useTheme()
  return (
    <>
      <div className='hidden'>
        <input
          type='checkbox'
          id='default'
          checked={theme === 'default'}
          readOnly
        />
        <label htmlFor='default'></label>
        <input
          type='checkbox'
          id='light'
          checked={theme === 'light'}
          readOnly
        />
        <label htmlFor='light'></label>
        <input type='checkbox' id='dark' checked={theme === 'dark'} readOnly />
        <label htmlFor='dark'></label>
      </div>
      <div className='flex items-end gap-5'>
        <label htmlFor='toggle' className='text-xs tracking-wider'>
          THEME
        </label>
        <CustomButton id='toggle' onClick={toggle} />
      </div>
    </>
  )
}

export default Switch
