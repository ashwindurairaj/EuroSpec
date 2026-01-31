import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/85" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
            Established 1985 • IATF 16949 Certified
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Precision Engineering
            <span className="block text-accent">for Global Automotive</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Four decades of excellence in tooling, stamping, mechanisms and assemblies. 
            Trusted by the world's leading OEMs and Tier 1 suppliers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" data-testid="hero-services-btn">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-6 text-lg rounded-md"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact" data-testid="hero-contact-btn">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-white">40+</p>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-white">250</p>
              <p className="text-gray-300 text-sm">Employees</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-white">60M+</p>
              <p className="text-gray-300 text-sm">Components/Year</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-white">35M</p>
              <p className="text-gray-300 text-sm">Parts Shipped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
