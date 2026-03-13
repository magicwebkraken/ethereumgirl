import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutMain({ children }) {
  return (
    <>

      { children }
      <Footer />
    </>
  )
}
