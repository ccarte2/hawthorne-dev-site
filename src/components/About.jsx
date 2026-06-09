import { company } from '../data/site.js'

export default function About() {
  return (
    <section className="section section--tight" id="about">
      <div className="container about">
        <div>
          <span className="eyebrow">About</span>
          <h2 style={{ color: 'var(--evergreen)', fontSize: 'clamp(2rem,4vw,2.8rem)', margin: '12px 0 18px' }}>
            Local roots, institutional discipline.
          </h2>
          <p style={{ color: 'var(--ink-600)', fontSize: '1.06rem', marginBottom: '16px' }}>
            {company.name} is a Telluride-based real estate firm working across
            San Miguel County. We bring an investor's discipline to budget and
            schedule and a builder's eye to craft — pairing rigorous underwriting
            with hands-on construction management.
          </p>
          <p style={{ color: 'var(--ink-600)' }}>
            {/* TODO: replace with real founder bio, license #, and track record. */}
            Placeholder copy — add the firm's story, leadership, contractor
            credentials, and a real project track record here.
          </p>
        </div>

        <aside className="about__panel">
          <h3>Why Hawthorne</h3>
          <p style={{ color: 'var(--ink-600)' }}>
            Single point of accountability. Transparent reporting. Work shaped to
            the standards of a high-alpine community.
          </p>
          <div className="about__stats">
            <div className="stat"><strong>1</strong><span>Accountable team</span></div>
            <div className="stat"><strong>3</strong><span>Disciplines in-house</span></div>
            <div className="stat"><strong>100%</strong><span>San Juan focus</span></div>
          </div>
        </aside>
      </div>
    </section>
  )
}
