import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/about'
import Error from './components/error'
import ResturantList from './components/resturantsList'
import Corporate from './components/corporate'
import ResturantMenuPage from './components/resturantMenuPage'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<ResturantList/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/corporate",
        element:<Corporate/>
      },
      {
        path:'/resturants/:resId',
        element:<ResturantMenuPage/>
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)