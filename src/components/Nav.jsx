import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">MAV<span>.</span></a>
      <ul className="nav-links">
        {['About','Stack','Projects','Certificates','Contact'].map(s => (
          <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
        ))}
      </ul>
    </nav>
  )
}
