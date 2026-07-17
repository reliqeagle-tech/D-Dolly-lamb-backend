import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}

  >
    <HelmetProvider>
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
          currency: "USD",
          intent: "capture"
        }}
        deferLoading={true}
      >
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </PayPalScriptProvider>
    </HelmetProvider>
  </BrowserRouter>,
)
