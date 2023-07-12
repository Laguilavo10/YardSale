import { useAuthUser } from '@context/authUser'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MenuDesktop() {
  const { isAuth } = useAuthUser()
  const router = useRouter()
  const singOut = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    Cookies.remove('CookieAccess')
    void router.push('/login')
  }
  return (
    <div className='hidden md:flex absolute right-6 top-16 h-auto w-36 rounded-md border border-gray-300 bg-white p-5 transition-all duration-500 ease-out'>
      <ul className='flex flex-col gap-3 [&>li]:text-end'>
        <li className='font-bold'>
          <Link href='/'>My orders</Link>
        </li>
        <li className='font-bold'>
          <Link href='/'>My account</Link>
        </li>
        {isAuth.role === 'admin' && (
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
        )}
        <li className='border-t border-light py-2 font-bold text-greenBrand '>
          <button onClick={singOut}>Sign out</button>
        </li>
      </ul>
    </div>
  )
}
