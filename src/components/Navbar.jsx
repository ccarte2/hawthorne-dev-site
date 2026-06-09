import { useState } from 'react'
import { company, nav } from '../data/site.js'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="brand">
          <Logo />
          <span className="brand__name">
            {company.shortName}
            <small>Development</small>
          </span>
        </a>

        <nav className="nav__links" data-open={open}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--gold nav__cta">Start a conversation</a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
