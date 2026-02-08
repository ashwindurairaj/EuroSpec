export function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
