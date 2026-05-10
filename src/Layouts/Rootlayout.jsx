import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../Components/TopBar.jsx'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
function Rootlayout() {
  return (
    <>
     <TopBar />
     <Header />
     <main className='min-h-screen'>
      <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default Rootlayout