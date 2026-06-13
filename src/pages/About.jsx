import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { BlankBlock, fillTemplate } from '../components/Blank.jsx'
import { about } from '../data/site.js'

export default function About() {
  const a = about
  return (
    <>
      <Seo title={a.seo.title} description={a.seo.description} path="/about" />
      <PageHero eyebrow={a.hero.eyebrow} headline={a.hero.headline} subhead={a.hero.subhead} />

      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">{a.principleHeading}</span>
          <h2 className="sr-only">{a.principleHeading}</h2>
          <p className="lede">{fillTemplate(a.principleLead, 'FOUNDER', a.founderName)}</p>
          <BlankBlock value={a.founderBackground} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container narrow">
          <span className="eyebrow">{a.howWeWorkHeading}</span>
          <h2 className="sr-only">{a.howWeWorkHeading}</h2>
          <div className="prose">
            {a.howWeWork.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we stand for</span>
            <h2>{a.valuesHeading}</h2>
          </div>
          <div className="feature-grid feature-grid--3">
            {a.values.map((v) => (
              <article className="feature" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
          <div className="section__cta">
            <Link to={a.cta.to} className="btn btn--outline">{a.cta.label}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
