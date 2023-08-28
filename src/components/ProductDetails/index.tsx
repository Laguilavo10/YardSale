// import "../../styles/ProductDetails.css"
import { exportImg } from '../../utils/exportImg'
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
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleClick = () => {
    closeModal()
    addToCart()
  }
  return (
    <>
      <div
        className={`${
          isOpen === true
            ? 'fixed bottom-0 left-0 right-0 top-0 z-10 h-screen w-screen bg-[#00000098]'
            : ''
        }`}
      />
      <aside className='animate-duration-400 fixed bottom-0 top-0 z-30 m-auto flex h-min w-3/6 min-w-[350px] animate-jump flex-col justify-self-center rounded-3xl bg-white p-3 pb-6 ease-in-out md:bottom-0 md:top-0 md:flex-row'>
        <div
          className='product-detail-close absolute left-6 top-6 z-10 flex items-center justify-center rounded-full bg-white p-2 shadow-2xl'
          onClick={closeModal}
        >
          <img
            width={14}
            height={14}
            src={exportImg('close')}
            alt='close'
            className='h-4 w-4'
          />
        </div>
        <LoadingSkeleton>
          <img
            width={1000}
            height={1000}
            src={data.images[0]}
            alt='bike'
            className='h-[360px] w-[350px] animate-fade-down object-cover duration-200'
          />
        </LoadingSkeleton>
        <div className=' p-6 md:w-64'>
          <p className='mb-1 text-lg font-bold'>${data.price}</p>
          <p className='mb-5 text-lg font-semibold'>{data.title}</p>
          <p className='mb-9'>{data.description}</p>
          <button className='flex w-full cursor-pointer items-center justify-evenly rounded-lg bg-greenBrand text-lg font-bold text-white'>
            <img
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
