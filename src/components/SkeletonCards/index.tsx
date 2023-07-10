import React from 'react'

export default function SkeletonCards() {
  return (
    <>
      <div className='animate-pulse flex h-auto w-auto flex-col gap-3 rounded-lg bg-white p-4'>
        <span className='h-[200px] w-full bg-slate-400' />
        <span className='h-[20px] w-2/6 bg-slate-400' />
        <span className='h-[20px] w-full bg-slate-400' />
      </div>
    </>
  )
}
