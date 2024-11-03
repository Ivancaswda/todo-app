import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fanta.css'
import App from './App.jsx'
 // here we aplieng all overall content from App.jsx
createRoot(document.getElementById('root')).render( // render react files into root html in index.html
  <StrictMode>
    <App />
  </StrictMode>,
)
