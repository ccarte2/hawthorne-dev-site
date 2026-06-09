import { services } from '../data/site.js'

const icons = {
  invest: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v6h-6" />
    </svg>
  ),
  develop: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" />
    </svg>
  ),
  manage: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">What we do</span>
          <h2>Three disciplines, one team.</h2>
          <p>
            Most projects pass through a chain of disconnected hands. We hold
            investment, development, and construction management under one roof
            so nothing falls through the gaps.
          </p>
        </div>

        <div className="grid-3">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <div className="card__icon">{icons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
