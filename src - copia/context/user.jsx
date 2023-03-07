import { createContext, useContext, useState } from "react"

let Cart = createContext()

export const CartProvider = ({ children, value }) => {
  const [state, setState] = useState(value)
  return <Cart.Provider value={{ state, setState }}>{children}</Cart.Provider>
}

export const useData = () => {
  const { state, setState } = useContext(Cart)
  return { state, setState }
}
