import React from 'react'
import Key from './Key'

const KeyPad = () => {
  return (
    <div className='w-full bg-ground-toggle rounded-xl p-6 grid grid-cols-4 grid-rows-5 gap-4'>
      <Key label='7' />
      <Key label='8' />
      <Key label='9' />
      <Key label='DEL' secondary />
      <Key label='4' />
      <Key label='5' />
      <Key label='6' />
      <Key label='+' />
      <Key label='1' />
      <Key label='2' />
      <Key label='3' />
      <Key label='-' />
      <Key label='.' />
      <Key label='0' />
      <Key label='/' />
      <Key label='x' />
      <Key label='RESET' secondary double />
      <Key label='=' accent double />
    </div>
  )
}

export default KeyPad
