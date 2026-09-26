import { ArrowRight, ChevronDown, Scroll, Users2 } from 'lucide-react'
import { siteConfig, hero, sectionPreviews } from '../data/content.js'
import Reveal from './Reveal.jsx'

// A restrained archival-paper grain, applied once via mix-blend-mode
// rather than a repeating geometric pattern competing with the text.
function PaperTexture() {
  return (
    <svg className="hero__texture" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.35" />
    </svg>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home">
      <div className="hero">
        <PaperTexture />
        <div className="hero__inner">
          <div>
            <span className="hero__eyebrow">{siteConfig.courseOutput}</span>
            <h1>{hero.title}</h1>
            <p className="hero__intro">{hero.intro}</p>

            <div className="hero__actions">
              <button className="btn btn--gold" onClick={() => scrollTo('understanding')}>
                {hero.cta} <ArrowRight size={16} />
              </button>
              <button className="link--ghost" onClick={() => scrollTo('historical')}>
                View Historical Timeline <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__marker">1521 — Present</div>
            <div className="hero__card hero__card--main">
              <div className="hero__card-content">
                <Scroll className="hero__card-icon" size={22} />
                <span className="hero__card-label" style={{ marginTop: 14 }}>Then &amp; now</span>
                <span className="hero__card-title">Centuries of custom, colonization, and change</span>
              </div>
            </div>
            <div className="hero__card hero__card--float">
              <div className="hero__card-content">
                <Users2 className="hero__card-icon" size={22} style={{ margin: '0 auto 8px' }} />
                <span className="hero__card-title">Filipino Family &amp; Community</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <button className="hero__scroll-btn" onClick={() => scrollTo('understanding')} aria-label="Scroll to next section">
            Scroll
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="group-card">
          <div className="group-card__block">
            <h3>Group Information</h3>
            <div className="group-card__meta">
              <div>
                <dt>Group</dt>
                <dd>{siteConfig.groupName}</dd>
              </div>
              <div>
                <dt>Course &amp; Section</dt>
                <dd>{siteConfig.courseSection}</dd>
              </div>
              <div>
                <dt>Instructor</dt>
                <dd>{siteConfig.instructor}</dd>
              </div>
              <div>
                <dt>School</dt>
                <dd>{siteConfig.school}</dd>
              </div>
            </div>
          </div>
          <div className="group-card__block">
            <h3>Group Members</h3>
            <ul className="group-card__members">
              {siteConfig.members.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={80}>
          <nav className="preview-strip" aria-label="Section preview">
            {sectionPreviews.map((item) => (
              <button key={item.id} className="preview-strip__item" onClick={() => scrollTo(item.id)}>
                <strong>{item.label}</strong>
                <span>{item.blurb}</span>
              </button>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  )
}
