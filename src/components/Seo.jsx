import { Head } from 'vite-react-ssg'
import { company } from '../data/site.js'

// Per-page <head> tags: title, description, canonical, and Open Graph /
// Twitter cards for good link previews. Rendered into the static HTML at
// build time so crawlers and social scrapers see real metadata.
export default function Seo({ title, description, path = '/' }) {
  const url = company.url + (path === '/' ? '' : path)
  const ogImage = company.url + '/og-image.png'
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
