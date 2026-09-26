import { ImageIcon, PlayCircle, BarChart2 } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { galleryImages, galleryVideos } from '../data/mediaData.js'

export default function MultimediaGallery() {
  return (
    <section id="multimedia" className="section">
      <div className="container">
        <SectionHeader
          kicker="See it, not just read it"
          title="Multimedia"
          description="Images, illustrations, and video that support the research above. Replace these placeholders with your own properly attributed media — see the README for instructions."
        />

        <Reveal className="media-grid" as="div">
          {galleryImages.map((image) => (
            <figure className={`media-card media-card--${image.size}`} key={image.id}>
              <div className="media-card__media" role="img" aria-label={image.alt}>
                {image.kind === 'infographic' ? <BarChart2 size={30} /> : <ImageIcon size={28} />}
              </div>
              <figcaption className="media-card__caption">
                <strong>{image.caption}</strong>
                <span>{image.attribution}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {galleryVideos.map((video) => (
          <Reveal className="video-block" key={video.id} delay={80}>
            <div className="video-block__placeholder" aria-hidden="true">
              <PlayCircle size={40} />
            </div>
            <div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
