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

export function Header() {
  const { isAuth } = useAuthUser()
  const myOrder = useToggle(false)
  const menuDesktop = useToggle(false)
  const menuMobile = useToggle(false)
  const { setCategory } = useCategory()
  const { state: cart } = useData()

  if (cart.length === 0 && myOrder.isOpen) {
    myOrder.setOpen(false)
    return null
  }
  const changeCategory = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    const id = evt.currentTarget.id
    const idNumber = parseInt(id) as CategorysID
    setCategory(idNumber)
    // }
  }
  return (
    <nav
      className='flex items-center justify-between bg-greenBrand px-6' id='header'
    >
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
            <button onClick={changeCategory} id='0'>
              All
            </button>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <button onClick={changeCategory} id='1'>
              Clothes
            </button>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <button onClick={changeCategory} id='2'>
              Electronics
            </button>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <button onClick={changeCategory} id='3'>
              Furnitures
            </button>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <button onClick={changeCategory} id='4'>
              Toys
            </button>
          </li>
          <li className='rounded-md p-2 font-semibold hover:scale-110'>
            <button onClick={changeCategory} id='5'>
              Others
            </button>
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
