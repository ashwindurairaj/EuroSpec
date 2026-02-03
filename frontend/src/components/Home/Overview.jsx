import { SectionTitle } from '../Common/SectionTitle';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Progressive Dies, Transfer Dies and Line Dies',
  'Metal Stampings, Welded Assemblies and Mechanisms',
  'Complete In-house Tool Design Capabilities',
  'Full-service Engineering Department',
  'Product Development Process with Program Management',
  'IATF 16949 Certified Quality Systems',
];

export const Overview = () => {
  return (
    <section className="py-24 bg-white" data-testid="overview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <SectionTitle 
              title="Four Decades of Excellence"
              subtitle="Serving the global automotive industry since 1985"
              centered={false}
            />
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, 
              has been a trusted partner for the automotive industry. With extensive experience 
              working with HSLA, Dual Phase, Draw Quality steels, and Non-ferrous materials, 
              we deliver precision components that meet the highest quality standards.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80" 
                alt="Precision machining"
                className="w-full h-48 object-cover rounded-md shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80" 
                alt="Manufacturing facility"
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </div>
            <div className="pt-8">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=600&q=80" 
                alt="Quality inspection"
                className="w-full h-80 object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
