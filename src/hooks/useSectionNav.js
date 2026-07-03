import { useNavigate, useLocation } from 'react-router-dom'

// Navigates to a section on the homepage (Hero/Skills/Experience/etc). If
// we're already on '/', scrolls directly; if we're on another route (e.g. a
// project detail page), navigates home first and lets Home.jsx finish the
// scroll once it has mounted. Optionally focuses a specific Experience tab
// by company id (see `experience[].id` in src/data/portfolio.js).
export default function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (id, { experienceId } = {}) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      if (experienceId) {
        window.dispatchEvent(new CustomEvent('portfolio:focus-experience', { detail: experienceId }))
      }
    } else {
      navigate('/', { state: { scrollTo: id, experienceId } })
    }
  }
}
