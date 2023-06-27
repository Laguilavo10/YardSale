// import "../../styles/ProductDetails.css"
import Image from 'next/image'
import { exportImg } from '../../utils/exportImg'
import { useState } from 'react'
import { LoadingSkeleton } from '@components/LoadingSkeleton'

interface Props {
  data: any
  isOpen: any
  setIsOpen: any
  isAdded: any
  addToCart: any
}
export function ProductDetails({
  data,
  isOpen,
  setIsOpen,
  isAdded,
  addToCart
}: Props) {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleClick = () => {
    closeModal()
    addToCart()
  }
  return (
    <>
      <div className={`${isOpen && 'background'}`} />
      <aside className='product-detail animate-duration-400 animate-jump ease-in-out'>
        <div className='product-detail-close' onClick={closeModal}>
          <Image width={14} height={14} src={exportImg('close')} alt='close' />
        </div>
        <LoadingSkeleton>
          <Image
            width={1000}
            height={1000}
            src={data.images[0]}
            alt='bike'
            className='h-[360px] w-[350px] animate-fade-down object-cover duration-200'
          />
        </LoadingSkeleton>
        <img src='' alt=''/>
        <div className='product-detail-info'>
          <p>${data.price}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <button className='primary-button add-to-cart-button'>
            <Image
              width={50}
              height={50}
              src={exportImg(isAdded)}
              alt='add to cart'
              onClick={handleClick}
            />
            Add to cart
          </button>
        </div>
      </aside>
    </>
  )
}
