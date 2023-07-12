import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { Product } from 'types'

interface CartContextType {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
}

const DEFAULT_VALUE = {
  cart: [],
  setCart: () => {}
}
const Cart = createContext<CartContextType>(DEFAULT_VALUE)

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Product[]>(DEFAULT_VALUE.cart)
  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>
}

export const useCart = () => {
  const { cart, setCart } = useContext(Cart)
  return { cart, setCart }
}
