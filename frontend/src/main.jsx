import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <App />
    </ReactLenis>
  </React.StrictMode>,
)
