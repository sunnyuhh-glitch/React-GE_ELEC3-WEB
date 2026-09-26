import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { understanding } from '../data/content.js'

function ConceptDiagram() {
  return (
    <svg viewBox="0 0 460 180" role="img" aria-labelledby="diagram-title" className="concept-diagram">
      <title id="diagram-title">
        Diagram showing biological sex and gender roles as two related but distinct circles, both shaped by
        family, media, religion, and community.
      </title>
      <circle cx="150" cy="90" r="78" fill="none" stroke="#0B1733" strokeWidth="2" />
      <circle cx="290" cy="90" r="78" fill="none" stroke="#C59A3A" strokeWidth="2" />
      <text x="150" y="55" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="15" fill="#0B1733">Biological</text>
      <text x="150" y="74" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="15" fill="#0B1733">Sex</text>
      <text x="150" y="100" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#5B5548">Physical &amp; biological</text>
      <text x="150" y="116" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#5B5548">characteristics</text>

      <text x="290" y="55" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="15" fill="#0B1733">Gender</text>
      <text x="290" y="74" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="15" fill="#0B1733">Roles</text>
      <text x="290" y="100" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#5B5548">Socially assigned</text>
      <text x="290" y="116" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="10.5" fill="#5B5548">behaviors &amp; expectations</text>

      <text x="220" y="90" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="9.5" fill="#A95145" fontWeight="600">shaped by</text>
      <text x="220" y="104" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="9.5" fill="#A95145">family · media</text>
      <text x="220" y="118" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="9.5" fill="#A95145">religion · community</text>
    </svg>
  )
}

export default function GenderRoles() {
  return (
    <section id="understanding" className="section section--beige">
      <div className="container">
        <SectionHeader
          kicker="Foundations"
          title="Understanding Gender Roles"
          description={understanding.intro}
        />

        <Reveal className="understanding__grid">
          <div>
            <div className="info-card">
              <h3>{understanding.definitionCard.title}</h3>
              <p>{understanding.definitionCard.body}</p>
            </div>
            <div className="info-card">
              <h3>{understanding.whyItMatters.title}</h3>
              <p>{understanding.whyItMatters.body}</p>
            </div>
            <div className="info-card">
              <h3>{understanding.phExamples.title}</h3>
              <p>{understanding.phExamples.body}</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: 14 }}>{understanding.comparisonTitle}</h3>
            <div className="compare">
              {understanding.comparison.map((col) => (
                <div className="compare__col" key={col.heading}>
                  <h4>{col.heading}</h4>
                  <ul>
                    {col.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="diagram">
              <ConceptDiagram />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
