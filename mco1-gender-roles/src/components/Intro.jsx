import Reveal from './Reveal.jsx'
import { introSection } from '../data/content.js'

export default function Intro() {
  return (
    <section id="intro" className="section">
      <div className="container intro-split">
        <Reveal className="intro-split__lead">
          <span className="section-header__kicker">{introSection.kicker}</span>
          <h2>{introSection.title}</h2>
          <hr className="section-header__rule" />
          <p>{introSection.body}</p>
        </Reveal>

        <Reveal className="concept-grid" delay={100}>
          {introSection.concepts.map((concept) => (
            <div className="concept-card" key={concept.id}>
              <span className="concept-card__label">{concept.label}</span>
              <div>
                <h3>{concept.title}</h3>
                <p>{concept.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
