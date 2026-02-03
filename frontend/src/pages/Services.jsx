import { Link } from 'react-router-dom';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { SectionTitle } from '../components/Common/SectionTitle';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowRight, Wrench, Factory, PenTool, Cog, Boxes, Sparkles } from 'lucide-react';

const toolingFeatures = [
  'Progressive Die Design & Build up to 180 inches',
  '60,000 pounds of lifting capacity',
  'Transfer Die: Hand Transfer, Mechanical Tooling',
  'In-Die processes: Tapping, Insertion of stake nuts & rivets',
  'In-house Tool Try-out and Tool Certification',
];

const manufacturingFeatures = [
  'Mechanical Presses: 300-1500 tons',
  'Fully Automated Assemblies',
  'Riveting & Staking',
  'Projection Welding & Spot Welding',
  'Robotic MIG Welding',
  'Coatings',
];

const designFeatures = [
  'CATIA V5 R20',
  'UniGraphics NX10',
  'SolidWorks 2015',
  'LS DynaForm 5.2',
  'Mastercam X9',
  'FTI - Fastform',
  'NX Design & CNC',
];

const capabilitiesFeatures = [
  'HSLA ranging from 340MPa-550MPa',
  'Dual Phase up to 140 KSI (1000MPa)',
  'Material thickness: 1mm – 8mm',
  'Draw Quality steels',
  'Non-ferrous materials',
];

const assemblyFeatures = [
  'Seat Systems / Frames and Structures',
  'Body in White & Chassis Systems',
  'Interior / Exterior System Assemblies',
  'Seat Recliner Mechanisms',
  'Seat Track Mechanisms',
  'Child Restraint Assemblies',
];

const innovationFeatures = [
  'Forming Limit Design',
  'Material Thinning Analysis',
  'Strip Layout Optimization',
  'Die Design Simulation',
  'Metal Forming Simulation',
];

const services = [
  {
    id: 'tooling',
    title: 'Tooling',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=800&q=80',
    description: 'Progressive dies, transfer dies, and line dies. Preferred tooling vendor for OEMs globally.',
    features: toolingFeatures,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    description: 'Full-service manufacturing with mechanical presses ranging from 300-1500 tons.',
    features: manufacturingFeatures,
  },
  {
    id: 'design',
    title: 'Design & Development',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?auto=format&fit=crop&w=800&q=80',
    description: 'Complete in-house tool design capabilities with advanced CAD/CAE systems.',
    features: designFeatures,
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=800&q=80',
    description: 'Extensive experience working with advanced materials and complex processes.',
    features: capabilitiesFeatures,
  },
  {
    id: 'assembly',
    title: 'Assembly',
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?auto=format&fit=crop&w=800&q=80',
    description: 'Complex sub-assemblies for automotive seating, BIW, and chassis systems.',
    features: assemblyFeatures,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced simulation and analysis capabilities for optimized designs.',
    features: innovationFeatures,
  },
];

const FeatureList = ({ features }) => (
  <ul className="space-y-3 mb-8">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
        <span className="text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>
);

export const Services = () => {
  return (
    <div className="min-h-screen" data-testid="services-page">
      <Header />
      <main>
        <PageBanner 
          title="Our Services"
          subtitle="Comprehensive automotive manufacturing solutions"
          backgroundImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80"
        />
        
        {/* Services Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="What We Offer"
              subtitle="End-to-end solutions for automotive tooling and manufacturing"
            />
            
            <Tabs defaultValue="tooling" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <TabsTrigger 
                      key={service.id}
                      value={service.id}
                      className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md border border-slate-200"
                      data-testid={`tab-${service.id}`}
                    >
                      <Icon className="w-4 h-4" />
                      {service.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>
                      <FeatureList features={service.features} />
                      <Link 
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                        data-testid={`learn-more-${service.id}`}
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div>
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover rounded-md shadow-lg"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* All Services Grid */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Explore All Services"
              subtitle="Click on any service to learn more"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link 
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group"
                    data-testid={`service-grid-${service.id}`}
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
                        <p className="text-muted-foreground text-sm line-clamp-2">
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
      </main>
      <Footer />
    </div>
  );
};

export default Services;
