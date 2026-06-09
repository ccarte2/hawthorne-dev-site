import { company } from '../data/site.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="brand">
          <Logo size={30} />
          <span className="brand__name" style={{ color: 'var(--cream)' }}>
            {company.shortName}
            <small>Development</small>
          </span>
        </a>
        <small>
          &copy; {new Date().getFullYear()} {company.name} · {company.location}
        </small>
      </div>
    </footer>
  )
}
