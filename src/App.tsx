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


function App() {
  const [userLogindata,setUserLogindata] = useState(defaultUserContext)
  return (
    <>
    <UserContext.Provider value={{userLogindata,setUserLogindata}}>
    <Header />
      <Outlet/>
    </UserContext.Provider>
    
    </>
  )
}

export default App
