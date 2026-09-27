import { Home, GraduationCap, Briefcase, Tv, Landmark, Users } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { contemporaryDomains } from '../data/content.js'

const ICONS = { Home, GraduationCap, Briefcase, Tv, Landmark, Users }

function DomainSources({ sources }) {
  if (!sources || sources.length === 0) {
    return null
  }

  return (
    <p className="bento-card__sources">
      <strong>Sources:</strong>{' '}
      {sources.map((source, index) => (
        <span key={source.url}>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source.name} ↗
          </a>
          {index < sources.length - 1 && ' · '}
        </span>
      ))}
    </p>
  )
}

function DomainCard({ domain }) {
  const Icon = ICONS[domain.icon] ?? Home

  if (domain.size === 'feature') {
    return (
      <div className="bento-card bento-card--feature">
        <div>
          <div className="bento-card__icon">
            <Icon size={20} />
          </div>
          <h3>{domain.title}</h3>
          <div className="bento-card__summary">{domain.summary}</div>
          <ul>
            {domain.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
           <DomainSources sources={domain.sources} />

        </div>
        <div aria-hidden="true" style={{ display: 'flex', justifyContent: 'center' }}>
          <Icon size={120} style={{ opacity: 0.14 }} />
        </div>
      </div>
    )
  }

  return (
    <div className={`bento-card bento-card--${domain.size}`}>
      <div className="bento-card__icon">
        <Icon size={20} />
      </div>
      <h3>{domain.title}</h3>
      <div className="bento-card__summary">{domain.summary}</div>
     <ul>
  {domain.points.map((point) => (
    <li key={point}>{point}</li>
  ))}
</ul>

<DomainSources sources={domain.sources} />
    </div>
  )
}

export default function ContemporaryRoles() {
  return (
    <section id="contemporary" className="section section--beige">
      <div className="container">
        <SectionHeader
          kicker="The present day"
          title="Contemporary Gender Roles"
          description="Gender expectations today are less rigid than in earlier periods, but they still shape everyday life across family, education, work, media, leadership, and community."
        />

        <Reveal className="bento">
          {contemporaryDomains.map((domain) => (
            <DomainCard domain={domain} key={domain.id} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
