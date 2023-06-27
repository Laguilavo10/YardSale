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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function MyApp({ Component, pageProps } : any) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider value={[]}>
            {/* <Toaster /> */}
            <Component {...pageProps} />
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
