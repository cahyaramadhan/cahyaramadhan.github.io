export default function SectionHeading({ kicker, title }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</p>
      <h2 className="mt-2 text-2xl font-bold text-stone-100 sm:text-3xl">{title}</h2>
    </div>
  )
}
