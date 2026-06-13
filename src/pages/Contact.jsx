import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { Blank } from '../components/Blank.jsx'
import { company, contact, isBlank } from '../data/site.js'

export default function Contact() {
  const c = contact
  const [sent, setSent] = useState(false)

  // Stub handler — wire to a form service (Formspree, Basin) or backend
  // before launch. See README. Currently does not send anything.
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo title={c.seo.title} description={c.seo.description} path="/contact" />
      <PageHero eyebrow={c.hero.eyebrow} headline={c.hero.headline} subhead={c.hero.subhead} />

      <section className="section contact">
        <div className="container">
          <div className="contact__grid">
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="h3-size">{c.formHeading}</h2>
              <div className="row">
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(optional)" />
                </div>
                <div>
                  <label htmlFor="project-type">Project type</label>
                  <select id="project-type" name="project-type" defaultValue="">
                    <option value="" disabled>Select one…</option>
                    {c.projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="location">Location / area</label>
                <input id="location" name="location" placeholder="e.g. Mountain Village, Telluride" />
              </div>
              <div>
                <label htmlFor="message">Tell us about your project</label>
                <textarea id="message" name="message" rows="5" placeholder="A few lines about what you have in mind…" required />
              </div>
              <button type="submit" className="btn btn--gold" style={{ justifySelf: 'start' }}>
                {sent ? 'Thanks — we’ll be in touch' : c.submitLabel}
              </button>
              <p className="form__note">Demo form — not yet connected. Hook it up to a form service (Formspree, Basin) or backend before launch.</p>
            </form>

            <aside className="contact__direct">
              <h2 className="h3-size">{c.directHeading}</h2>
              <div className="contact__detail">
                <span className="contact__label">Phone</span>
                {isBlank(company.phone)
                  ? <Blank value={company.phone} />
                  : <a href={`tel:${company.phone}`}>{company.phone}</a>}
              </div>
              <div className="contact__detail">
                <span className="contact__label">Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className="contact__detail">
                <span className="contact__label">Service area</span>
                <p>{company.serviceArea}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
