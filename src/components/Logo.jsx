// Reusable mark — a stylized San Juan peak.
export default function Logo({ size = 34 }) {
  return (
    <svg className="brand__mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#2c5240" />
      <path d="M8 46 L24 20 L34 36 L42 24 L56 46 Z" fill="#c79a3b" />
      <path d="M8 46 L24 20 L30 30 L20 46 Z" fill="#e7c878" />
    </svg>
  )
}
