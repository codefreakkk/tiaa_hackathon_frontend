import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Services/>
        <Main/>
        <Footer/>
    </>
  )
}

export default Home