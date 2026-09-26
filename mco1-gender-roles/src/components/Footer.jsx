import { siteConfig } from '../data/content.js'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'understanding', label: 'Gender Roles' },
  { id: 'historical', label: 'History' },
  { id: 'contemporary', label: 'Today' },
  { id: 'issues', label: 'Issues' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'multimedia', label: 'Media' },
  { id: 'conclusion', label: 'Conclusion' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const goTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">{siteConfig.websiteTopic.split(':')[0]}</div>
            <p className="footer__desc">{siteConfig.courseOutput} — an academic exploration of how gender roles in the Philippines have formed, shifted, and persisted over time.</p>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => goTo(link.id)}>{link.label}</button>
                </li>
              ))}
              <li>
                <button onClick={() => goTo('references')}>References</button>
              </li>
            </ul>
          </div>

          <dl className="footer__meta">
            <dt>Group</dt>
            <dd>{siteConfig.groupName}</dd>
            <dt>Members</dt>
            <dd>{siteConfig.members.join(', ')}</dd>
            <dt>Course &amp; Section</dt>
            <dd>{siteConfig.courseSection}</dd>
            <dt>Instructor</dt>
            <dd>{siteConfig.instructor}</dd>
            <dt>School</dt>
            <dd>{siteConfig.school}</dd>
          </dl>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} {siteConfig.groupName} &middot; {siteConfig.school}</span>
          <span>Prepared as an academic course requirement — not for commercial use.</span>
        </div>
      </div>
    </footer>
  )
}
