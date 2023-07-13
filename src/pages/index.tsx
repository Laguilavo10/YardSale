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
import { Pagination } from '@components/Pagination'
import { useState, useEffect } from 'react'
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
    variables: { categoryId: category?.id || 0 }
  })
  const [currentItems, setCurrentItems] = useState(data?.products)
  useEffect(() => {
    if (loading) {
      return // Espera a que se carguen los datos
    }
    setCurrentItems(data.products)
  }, [data, loading])

  return (
    <main className='min- flex h-screen flex-col bg-light transition-all duration-100 ease-out'>
      <Header />

      <div className='mt-[60px] flex flex-col gap-8'>
        <section className='flex h-56 w-full items-center justify-center bg-white text-6xl  lg:text-9xl uppercase tracking-wider opacity-70 bg-polka bg-[length:40px_40px]'>
          {category.title}
        </section>
        <section className='main-container bg-light'>
          {loading && (
            <div className='cards-container mb-10 grid grid-cols-[repeat(auto-fill,240px)] place-content-center gap-7'>
              {Array(20)
                .fill(null)
                .map((_, index) => (
                  <SkeletonCards key={index} />
                ))}
            </div>
          )}
          <Products products={currentItems} />
          {currentItems && (
            <Pagination
              itemsPerPage={20}
              data={data?.products}
              setCurrentItems={setCurrentItems}
            />
          )}
        </section>
      </div>
    </main>
  )
}
