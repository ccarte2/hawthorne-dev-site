import { Link } from 'react-router-dom'
import { company, nav } from '../data/site.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="brand">
            <Logo size={30} />
            <span className="brand__name" style={{ color: 'var(--cream)' }}>
              {company.shortName}
              <small>Development</small>
            </span>
          </Link>
          <p className="footer__area">{company.serviceArea}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/">Home</Link>
          {nav.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </nav>
      </div>
      <div className="container footer__legal">
        <small>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</small>
        <small><a href={`mailto:${company.email}`}>{company.email}</a></small>
      </div>
    </footer>
  )
}
