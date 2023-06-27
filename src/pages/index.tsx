// import CounterProducts from '@components/CounterProducts'
import { Header } from '@components/Header'
// import { Pagination } from '@components/Pagination'
import { Products } from '@components/Products'
// import { useAuthUser } from '@context/authUser'
// import { type UseQueryResult, useQuery } from '@tanstack/react-query'
// import axios from 'axios'

// import { useFecth } from 'hooks/useFetch'
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
// import { requester } from '@services/API'
// import { Product } from 'types'
// const LIMIT = 20
// const OFFSET = 0

export default function Main() {
  // const { isAuth, setIsAuth } = useAuthUser()
  // const [pagination, setPagination] = useState({ limit: LIMIT, offset: OFFSET })
  // const router = useRouter()

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
  // }, [isAuth])

  // const { isLoading, error, data } :  = useQuery({
  //   queryKey: ['products'],
  //   queryFn: async () => {
  //     const query = `{"query": "query { products { id title price description images} }"}`
  //     const dataFetching = await requester.post('/graphql', query)
  //     return dataFetching.data.data.products
  //   }
  // })
  const query = gql`
    query {
      products {
        id
        title
        price
        description
        images
      }
    }
  `
  const { loading, data } = useQuery(query)

  if (loading) return 'Loading...'

  return (
    <main className='min- flex h-screen flex-col gap-4 bg-light transition-all duration-100 ease-out'>
      <Header />
      {/* <CounterProducts
        initial={products[0]?.id}
        final={products[0]?.id + pagination?.limit}
        total={97}
      /> */}
      <Products products={data.products} />
      {/* <Pagination pagination={pagination} setPagination={setPagination} /> */}
    </main>
  )
}
