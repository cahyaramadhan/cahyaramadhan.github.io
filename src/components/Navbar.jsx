import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Icon from './Icon'
import useSectionNav from '../hooks/useSectionNav'
import { profile } from '../data/portfolio'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const goToSection = useSectionNav()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Re-attach once the homepage's sections exist in the DOM — they aren't
  // there at all when we're on a project detail route.
  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [location.pathname])

  const handleNav = (id) => {
    setOpen(false)
    goToSection(id)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-stone-950/85 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="font-mono text-lg font-semibold text-stone-100 hover:text-accent transition-colors"
        >
          CR<span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active === id && location.pathname === '/'
                    ? 'text-accent'
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-accent/40 px-3.5 py-1.5 text-sm text-accent hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>

        <button
          className="md:hidden text-stone-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-stone-950/95 backdrop-blur border-b border-white/5">
          <ul className="section-container flex flex-col py-3">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  className={`w-full text-left py-2.5 text-sm ${
                    active === id && location.pathname === '/' ? 'text-accent' : 'text-stone-300'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2.5 text-sm text-accent"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
