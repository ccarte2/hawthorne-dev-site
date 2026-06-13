import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Hawthorne Development" description="The page you’re looking for isn’t here." path="/404" />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="eyebrow eyebrow--light">404</span>
          <h1>This page isn’t here.</h1>
          <p className="page-hero__lede">The page you’re looking for may have moved. Let’s get you back on track.</p>
          <div className="hero__actions">
            <Link to="/" className="btn btn--gold">Return home</Link>
            <Link to="/contact" className="btn btn--ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
