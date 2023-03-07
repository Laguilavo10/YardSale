// import "../../styles/ProductDetails.css"
import Image from 'next/image'
import { exportImg } from '../../utils/exportImg'

export function ProductDetails ({ data, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <aside className='product-detail'>
      <div className='product-detail-close' onClick={closeModal}>
        <Image width={14} height={14} src={exportImg('close')} alt='close' />
      </div>
      <Image width={1000} height={1000} src={data.images[1]} alt='bike' />
      <div className='product-detail-info'>
        <p>${data.price}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <button className='primary-button add-to-cart-button'>
          <Image
            width={50}
            height={50}
            src={exportImg('addToCard')}
            alt='add to cart'
          />
          Add to cart
        </button>
      </div>
    </aside>
  )
}
