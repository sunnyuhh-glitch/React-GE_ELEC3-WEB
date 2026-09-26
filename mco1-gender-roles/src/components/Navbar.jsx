import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'understanding', label: 'Gender Roles' },
  { id: 'historical', label: 'History' },
  { id: 'contemporary', label: 'Today' },
  { id: 'issues', label: 'Issues' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'multimedia', label: 'Media' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'references', label: 'References' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="nav">
      <div className="nav__bar">
        <button className="nav__brand" onClick={() => handleNavigate('home')} aria-label="Go to homepage">
          <span className="nav__mark" aria-hidden="true">GR</span>
          <span className="nav__brand-text">
            Gender Roles PH
            <span>MCO 1</span>
          </span>
        </button>

        <ul className="nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="nav__toggle"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <nav className={`nav__mobile ${isOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
