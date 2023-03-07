import { useState } from "react"
import { Products } from "../../components/Products"
import { Header } from "../../components/Header"
import { CartProvider } from "../../context/user"

export function Main() {
  const [cart, setCart] = useState([])
  return (
    <>
      <CartProvider value={[]}>
        <Header/>
        <Products/>
      </CartProvider>
    </>
  )
}
