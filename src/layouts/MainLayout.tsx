import * as React from 'react'

//  Components
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
