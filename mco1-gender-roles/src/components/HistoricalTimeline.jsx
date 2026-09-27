import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { timelineData } from '../data/timelineData.js'

export default function HistoricalTimeline() {
  const [openId, setOpenId] = useState(timelineData[0]?.id ?? null)

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="historical" className="section">
      <div className="container">
        <SectionHeader
          kicker="Change over time"
          title="Historical Perspective"
          description="An interactive timeline of gender roles in the Philippines, from pre-colonial communities through Spanish and American colonial rule to the present. Select a period to read more."
        />

        <div className="timeline">
          {timelineData.map((item) => {
            const isOpen = openId === item.id

            return (
              <Reveal
                as="div"
                className="timeline__item"
                key={item.id}
              >
                <div className="timeline__period-label">
                  {item.range}
                  <span
                    className="timeline__marker"
                    aria-hidden="true"
                  />
                </div>

                <button
                  className="timeline__card"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                >
                  <div>
                    <h3>{item.period}</h3>
                    <p>{item.summary}</p>
                  </div>

                  <ChevronDown
                    className={`timeline__chevron ${
                      isOpen ? 'is-open' : ''
                    }`}
                    size={22}
                  />
                </button>

                <div
                  id={`panel-${item.id}`}
                  className={`timeline__details ${
                    isOpen ? 'is-open' : ''
                  }`}
                >
                  <div className="timeline__details-inner">
                    <ul>
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>

                    {item.sources && item.sources.length > 0 && (
                      <p className="timeline__sources">
                        <strong>Sources:</strong>{' '}

                        {item.sources.map((source, index) => (
                          <span key={source.url}>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {source.name} ↗
                            </a>

                            {index < item.sources.length - 1 && ' · '}
                          </span>
                        ))}
                      </p>
                    )}

                    <figure className="timeline__image">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        loading="lazy"
                      />

                      <figcaption>
                        <span className="timeline__image-caption">
                          {item.imageCaption}
                        </span>

                        <span className="timeline__image-credit">
                          Image source: {item.imageCredit}
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}