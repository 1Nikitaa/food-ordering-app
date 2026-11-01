import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header'
import ResturantList from './components/resturantsList'

function App() {

  return (
    <>
      <Header />
      <ResturantList />
    </>
  )
}

export default App
