import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { conclusion } from '../data/content.js'

export default function Conclusion() {
  return (
    <section id="conclusion" className="section section--navy">
      <div className="container">
        <Reveal>
          <SectionHeader kicker="Bringing it together" title={conclusion.title} />
          <div className="conclusion__text">
            {conclusion.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
