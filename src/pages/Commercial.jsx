import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { commercial } from '../data/site.js'

export default function Commercial() {
  const c = commercial
  return (
    <>
      <Seo title={c.seo.title} description={c.seo.description} path="/commercial" />
      <PageHero eyebrow={c.hero.eyebrow} headline={c.hero.headline} subhead={c.hero.subhead} />

      <section className="section">
        <div className="container">
          <div className="split split--lean">
            <div className="split__col">
              <span className="eyebrow">{c.handleHeading}</span>
              <h2 className="sr-only">{c.handleHeading}</h2>
              <ul className="checklist">
                {c.handle.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="split__col">
              <span className="eyebrow">{c.whyHeading}</span>
              <h2 className="sr-only">{c.whyHeading}</h2>
              <p className="lede">{c.why}</p>
              <div className="section__cta section__cta--left">
                <Link to={c.cta.to} className="btn btn--outline">{c.cta.label}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
