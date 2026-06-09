// Central content file — edit copy, services, and projects here.
// Placeholder content is marked with TODO so it's easy to find.

export const company = {
  name: 'Hawthorne Development',
  shortName: 'Hawthorne',
  tagline: 'Building with intention in the San Juans.',
  location: 'Telluride & San Miguel County, Colorado',
  email: 'info@hawthornedevco.com',
  phone: '', // TODO: add business line
  domain: 'hawthornedevco.com',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'Real Estate Investment',
    body: 'Disciplined acquisition and capital strategy for residential and commercial assets across the Telluride region — sourcing, underwriting, and long-term value creation.',
    icon: 'invest',
  },
  {
    title: 'Development',
    body: 'Ground-up and adaptive projects from land and entitlement through design and delivery, built to the standards a mountain community expects.',
    icon: 'develop',
  },
  {
    title: 'Construction Management',
    body: 'Owner-aligned management of budget, schedule, and trades — clear reporting, tight cost control, and accountable execution on every build.',
    icon: 'manage',
  },
]

export const approach = [
  { step: '01', title: 'Vision & Feasibility', body: 'Define the goal, test the site, and pressure-test the numbers before a dollar is committed.' },
  { step: '02', title: 'Entitlement & Design', body: 'Navigate San Miguel County and Town of Telluride review, and shape a design that fits the place.' },
  { step: '03', title: 'Build', body: 'Design-build delivery with rigorous cost and schedule control and a single point of accountability.' },
  { step: '04', title: 'Steward', body: 'Close out, hand off, and manage the asset for durable, long-term performance.' },
]

// TODO: replace placeholder projects with real work + photography.
export const projects = [
  { name: 'Mountain Modern Residence', type: 'Residential · New Construction', location: 'Telluride, CO', status: 'Placeholder' },
  { name: 'Main Street Mixed-Use', type: 'Commercial · Adaptive Reuse', location: 'San Miguel County, CO', status: 'Placeholder' },
  { name: 'Box Canyon Land Holding', type: 'Investment · Land & Entitlement', location: 'Telluride Region, CO', status: 'Placeholder' },
]
