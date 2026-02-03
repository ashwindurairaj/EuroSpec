import { Link } from 'react-router-dom';
import { SectionTitle } from '../Common/SectionTitle';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Wrench, Factory, PenTool, Cog, Boxes, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'tooling',
    title: 'Tooling',
    description: 'Progressive dies, transfer dies, and line dies up to 180 inches. In-house tool design and certification.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Mechanical presses ranging from 300-1500 tons. Complex stamping and forming processes.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'design',
    title: 'Design & Development',
    description: 'CAD design, CAE, prototyping and validation. Metal forming simulation with CATIA, NX, and SolidWorks.',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    description: 'HSLA, Dual Phase steels up to 1000MPa. Material thickness from 1mm to 8mm.',
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'assembly',
    title: 'Assembly',
    description: 'Fully automated assemblies, riveting, staking, projection welding, spot welding, and robotic MIG welding.',
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Forming simulations, material thinning analysis, and advanced CAE capabilities for optimized designs.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-white" data-testid="services-preview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services"
          subtitle="Comprehensive solutions for the automotive manufacturing industry"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group"
                data-testid={`service-card-${service.id}`}
              >
                <Card className="h-full overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                    <div className="absolute top-4 left-4 p-3 bg-white rounded-md shadow-md">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
