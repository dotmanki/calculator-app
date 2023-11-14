import React from 'react'

const CustomButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between px-2 text-xs'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <button
        {...props}
        className='relative w-16 h-6 bg-ground-toggle rounded-xl before:content-[""] before:absolute before:bg-secondary-key-toggle before:w-4 before:h-4 before:rounded-full before:left-1 before:top-1 before:translate-x-toggle before:transition-all before:hover:brightness-125'
      ></button>
    </div>
  )
}

export default CustomButton
