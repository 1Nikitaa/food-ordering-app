import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header'
import ButtonComponent from './components/buttonComponent'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App
