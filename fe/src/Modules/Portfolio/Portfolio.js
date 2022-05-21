import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './Portfolio.css'

const Portfolio = () => {
  return (
      <>
      <Header />
      <Outlet />
<Footer />
    </>
  
  )
}

export default Portfolio