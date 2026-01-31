const stats = [
  {
    value: '165,000',
    label: 'Sq. Ft. Combined Facility',
    description: 'Plant 1: 110,000 sq ft • Plant 2: 55,000 sq ft',
  },
  {
    value: '60M+',
    label: 'Components Produced',
    description: 'Annual production capacity in 2024',
  },
  {
    value: '35M',
    label: 'Parts Shipped',
    description: 'Global shipping to OEMs worldwide',
  },
  {
    value: '$30M+',
    label: 'Annual Tooling Capacity',
    description: 'Long-term multi-year contracts',
  },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-slate-50" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Manufacturing at Scale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our production capabilities meet the demands of the world's largest automotive manufacturers
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-gray-800 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
