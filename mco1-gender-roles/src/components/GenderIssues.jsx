import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { genderIssues } from '../data/content.js'

export default function GenderIssues() {
  const [openId, setOpenId] = useState(genderIssues[0]?.id ?? null)

  return (
    <section id="issues" className="section">
      <div className="container">
        <SectionHeader
          kicker="Realities"
          title="Gender Issues and Realities"
          description="These are ongoing issues discussed in Philippine gender research and policy. Each includes an explanation, its Philippine context, and a question meant to prompt further discussion — not a final answer."
        />

        <Reveal className="issues-list" as="div">
          {genderIssues.map((issue) => {
            const isOpen = openId === issue.id
            return (
              <article className="issue-card" key={issue.id}>
                <div className="issue-card__head">
                  <h3>{issue.title}</h3>
                  <button
                    className="issue-card__toggle"
                    onClick={() => setOpenId(isOpen ? null : issue.id)}
                    aria-expanded={isOpen}
                    aria-controls={`issue-${issue.id}`}
                  >
                    {isOpen ? 'Show less' : 'Read more'}
                  </button>
                </div>
                <p className="lead">{issue.explanation}</p>

                {isOpen && (
                  <div className="issue-card__body" id={`issue-${issue.id}`}>
                    <div>
                      <p className="issue-card__label">Philippine context</p>
                      <p className="issue-card__value">{issue.context}</p>
                    </div>
                    <div>
                      <p className="issue-card__label">Example</p>
                      <p className="issue-card__value">{issue.example}</p>
                    </div>
                    <div>
                      <p className="issue-card__label">Why it matters</p>
                      <p className="issue-card__value">{issue.whyItMatters}</p>
                    </div>
                    <div>
                      <p className="issue-card__label">Discussion point</p>
                      <p className="issue-card__value">{issue.reflection}</p>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
