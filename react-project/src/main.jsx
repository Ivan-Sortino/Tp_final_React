import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } 
from 'react-router-dom'
import chicos from './chicos.js'


const routes = [
  {
    path: "/",
    element: <App/>
  }
]

chicos.forEach(chicos => {
  routes.push({
    path: chicos.name,
    element: <div>{chicos.name}</div>
  });
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
