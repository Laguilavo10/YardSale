import Link from 'next/link'
import React from 'react'

export function MenuMobile() {
  return (
    <div className=' fixed left-0 top-[63px] flex h-max flex-col justify-evenly border border-greenBrand bg-white p-6 pt-[60px] md:hidden'>
      <ul className='mt-6 flex flex-col gap-2'>
        <li className='mb-4'>
          <Link className='font-bold ' href='/'>
            CATEGORIES
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            All
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            Clothes
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            Electronics
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            Furnitures
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            Toys
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            Other
          </Link>
        </li>
      </ul>

      <ul className='mt-6 flex flex-col gap-2 border-t-4 border-greenBrand'>
        <li className='mt-6'>
          <Link className='font-bold' href='/'>
            My orders
          </Link>
        </li>
        <li>
          <Link className='font-bold' href='/'>
            My account
          </Link>
        </li>
      </ul>

      <ul className='mt-6 flex flex-col gap-2 border-t-4 border-greenBrand'>
        <li className='mt-6'>
          <Link href='/' className='font-bold'>
            platzi@example.com
          </Link>
        </li>
        <li>
          <Link href='/' className='font-bold text-greenBrand'>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  )
}
