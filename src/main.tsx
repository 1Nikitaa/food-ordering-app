import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/about'
import Error from './components/error'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>

  },
  {
    path:'/about',
    element:<About/>,
    errorElement:<Error/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)