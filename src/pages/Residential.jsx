import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { Blank } from '../components/Blank.jsx'
import { residential } from '../data/site.js'

export default function Residential() {
  const r = residential
  return (
    <>
      <Seo title={r.seo.title} description={r.seo.description} path="/residential" />
      <PageHero eyebrow={r.hero.eyebrow} headline={r.hero.headline} subhead={r.hero.subhead} />

      <section className="section">
        <div className="container">
          <div className="split">
            {r.audiences.map((a) => (
              <div className="split__col" key={a.title}>
                <h2 className="h3-size">{a.title}</h2>
                <p className="lede">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">How we build</span>
            <h2>{r.howWeBuildHeading}</h2>
          </div>
          <div className="feature-grid">
            {r.howWeBuild.map((item) => (
              <article className="feature" key={item.title}>
                <h3>{item.title}</h3>
                <p><Blank value={item.body} /></p>
              </article>
            ))}
          </div>
          <div className="section__cta">
            <Link to={r.cta.to} className="btn btn--outline">{r.cta.label}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
