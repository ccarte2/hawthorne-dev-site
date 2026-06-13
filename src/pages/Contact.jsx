import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { company, contact } from '../data/site.js'

export default function Contact() {
  const c = contact
  // status: 'idle' | 'submitting' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  // Submit the inquiry to Kit. Name / phone / project type / location are
  // composed into the Message custom field so the full inquiry is captured
  // even though the Kit form only stores email + first name + message.
  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const phone = (data.get('phone') || '').toString().trim()
    const projectType = (data.get('project-type') || '').toString().trim()
    const location = (data.get('location') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()

    const composed = [
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      projectType && `Project type: ${projectType}`,
      location && `Location: ${location}`,
      '',
      message,
    ].filter((line) => line !== false).join('\n')

    const body = new URLSearchParams()
    body.set('email_address', email)
    if (name) body.set('fields[first_name]', name)
    body.set('fields[message]', composed)

    setStatus('submitting')
    try {
      const res = await fetch(c.kit.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      if (!res.ok) throw new Error(`Kit responded ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
    }
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
              {status === 'sent' && (
                <p className="form__status form__status--ok" role="status">
                  Thank you — your note is on its way. We’ll be in touch shortly.
                </p>
              )}
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
              <button type="submit" className="btn btn--gold" style={{ justifySelf: 'start' }} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : status === 'sent' ? 'Sent' : c.submitLabel}
              </button>
              {status === 'error' && (
                <p className="form__status form__status--error" role="alert">
                  Something went wrong sending your note. Please email us directly at{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a>.
                </p>
              )}
            </form>

            <aside className="contact__direct">
              <h2 className="h3-size">{c.directHeading}</h2>
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
