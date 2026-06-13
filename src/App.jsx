import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Shared layout: persistent nav + footer wrap the routed page.
export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on navigation (each page is its own document).
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
