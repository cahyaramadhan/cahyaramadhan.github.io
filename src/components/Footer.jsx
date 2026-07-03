import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="section-container py-8 text-center">
      <p className="font-mono text-xs text-stone-600">
        Designed & built by {profile.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
