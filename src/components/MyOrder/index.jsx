import Image from 'next/image'
import React from 'react'
import { useData } from '../../context/user'
import { exportImg } from '../../utils/exportImg'

export function MyOrder ({ closeModal }) {
  const { state: cart, setState: setCart } = useData()

  const total = cart.reduce((a, b) => a + b.price, 0) || 0

  const deleteItem = (item) => {
    cart.splice(item, 1)
    setCart([...cart])
  }

  return (
    <aside className='my-order'>
      <div className='title-container pointer' onClick={closeModal}>
        <Image width={15} height={15} src={exportImg('flecha')} alt='arrow' />
        <p className='title'>My order</p>
      </div>

      <div className='my-order-content'>
        {cart.map((item, index) => (
          <div className='shopping-cart' key={item.id}>
            <figure>
              <Image width={15} height={15} src={item.images[0]} alt='bike' />
            </figure>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <Image
              width={15}
              height={15}
              src={exportImg('close')}
              alt='close'
              className='pointer'
              onClick={() => deleteItem(index)}
            />
          </div>
        ))}

        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${total}</p>
        </div>

        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  )
}
