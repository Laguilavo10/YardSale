import { ProductCard } from '../ProductCard'
import { Product } from 'types'

interface Props {
  products: Product[] | undefined
}

export function Products({ products }: Props) {
  // es diferente card(info producto) != cart (carrito de compras)
  return (
    <>
      <div className='cards-container mb-10 grid grid-cols-[repeat(auto-fill,240px)] place-content-center gap-7'>
        {products?.map((card, index) => (
          <ProductCard key={index} dataCard={card} />
        ))}
      </div>
    </>
  )
}
