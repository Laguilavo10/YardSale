// import "../../styles/Header.css"

import { useToggle } from '../../hooks/useToggle'
import { exportImg } from '../../utils/exportImg'
import { adminToggles } from '../../utils/adminToggle'

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
    <nav>
      <Image
        src={exportImg('menu')}
        alt='menu'
        className='menu'
        onClick={() => adminToggles(menuMobile, myOrder)}
      />

      <div className='navbar-left'>
        <Image src={exportImg('lYS')} alt='logo' className='logo-mobile' />

        <ul>
          <li>
            <Link href='/'>All</Link>
          </li>
          <li>
            <Link href='/'>Clothes</Link>
          </li>
          <li>
            <Link href='/'>Electronics</Link>
          </li>
          <li>
            <Link href='/'>Furnitures</Link>
          </li>
          <li>
            <Link href='/'>Toys</Link>
          </li>
          <li>
            <Link href='/'>Others</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li
            className='navbar-shopping-cart pointer'
            onClick={() => adminToggles(myOrder, [menuDesktop, menuMobile])}>
            <Image src={exportImg('cart')} alt='shopping cart' />
            <div>{cart.length}</div>
          </li>
          <li className='navbar-email pointer'>{isAuth.email}</li>
          <li onClick={() => adminToggles(menuDesktop, myOrder)}>
            <Image
              className='navbar-avatar pointer'
              src={isAuth.avatar ?? '/'}
              alt='avatar'
              width={30}
              height={30}
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
