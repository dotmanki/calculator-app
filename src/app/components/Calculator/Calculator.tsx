import React from 'react'
import Output from './Output'
import KeyPad from './KeyPad'

const Calculator = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <Output />
      <KeyPad />
    </div>
  )
}

export default Calculator
