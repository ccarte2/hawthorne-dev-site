import { Link } from 'react-router-dom'

// Interior-page hero: eyebrow + headline + subhead, optional CTAs.
// (The homepage uses its own larger hero with the ridgeline motif.)
export default function PageHero({ eyebrow, headline, subhead, actions }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow ? <span className="eyebrow eyebrow--light">{eyebrow}</span> : null}
        <h1>{headline}</h1>
        {subhead ? <p className="page-hero__lede">{subhead}</p> : null}
        {actions ? <div className="hero__actions">{actions}</div> : null}
      </div>
    </section>
  )
}
