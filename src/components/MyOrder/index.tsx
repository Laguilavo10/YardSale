import React from 'react'
import { useCart } from '../../context/useCart'
import { exportImg } from '../../utils/exportImg'
import { Product } from 'types'

interface Props {
  closeModal: () => void
}

export function MyOrder({ closeModal }: Props) {
  const { cart, setCart } = useCart()

  const total = cart.reduce((a: number, b: Product) => a + b.price, 0) ?? 0

  const deleteItem = (item: number) => {
    cart.splice(item, 1)
    setCart([...cart])
  }

  return (
    <aside className='fixed right-0 top-0 z-30 mt-[66px] w-auto max-w-[360px] rounded-md bg-white p-6 shadow-2xl transition-all duration-200'>
      <div className='flex cursor-pointer ' onClick={closeModal}>
        <img
          width={15}
          height={15}
          src={exportImg('flecha')}
          alt='arrow'
          className='mr-4 rotate-180'
        />
        <p className='text-xl font-bold'>My order</p>
      </div>

      <div className='my-4 flex h-[200px] flex-col gap-3 overflow-y-scroll'>
        {cart.map((item, index) => (
          <div
            className='grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 pr-2'
            key={item.id}
          >
            <figure className='w-28'>
              <img
                width={100}
                height={100}
                src={item.images[0]}
                alt='bike'
                className='h-28 w-28 rounded-xl object-cover'
              />
            </figure>
            <p>{item.title}</p>
            <p className='font-bold'>${item.price}</p>
            <img
              width={15}
              height={15}
              src={exportImg('close')}
              alt='close'
              className='self-start justify-self-start'
              onClick={() => deleteItem(index)}
            />
          </div>
        ))}
      </div>
      <div className='order mx-3 my-2 flex items-center justify-between'>
        <p className='text-lg'>Total</p>
        <p className='text-3xl font-semibold'>${total}</p>
      </div>

      <button className='h-14 w-full cursor-pointer rounded-lg border-none bg-greenBrand text-lg font-bold text-black transition-transform duration-150 ease-in-out hover:scale-110'>
        Checkout
      </button>
    </aside>
  )
}
