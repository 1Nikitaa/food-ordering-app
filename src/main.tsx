import { StrictMode ,lazy,Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutClassComponent from './components/about'
import Error from './components/error'
import ResturantList from './components/resturantsList'
import Corporate from './components/corporate'
import ResturantMenuPage from './components/resturantMenuPage'

const Grocery = lazy(()=>{return import('./components/grocery')})
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
        element:<AboutClassComponent/>
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
  {
    path:'/grocery',
    element: <Suspense fallback={<h1>test</h1>}><Grocery/></Suspense>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
)