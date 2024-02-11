import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Layout from './layouts/Layout.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>
      <App />
    </Layout>,
  },
  {
    path: '/dashboard',
    element: <Layout>
      <Dashboard />
    </Layout>
  },
  {
    path: '/auth',
    element: <Layout>
      <Auth />
    </Layout>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
