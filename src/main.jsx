import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AuthProvider from './Context/AuthProvider.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      {/* <React.StrictMode> */}
       <AuthProvider>
           <App />
       </AuthProvider>
      {/* </React.StrictMode>, */}
    </QueryClientProvider>

)
