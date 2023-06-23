import React from 'react'

export default function CounterProducts({ initial, final, total }) {
  return (
    <p className='flex gap-1 text-sm text-gray-700 justify-end px-5'>
      Showing <span className='font-bold'>{initial}</span> to
      <span className='font-bold'> {final}</span>
      {/* of{' '}
      <span className='font-bold'>{total}</span> results */}
    </p>
  )
}
