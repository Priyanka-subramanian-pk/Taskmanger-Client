import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyContextProvider } from './api/contextApi/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <MyContextProvider>
  <StrictMode>
    <App />
 </StrictMode>,
    </MyContextProvider>
)
