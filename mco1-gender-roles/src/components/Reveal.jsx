import { useReveal } from '../hooks/useReveal.js'

// Wraps any block of content and fades/rises it in once, the first time
// it scrolls into view. Usage: <Reveal><SomeContent /></Reveal>
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
