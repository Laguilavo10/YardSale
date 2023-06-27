import CounterProducts from '@components/CounterProducts'
import { Header } from '@components/Header'
import { Pagination } from '@components/Pagination'
import { Products } from '@components/Products'
import { useAuthUser } from '@context/authUser'
import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useFecth } from 'hooks/useFetch'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { requester } from '@services/API'
import { Product } from 'types'
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

  const { isLoading, error, data } : UseQueryResult<Product[], unknown> = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const query = `{"query": "query { products { id title price description images} }"}`
      const dataFetching = await requester.post('/graphql', query)
      return dataFetching.data.data.products
    }
  })

  if (isLoading) return 'Loading...'
  // if (error) return 'An error has occurred: ' + error.message

  return (
    <main className='min- flex h-screen flex-col gap-4 bg-light transition-all duration-100 ease-out'>
      <Header />
      {/* <CounterProducts
        initial={products[0]?.id}
        final={products[0]?.id + pagination?.limit}
        total={97}
      /> */}
      <Products products={data} />
      {/* <Pagination pagination={pagination} setPagination={setPagination} /> */}
    </main>
  )
}
