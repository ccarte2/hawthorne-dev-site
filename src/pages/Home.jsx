import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { home } from '../data/site.js'

export default function Home() {
  const { hero, unifying, differentiators, paths, closing } = home
  return (
    <>
      <Seo title={home.seo.title} description={home.seo.description} path="/" />

      {/* Hero with layered San Juan ridgeline */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow eyebrow--light">{hero.eyebrow}</span>
          <h1>{hero.headline}</h1>
          <p>{hero.subhead}</p>
          <div className="hero__actions">
            <Link to={hero.primaryCta.to} className="btn btn--gold">{hero.primaryCta.label}</Link>
            <Link to={hero.secondaryCta.to} className="btn btn--ghost">{hero.secondaryCta.label}</Link>
          </div>
        </div>
        <svg className="hero__range" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
          <path className="back" d="M0 160 L240 70 L470 150 L700 60 L960 150 L1200 80 L1440 150 L1440 220 L0 220 Z" />
          <path className="mid" d="M0 190 L260 110 L520 185 L760 100 L1020 180 L1280 120 L1440 180 L1440 220 L0 220 Z" />
          <path className="front" d="M0 210 L300 160 L600 205 L880 155 L1140 205 L1440 165 L1440 220 L0 220 Z" />
        </svg>
      </section>

      {/* The unifying idea */}
      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow">{unifying.eyebrow}</span>
            <h2>{unifying.heading}</h2>
          </div>
          <div className="prose prose--center">
            {unifying.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What sets us apart</span>
            <h2 className="sr-only">What sets us apart</h2>
          </div>
          <div className="feature-grid">
            {differentiators.map((d) => (
              <article className="feature" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Two paths</span>
            <h2 className="sr-only">Two paths</h2>
          </div>
          <div className="paths">
            {paths.map((p) => (
              <article className={`path path--${p.kind.toLowerCase()}`} key={p.kind}>
                <h3>{p.kind}</h3>
                <p>{p.body}</p>
                <Link to={p.cta.to} className="link-arrow">{p.cta.label} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>{closing.heading}</h2>
          <p>{closing.body}</p>
          <Link to={closing.cta.to} className="btn btn--gold">{closing.cta.label}</Link>
        </div>
      </section>
    </>
  )
}
