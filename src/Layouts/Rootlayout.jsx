import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/footer.jsx'
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
