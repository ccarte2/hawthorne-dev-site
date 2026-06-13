import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import './index.css'

// Static-site generation entry. `vite-react-ssg build` pre-renders every
// static route to real HTML (crawlable + good link previews); in dev this
// behaves like a normal SPA.
export const createRoot = ViteReactSSG({ routes })
