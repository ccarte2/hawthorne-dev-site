import { company } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="eyebrow">{company.location}</span>
        <h1>
          Real estate <em>built for the mountains.</em>
        </h1>
        <p>
          {company.name} invests in, develops, and manages residential and
          commercial property across Telluride and San Miguel County — from
          first sketch to final walk-through, with one accountable team.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--gold">Start a project</a>
          <a href="#projects" className="btn btn--ghost">View our work</a>
        </div>
      </div>

      {/* Layered San Juan ridgeline */}
      <svg className="hero__range" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
        <path className="back" d="M0 160 L240 70 L470 150 L700 60 L960 150 L1200 80 L1440 150 L1440 220 L0 220 Z" />
        <path className="mid" d="M0 190 L260 110 L520 185 L760 100 L1020 180 L1280 120 L1440 180 L1440 220 L0 220 Z" />
        <path className="front" d="M0 210 L300 160 L600 205 L880 155 L1140 205 L1440 165 L1440 220 L0 220 Z" />
      </svg>
    </section>
  )
}
