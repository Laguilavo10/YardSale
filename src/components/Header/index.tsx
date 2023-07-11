/* eslint-disable react/jsx-closing-bracket-location */
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
import { CategorysID, useCategory } from '@context/useCategory'
import { useState } from 'react'

const menuItems = [
  {
    title: 'All',
    id: 0
  },
  {
    title: 'Clothes',
    id: 1
  },
  {
    title: 'Electronics',
    id: 2
  },
  {
    title: 'Furnitures',
    id: 3
  },
  {
    title: 'Toys',
    id: 4
  },
  {
    title: 'Other',
    id: 5
  }
]

export function Header() {
  const { isAuth } = useAuthUser()
  const [positionDiv, setPositionDiv] = useState({})
  const myOrder = useToggle(false)
  const menuDesktop = useToggle(false)
  const menuMobile = useToggle(false)
  const { setCategory } = useCategory()
  const { state: cart } = useData()

  if (cart.length === 0 && myOrder.isOpen) {
    myOrder.setOpen(false)
    return null
  }

  const changeCategory = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault()
    const id = evt.currentTarget.id
    const idNumber = parseInt(id) as CategorysID
    setCategory(idNumber)
  }

  const changeDiv = (evt: React.MouseEvent<HTMLLIElement>) => {
    const { left, width, top, height } =
      evt.currentTarget.getBoundingClientRect()
    const stylesDiv = {
      height: `${Math.round(height)}px`,
      transform: `translateX(${Math.round(left)}px)`,
      top: `${top}px`,
      width: `${Math.round(width)}px`
    }
    setPositionDiv(stylesDiv)
  }

  const hideDiv = () => {
    setPositionDiv((prev) => ({ ...prev, opacity: '0', visibility: 'hidden' }))
  }

  return (
    <>
      <div
        className='absolute left-0 top-0 box-content hidden rounded bg-black opacity-10 transition-all duration-200 ease-linear md:block'
        style={positionDiv}
      />
      <nav
        className='flex w-full items-center justify-between bg-greenBrand px-6'
        id='header'>
        {/* Icono Menu Mobile */}
        <Image
          src={exportImg('menu')}
          alt='menu'
          className='flex md:hidden'
          onClick={() => adminToggles(menuMobile, myOrder)}
        />
        {/*  */}
        <Link href='/' className=''>
          <Image src={exportImg('lYS')} alt='logo' className='logo-mobile' />
        </Link>
        <div className='hidden min-w-min gap-10 md:flex'>
          <ul className='relative ml-5 hidden gap-5 md:flex'>
            {menuItems.map(({ id, title }) => (
              <li
                key={id}
                onMouseEnter={changeDiv}
                onMouseLeave={hideDiv}
                onClick={changeCategory}
                id={id.toString()}
                className='relative p-2 px-2 font-semibold marker:rounded-md'>
                <button>{title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex h-16 items-center self-end justify-self-end'>
          <ul className='flex items-center gap-6'>
            <li
              className='cursor-pointer relative'
              onClick={() => adminToggles(myOrder, [menuDesktop, menuMobile])}>
              <Image src={exportImg('cart')} alt='shopping cart' />
              <div className='absolute -right-2 -top-2 flex h-4 w-4 justify-center rounded-full bg-light text-xs font-bold'>
                {cart.length}
              </div>
            </li>
            <li className='hidden cursor-pointer items-center gap-3 rounded-md bg-light px-4 py-2 text-black md:flex'>
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
    </>
  )
}
