import { Header } from '@components/Header'
import { Products } from '@components/Products'
import { useAuthUser } from '@context/authUser'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// import {verify} from 'jsonwebtoken'
export default function Main() {
  const { isAuth, setIsAuth } = useAuthUser()
  const router = useRouter()

  const validateAuth = async () => {
    const valueToken = Cookies.get('CookieAccess')
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${valueToken}`
        }
      }
      const { data: user } = await axios.get(
        'https://api.escuelajs.co/api/v1/auth/profile',
        options
      )
      setIsAuth(user)
    } catch (error) {
      // console.log(error)
      if (error.response.status === 401) router.push('/login')
    }
  }

  useEffect(() => {
    // console.log(isAuth)
    if (!isAuth) {
      validateAuth()
    }
  }, [isAuth])

  return (
    <>
      <Header />
      <Products />
    </>
  )
}
