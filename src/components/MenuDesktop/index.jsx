import Link from 'next/link'
import React from 'react'

export function MenuDesktop () {
  return (
    <div className='desktop-menu'>
      <ul>
        <li>
          <Link href='/' className='title'>
            My orders
          </Link>
        </li>

        <li>
          <Link href='/'>My account</Link>
        </li>

        <li>
          <Link href='/'>Sign out</Link>
        </li>
      </ul>
    </div>
  )
}
