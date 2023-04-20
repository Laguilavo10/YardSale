import { useAuthUser } from '@context/authUser'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MenuDesktop() {
  const { isAuth } = useAuthUser()
  const router = useRouter()
  const singOut = (evt) => {
    evt.preventDefault()
    Cookies.remove('CookieAccess')
    router.push('/login')
  }
  return (
    <div className='desktop-menu'>
      <ul>
        <li>
          <Link href='/' className='title'>
            My orders
          </Link>
        </li>
        <li>
          <Link href='/' className='title'>
            My account
          </Link>
        </li>
        {isAuth.role === 'admin' && (
          <li>
            <Link href='/dashboard' className='title'>
              Dashboard
            </Link>
          </li>
        )}
        <li>
          <Link href='/' className='title' onClick={singOut}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  )
}
