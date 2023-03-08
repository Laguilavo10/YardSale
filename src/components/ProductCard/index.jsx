import Image from 'next/image'
import { useState } from 'react'
import { useData } from '../../context/user'
import { exportImg } from '../../utils/exportImg'
import { ProductDetails } from '../ProductDetails'

export function ProductCard({ dataCard }) {
  const { setState: setCart } = useData()

  const [isOpen, setIsOpen] = useState(false)
  const [isAdded, setIsAdded] = useState('addToCart')

  const { images, price, title } = dataCard

  const showDetails = () => {
    setIsOpen(true)
  }

  const addToCart = (product) => {
    if (isAdded === 'addedToCart') return
    setCart((prevState) => [...prevState, product])
    setIsAdded('addedToCart')
    setTimeout(() => {
      setIsAdded('addToCart')
    }, 3000)
  }

  // Es diferente cart != card, (cart = carrito) / (card = tarjeta del producto)

  return (
    <>
      <div className='product-card'>
        <Image
          width='1000'
          height='1000'
          onClick={showDetails}
          src={images[0]}
          alt=''
          className='pointer'
        />
        <div className='product-info'>
          <div>
            <p>${price}</p>
            <p>{title}</p>
          </div>
          <figure className='pointer'>
            <Image
              width='auto'
              height='auto'
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
          addToCart={() => (addToCart(dataCard))}
        />
      )}
    </>
  )
}
