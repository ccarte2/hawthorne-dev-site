import { approach } from '../data/site.js'

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">How we work</span>
          <h2>A clear path from vision to handoff.</h2>
          <p>Every project follows the same disciplined sequence — so you always know where things stand.</p>
        </div>

        <div className="steps">
          {approach.map((s) => (
            <div className="step" key={s.step}>
              <div className="step__num">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
