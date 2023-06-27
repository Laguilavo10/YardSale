import Image from 'next/image'
import { useState } from 'react'
import { useData } from '../../context/user'
import { exportImg } from '../../utils/exportImg'
import { ProductDetails } from '../ProductDetails'
import type { Product } from 'types'
import { LoadingSkeleton } from '@components/LoadingSkeleton'

type isAddedToCart = 'addToCart' | 'addedToCart'

export function ProductCard({ dataCard }: { dataCard: Product }) {
  const { setState: setCart } = useData()

  const [isOpen, setIsOpen] = useState(false)
  const [isAdded, setIsAdded] = useState<isAddedToCart>('addToCart')

  const { images, price, title } = dataCard

  const showDetails = () => {
    setIsOpen(true)
  }

  const addToCart = (product: Product) => {
    if (isAdded === 'addedToCart') return
    setCart((prevState: any) => [...prevState, product])
    setIsAdded('addedToCart')
    setTimeout(() => {
      setIsAdded('addToCart')
    }, 3000)
  }
  // Es diferente cart != card, (cart = carrito) / (card = tarjeta del producto)
  return (
    <>
      <div className='duration-600 rounded-lg bg-white p-4 transition-all ease-in-out hover:scale-105 hover:shadow-2xl justify-around flex flex-col'>
        <LoadingSkeleton>
          <Image
            width='300'
            height='300'
            onClick={showDetails}
            src={images[0]}
            alt=''
            className='object-cover'
          />
        </LoadingSkeleton>
        <div className='mt-3 flex items-center justify-between'>
          <div>
            <p className='font-bold mt-1'>${price}</p>
            <p className='text-sm text-gray-500 mt-1'>{title}</p>
          </div>
          <figure className='m-0 cursor-pointer'>
            <Image
              className='h-9 w-9'
              width='100'
              height='100'
              src={exportImg(isAdded)}
              alt=''
              onClick={() => addToCart(dataCard)}
            />
          </figure>
        </div>
      </div>
      {isOpen && (
        <ProductDetails
          data={dataCard}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isAdded={isAdded}
          addToCart={() => addToCart(dataCard)}
        />
      )}
    </>
  )
}
