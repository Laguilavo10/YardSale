import { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard'
// import "../../styles/Products.css"
import { useData } from '../../context/user'

export function Products () {
  const [data, setData] = useState([])

  useEffect(() => {
    const API_URL = 'https://api.escuelajs.co/api/v1/products?limit=15&offset=2'

    fetch(API_URL)
      .then((res) => res.json())
      .then((info) => setData(info))
  }, [])

  const { setState: setCart } = useData()

  // es diferente card(info producto) != cart (carrito de compras)

  return (
    <>
      {data.length === 0 && <h1>Cargando... no desesperes</h1>}
      <section className='main-container'>
        <div className='cards-container'>
          {data.map((card, index) => (
            <ProductCard key={index} dataCard={card} setCart={setCart} />
          ))}
        </div>
      </section>
    </>
  )
}
