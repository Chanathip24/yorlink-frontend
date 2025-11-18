import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import { globalStyles } from '@/styles'

import Router from './router'

const queryClient: QueryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Toaster position="top-right" reverseOrder={true} />
      <Router />
    </QueryClientProvider>
  )
}

export default App
