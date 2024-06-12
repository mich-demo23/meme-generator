import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
console.log(<App />)

// const h1 = document.createElement("h1")

// h1.textContent = <FontAwesomeIcon icon='fa-brands fa-instagram' />

// // h1.textContent = "This is imperative"
// h1.className = "header"
// document.getElementById('root').append(h1)