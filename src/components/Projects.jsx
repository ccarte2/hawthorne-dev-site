import { projects } from '../data/site.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Selected work</span>
          <h2>Projects.</h2>
          <p>Placeholder cards below — swap in real projects and photography in <code>src/data/site.js</code>.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <div className="project__img">
                {p.status === 'Placeholder' && <span className="project__badge">Placeholder</span>}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e7c878" strokeWidth="1" aria-hidden="true">
                  <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-5h6v5" />
                </svg>
              </div>
              <div className="project__body">
                <div className="project__type">{p.type}</div>
                <h3>{p.name}</h3>
                <div className="project__loc">{p.location}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
