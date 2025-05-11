import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';  // Ensure this matches your CSS file path
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
