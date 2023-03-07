import "@styles/globals.css";
import "@styles/Header.css";
import "@styles/Products.css";
import "@styles/ProductDetails.css";
import { CartProvider } from "@context/user"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider value={[]}>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default MyApp
