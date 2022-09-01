import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ContextProvider } from '../contexts/ContextProvider'
import Layout from '../components/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return(
    <>
    
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    
    
    </>
  ) 
}

export default MyApp
