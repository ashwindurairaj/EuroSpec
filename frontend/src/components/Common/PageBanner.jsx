export function PageBanner({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80'})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
