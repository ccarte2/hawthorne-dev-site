import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, nav } from '../data/site.js'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Logo />
          <span className="brand__name">
            {company.shortName}
            <small>Development</small>
          </span>
        </Link>

        <nav className="nav__links" data-open={open}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--gold nav__cta--mobile" onClick={() => setOpen(false)}>
            Begin a conversation
          </Link>
        </nav>

        <Link to="/contact" className="btn btn--gold nav__cta">Begin a conversation</Link>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
