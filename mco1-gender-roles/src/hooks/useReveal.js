import { useEffect, useRef, useState } from 'react'

// A small IntersectionObserver hook used to trigger a single fade/rise
// reveal the first time an element scrolls into view. Deliberately does
// NOT re-trigger on every scroll — one entrance per element, nothing more.
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
