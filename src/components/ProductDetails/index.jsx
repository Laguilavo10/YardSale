// import "../../styles/ProductDetails.css"
import { exportImg } from "../../utils/exportImg"

export function ProductDetails({ data, setIsOpen }) {
  
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <aside className="product-detail">
      <div className="product-detail-close" onClick={closeModal}>
        <img src={exportImg("close")} alt="close" />
      </div>
      <img src={data.images[1]} alt="bike" />
      <div className="product-detail-info">
        <p>${data.price}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <button className="primary-button add-to-cart-button">
          <img src={exportImg("addToCard")} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </aside>
  )
}
