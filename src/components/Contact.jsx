import { useState } from 'react'
import { company } from '../data/site.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Stub handler — wire up to a form service (Formspree, Basin) or backend later.
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Get in touch</span>
          <h2>Start a conversation.</h2>
          <p>Tell us about your site, your timeline, or the opportunity you're weighing.</p>
        </div>

        <div className="contact__grid">
          <div>
            <div className="contact__detail">
              <span>Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div className="contact__detail">
              <span>Service area</span>
              <p>{company.location}</p>
            </div>
            <div className="contact__detail">
              <span>Phone</span>
              <p>{company.phone || 'Add a business line'}</p>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
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
            <div>
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" rows="4" placeholder="A few lines about what you have in mind…" required />
            </div>
            <button type="submit" className="btn btn--gold" style={{ justifySelf: 'start' }}>
              {sent ? 'Thanks — we’ll be in touch' : 'Send inquiry'}
            </button>
            <p className="form__note">Demo form — not yet connected. Hook it up to a form service or backend before launch.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
