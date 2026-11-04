import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header'
import ButtonComponent from './components/buttonComponent'
import {Outlet} from 'react-router-dom'
import  UserContext from './utils/userContext'
import {defaultUserContext} from './utils/userContext'
import {defaultCartItem,CartDataContext} from './utils/cartDataContext'


function App() {
  const [userLogindata,setUserLogindata] = useState(defaultUserContext)
  const [cartData, setCartData] = useState(defaultCartItem)
  console.log(cartData,'tsx')
  return (
    <>
    <CartDataContext.Provider value={{cartData,setCartData}}>
    <UserContext.Provider value={{userLogindata,setUserLogindata}}>
    <Header />
      <Outlet/>
    </UserContext.Provider>
    </CartDataContext.Provider>
    
    </>
  )
}

export default App
