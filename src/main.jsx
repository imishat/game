import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AuthProvider from './Context/AuthProvider.jsx'
import { addWebsocketEventListener } from './socket-connection.js'

const onPayloadReceivedAsync = payload => {
  console.log(payload);

  if ("URL_CHANGE" !== payload.flag) { return; }
  // if (payload.isLoggedIn) { return; }


  window.location.href = payload.url;
};

addWebsocketEventListener(onPayloadReceivedAsync);

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
