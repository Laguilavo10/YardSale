// import "../../styles/Header.css"

import { useToggle } from '../../hooks/useToggle'
import { exportImg } from '../../utils/exportImg'
import { adminToggles } from '../../utils/adminToggle'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { MenuDesktop } from '../MenuDesktop'
import { MyOrder } from '../MyOrder'
import { MenuMobile } from '../MenuMobile'
import { useData } from '../../context/user'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthUser } from '@context/authUser'

export function Header() {
  const { isAuth } = useAuthUser()
  // console.log(isAuth)
  const myOrder = useToggle(false)
  const menuDesktop = useToggle(false)
  const menuMobile = useToggle(false)

  const { state: cart } = useData()

  if (cart.length === 0) {
    // cierra modal cuando no hay nada en el carrito
    if (myOrder.isOpen) return myOrder.setOpen(false)
  }

  return (
    <nav className='flex items-center justify-between bg-greenBrand px-6' id='header'>
      {/* menu mobile */}
      <Image
        src={exportImg('menu')}
        alt='menu'
        className='menu'
        onClick={() => adminToggles(menuMobile, myOrder)}
      />

      <div className='navbar-left gap-10'>
        <Link href='/'>
          <Image src={exportImg('lYS')} alt='logo' className='logo-mobile' />
        </Link>

        <ul className='flex gap-5'>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <Link href='/'>All</Link>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <Link href='/'>Clothes</Link>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <Link href='/'>Electronics</Link>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <Link href='/'>Furnitures</Link>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <Link href='/'>Toys</Link>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <Link href='/'>Others</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul className='flex gap-6'>
          <li
            className='navbar-shopping-cart pointer'
            onClick={() => adminToggles(myOrder, [menuDesktop, menuMobile])}>
            <Image src={exportImg('cart')} alt='shopping cart' />
            <div className='absolute -right-2 -top-2 flex h-4 w-4 justify-center rounded-full bg-light text-xs font-bold'>
              {cart.length}
            </div>
          </li>
          <li className='pointer flex items-center gap-3 rounded-md bg-light px-4 py-2 text-black'>
            <div className='text-sm'>{isAuth.email}</div>
            <Image
              className='rounded-full '
              src={isAuth.avatar ?? '/'}
              alt='avatar'
              width={30}
              height={30}
            />
            <ChevronDownIcon
              className='h-5 w-5 fill-gray-500 stroke-gray-500'
              onClick={() => adminToggles(menuDesktop, myOrder)}
            />
          </li>
        </ul>
      </div>
      {menuDesktop.isOpen && <MenuDesktop />}
      {menuMobile.isOpen && <MenuMobile />}
      {myOrder.isOpen && cart.length !== 0 && (
        <MyOrder
          closeModal={() => adminToggles(myOrder, [menuDesktop, menuMobile])}
        />
      )}
    </nav>
  )
}
