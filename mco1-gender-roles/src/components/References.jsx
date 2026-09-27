import { useState, useMemo } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { references, referenceTypeLabels } from '../data/references.js'

export default function References() {
  const [filter, setFilter] = useState('all')

  const types = useMemo(() => ['all', ...new Set(references.map((r) => r.type))], [])

  const filtered = filter === 'all' ? references : references.filter((r) => r.type === filter)

  return (
    <section id="references" className="section">
      <div className="container">
        <SectionHeader
          kicker="Sources"
          title="References"
          description="Sources used throughout this website include Philippine government publications, official statistics, historical archives, visual materials, and educational media that support the discussion of gender roles in Philippine society."
        />

        <div className="ref-filters" role="tablist" aria-label="Filter references by type">
          {types.map((type) => (
            <button
              key={type}
              className={`ref-filter ${filter === type ? 'is-active' : ''}`}
              onClick={() => setFilter(type)}
              role="tab"
              aria-selected={filter === type}
            >
              {type === 'all' ? 'All sources' : referenceTypeLabels[type] ?? type}
            </button>
          ))}
        </div>

        <Reveal className="ref-list" as="div">
          {filtered.map((ref) => (
            <div className="ref-item" key={ref.id}>
              <span className="ref-item__type">{referenceTypeLabels[ref.type] ?? ref.type}</span>
              <div>
                <h3>{ref.title}</h3>
                <div className="ref-item__meta">
                  {ref.author}{ref.year ? ` · ${ref.year}` : ''}
                </div>
                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">
                    {ref.url} <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </a>
                )}
                {ref.note && <div className="ref-item__note">{ref.note}</div>}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
