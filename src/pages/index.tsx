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
import { useCategory } from '@context/useCategory'
import SkeletonCards from '@components/SkeletonCards'
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
  const { category } = useCategory()
  const GET_PRODUCTS = gql`
    query ($categoryId: Float!) {
      products(categoryId: $categoryId) {
        id
        title
        price
        description
        images
      }
    }
  `
  const { loading, data } = useQuery(GET_PRODUCTS, {
    variables: { categoryId: category.id }
  })
  const cards = Array(20).fill(null)
  return (
    <main className='min- flex h-screen flex-col bg-light transition-all duration-100 ease-out'>
      <Header />

      {/* <CounterProducts
        initial={products[0]?.id}
        final={products[0]?.id + pagination?.limit}
        total={97}
      /> */}
      <div className='flex flex-col gap-8 mt-[60px]'>
        <section className='flex h-56 w-full items-center justify-center bg-white text-9xl uppercase tracking-wider '>
          {category.title}
        </section>
        {loading && (
          <section className='main-container bg-light'>
            <div className='cards-container mb-10 grid grid-cols-[repeat(auto-fill,240px)] place-content-center gap-7'>
              {cards?.map((_, index) => (
                <SkeletonCards key={index} />
              ))}
            </div>
          </section>
        )}
        <Products products={data?.products} />
      </div>
    </main>
  )
}
