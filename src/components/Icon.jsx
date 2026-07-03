// Minimal inline icon set so the project has zero icon-library dependency.
const paths = {
  mail: 'M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2',
  linkedin:
    'M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 9h3v11.5h-3V9zM9.5 9h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.66 2 3.66 4.7v6.8h-3v-6c0-1.44-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2v6.1h-3V9z',
  github:
    'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.83c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.65.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z',
  external: 'M14 3h7v7m0-7L10 14M5 5h5m-5 0v14h14v-5',
  arrowDown: 'M12 4v16m0 0l-6-6m6 6l6-6',
  code: 'M8 9l-4 3 4 3m8-6l4 3-4 3M13 5l-2 14',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6L6 18',
}

export default function Icon({ name, className = 'w-5 h-5' }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
