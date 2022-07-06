import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ContextProvider } from '../contexts/ContextProvider'
import Layout from '../components/Layout'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
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
