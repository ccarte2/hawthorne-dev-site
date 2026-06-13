import { isBlank } from '../data/site.js'

// Renders a value that may still need real input. Plain strings render as-is;
// NEEDS(...) placeholders render as a visible, tasteful "to fill" marker so
// it's obvious in the preview what Chris still needs to supply — without
// shipping raw [BRACKETS] or inventing facts the audience would verify.

export function Blank({ value, as: Tag = 'span' }) {
  if (!isBlank(value)) return <>{value}</>
  return (
    <Tag className="blank" title={value.hint || ''}>
      <span className="blank__tag">To fill</span> {value.label}
    </Tag>
  )
}

// Block-level placeholder (e.g. the founder background paragraph).
export function BlankBlock({ value }) {
  if (!isBlank(value)) return <p className="lede">{value}</p>
  return (
    <div className="blank-block" role="note">
      <span className="blank__tag">Needs input</span>
      <strong>{value.label}</strong>
      {value.hint ? <p>{value.hint}</p> : null}
    </div>
  )
}

// Interpolate a NEEDS value into a sentence template containing a {TOKEN}.
// Returns an array of React nodes so the blank renders as an inline marker.
export function fillTemplate(template, token, value) {
  const parts = template.split(`{${token}}`)
  return parts.flatMap((part, i) =>
    i === 0 ? [part] : [<Blank key={i} value={value} />, part]
  )
}
