import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import LandingPage from './Componentes/LandingPage'
import LoginUser from './Componentes/LoginUser'
import KnowMore from './Componentes/KnowMore'
import RegisterUser from './Componentes/RegisterUser'

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
    path: '/know-more',
    element: <KnowMore/>
  },
  {
    path: '/register-user',
    element: <RegisterUser/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
