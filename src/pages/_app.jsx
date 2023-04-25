import '@styles/globals.css'
import '@styles/Header.css'
import '@styles/Products.css'
import '@styles/ProductDetails.css'
import '@styles/Login.css'
import '@styles/MenuDesktop.css'
import '@styles/MenuMobile.css'
import '@styles/MyOrder.css'
import '@styles/Dashboard.css'

import { CartProvider } from '@context/user'
import { AuthProvider, useAuthUser } from '@context/authUser'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <CartProvider value={[]}>
          <Toaster />
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
