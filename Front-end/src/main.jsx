import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import LandingPage from './Componentes/LandingPage'
import LoginUser from './Componentes/LoginUser'
import SaibaMais from './Componentes/SaibaMais'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/login',
    element: <LoginUser/>
  },
  {
    path: '/saiba-mais',
    element: <SaibaMais/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
