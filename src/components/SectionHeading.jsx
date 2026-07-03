export default function SectionHeading({ index, title }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="font-mono text-accent">{index}.</span>
      <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  )
}
