import { isBlank } from '../data/site.js'

// Renders a value that may still need real input. Plain strings render as-is.
// NEEDS(...) placeholders show a tasteful "to fill" marker ONLY in local dev
// (`npm run dev`) as a reminder of what's left — on the production/preview
// build they render nothing, so the live site never shows a placeholder and
// never fakes content. Fill the value in src/data/site.js to make it appear.
const SHOW_BLANKS = import.meta.env.DEV

export function Blank({ value, as: Tag = 'span' }) {
  if (!isBlank(value)) return <>{value}</>
  if (!SHOW_BLANKS) return null
  return (
    <Tag className="blank" title={value.hint || ''}>
      <span className="blank__tag">To fill</span> {value.label}
    </Tag>
  )
}

// Block-level placeholder (e.g. the founder background paragraph).
export function BlankBlock({ value }) {
  if (!isBlank(value)) return <p className="lede">{value}</p>
  if (!SHOW_BLANKS) return null
  return (
    <div className="blank-block" role="note">
      <span className="blank__tag">Needs input</span>
      <strong>{value.label}</strong>
      {value.hint ? <p>{value.hint}</p> : null}
    </div>
  )
}

// Interpolate a NEEDS value into a sentence template containing a {TOKEN}.
// Returns an array of React nodes so the blank renders as an inline marker
// (or nothing, in production).
export function fillTemplate(template, token, value) {
  const parts = template.split(`{${token}}`)
  return parts.flatMap((part, i) =>
    i === 0 ? [part] : [<Blank key={i} value={value} />, part]
  )
}
