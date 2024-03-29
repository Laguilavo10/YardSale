import '@styles/globals.css'
import '@styles/Login.css'
import { CartProvider } from '@context/useCart'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { CategoryProvider } from '@context/useCategory'
import Head from 'next/head'
import icon from 'public/sale-tag-for-online-shops-svgrepo-com.svg'
const API = process.env.NEXT_PUBLIC_API_URL ?? ''

const queryClient = new ApolloClient({
  uri: `${API}/graphql`,
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link
          rel='shortcut icon'
          href={icon.src}
          type='image/svg'
        />
        <title>Yard Sale</title>
      </Head>
      <ApolloProvider client={queryClient}>
        <CartProvider>
          <CategoryProvider>
            <Component {...pageProps} />
          </CategoryProvider>
        </CartProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
