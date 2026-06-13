import App from './App.jsx'
import Home from './pages/Home.jsx'
import Residential from './pages/Residential.jsx'
import Commercial from './pages/Commercial.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Route table consumed by vite-react-ssg. Every static path here is
// pre-rendered to its own HTML file at build time.
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'residential', element: <Residential /> },
      { path: 'commercial', element: <Commercial /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
