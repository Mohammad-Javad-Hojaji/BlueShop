import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartContextProvider } from './context/ShoppingCartItems.tsx'
import { AccountShopProvider } from './context/AccountShop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ShoppingCartContextProvider>
        <AccountShopProvider>
        <App />
      </AccountShopProvider>
    </ShoppingCartContextProvider>
  </BrowserRouter>
  </StrictMode >,
)
