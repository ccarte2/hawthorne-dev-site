import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { Blank, fillTemplate } from '../components/Blank.jsx'
import { portfolio } from '../data/site.js'

export default function Portfolio() {
  const p = portfolio
  const hasProjects = p.projects && p.projects.length > 0
  return (
    <>
      <Seo title={p.seo.title} description={p.seo.description} path="/portfolio" />
      <PageHero eyebrow={p.hero.eyebrow} headline={p.hero.headline} subhead={p.hero.subhead} />

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">{p.underwayHeading}</span>
            <h2 className="sr-only">{p.underwayHeading}</h2>
          </div>

          {hasProjects ? (
            <div className="projects-grid">
              {p.projects.map((proj) => (
                <article className="project" key={proj.name}>
                  <div className="project__img">
                    {proj.status ? <span className="project__badge">{proj.status}</span> : null}
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e7c878" strokeWidth="1" aria-hidden="true">
                      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5" />
                    </svg>
                  </div>
                  <div className="project__body">
                    <div className="project__type">{proj.type}</div>
                    <h3>{proj.name}</h3>
                    <div className="project__loc">{proj.area}</div>
                    {proj.description ? <p className="project__desc">{proj.description}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="statement">
              <p>{fillTemplate(p.fallback.body, 'SEASON', p.fallback.season)}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container narrow">
          <span className="eyebrow">A note on selectivity</span>
          <h2 className="h3-size">{p.selectivityHeading}</h2>
          <p className="lede">{p.selectivity}</p>
          <div className="section__cta section__cta--left">
            <Link to={p.cta.to} className="btn btn--outline">{p.cta.label}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
