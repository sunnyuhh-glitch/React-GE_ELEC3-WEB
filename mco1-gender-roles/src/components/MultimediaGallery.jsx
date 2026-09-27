import { PlayCircle } from 'lucide-react'
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
          description="Explore photographs, illustrations, infographics, and audiovisual materials that show how gender roles in Philippine society have developed across different historical periods."
        />

        <Reveal className="media-grid" as="div">
          {galleryImages.map((image) => (
            <figure
              className={`media-card media-card--${image.size}`}
              key={image.id}
            >
              <div className="media-card__media">
                <img
                  src={image.image}
                  alt={image.alt}
                />
              </div>

              <figcaption className="media-card__caption">
                <strong>{image.caption}</strong>
                <span>{image.attribution}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {galleryVideos.map((video) => (
          <Reveal
            className="video-block"
            key={video.id}
            delay={80}
          >
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