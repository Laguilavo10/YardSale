import CounterProducts from '@components/CounterProducts'
import { Header } from '@components/Header'
import { Pagination } from '@components/Pagination'
import { Products } from '@components/Products'
import { useAuthUser } from '@context/authUser'
import axios from 'axios'
import { useFecth } from 'hooks/useFetch'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import endPoints from 'services/API'

const LIMIT = 20
const OFFSET = 0
export default function Main() {
  const { isAuth, setIsAuth } = useAuthUser()
  const [pagination, setPagination] = useState({ limit: LIMIT, offset: OFFSET })
  const router = useRouter()

  // const validateAuth = async () => {
  //   const valueToken = Cookies.get('CookieAccess')
  //   try {
  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${valueToken}`
  //       }
  //     }
  //     const { data: user } = await axios.get(
  //       'https://api.escuelajs.co/api/v1/auth/profile',
  //       options
  //     )
  //     setIsAuth(user)
  //   } catch (error) {
  //     // console.log(error)
  //     if (error.response.status === 401) router.push('/login')
  //   }
  // }

  // useEffect(() => {
  //   // console.log(isAuth)
  //   if (!isAuth) {
  //     validateAuth()
  //   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuth])

  const [products] = useFecth(
    endPoints.products.getProducts(pagination.limit, pagination.offset),
    pagination
  )

  return (
    <main className='min- flex h-screen flex-col gap-4 bg-light transition-all duration-100 ease-out'>
      <Header />
      {/* <CounterProducts
        initial={products[0]?.id}
        final={products[0]?.id + pagination?.limit}
        total={97}
      /> */}
      <Products products={products} />
      <Pagination pagination={pagination} setPagination={setPagination} />
    </main>
  )
}
