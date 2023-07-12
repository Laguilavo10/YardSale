import '@styles/globals.css'
import '@styles/Login.css'
import '@styles/Dashboard.css'
import { CartProvider } from '@context/useCart'
// import { AuthProvider } from '@context/authUser'
// import { Toaster } from 'react-hot-toast'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { CategoryProvider } from '@context/useCategory'

const API = process.env.NEXT_PUBLIC_API_URL ?? ''

const queryClient = new ApolloClient({
  uri: `${API}/graphql`,
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ApolloProvider client={queryClient}>
        {/* <AuthProvider> */}
        <CartProvider>
          {/* <Toaster /> */}
          <CategoryProvider>
            <Component {...pageProps} />
          </CategoryProvider>
        </CartProvider>
        {/* </AuthProvider> */}
      </ApolloProvider>
    </>
  )
}

export default MyApp
