import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const servicesInfo = {
  tooling: {
    title: 'Tooling',
    subtitle: 'Preferred Tooling Vendor for OEMs Globally',
    bannerImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=800&q=80',
    description: 'Eurospec is a preferred tooling vendor for OEMs globally, specializing in progressive dies, transfer dies, and line dies.',
  },
  manufacturing: {
    title: 'Manufacturing',
    subtitle: 'Full-Service Automotive Manufacturing',
    bannerImage: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    description: 'Our manufacturing facilities feature state-of-the-art mechanical presses and automated systems.',
  },
  design: {
    title: 'Design & Development',
    subtitle: 'Complete In-House Engineering Capabilities',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Full-service engineering department provides CAD design, CAE analysis, prototyping, and validation.',
  },
  capabilities: {
    title: 'Capabilities',
    subtitle: 'Advanced Materials & Process Expertise',
    bannerImage: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80',
    description: 'Four decades of expertise in advanced automotive materials and complex manufacturing processes.',
  },
  assembly: {
    title: 'Assembly',
    subtitle: 'Complex Automotive Sub-Assemblies',
    bannerImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
    description: 'Complex sub-assemblies for automotive seating, body-in-white, and chassis systems.',
  },
  innovation: {
    title: 'Innovation',
    subtitle: 'Advanced Simulation & Analysis',
    bannerImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced forming simulations and analysis tools to optimize designs and ensure quality.',
  },
};

const getFeatures = (id) => {
  const features = {
    tooling: [
      'Progressive Die Design & Build up to 180 inches',
      '60,000 pounds of lifting capacity',
      'Transfer Die: Hand Transfer, Mechanical Tooling',
      'In-Die processes: Tapping, Insertion of stake nuts',
      'In-house Tool Try-out and Certification',
      'HSLA ranging from 340MPa-550MPa',
      'Dual Phase up to 140 KSI (1000MPa)',
      '1mm - 8mm thick material',
    ],
    manufacturing: [
      'Mechanical Presses: 300-1500 tons',
      'Fully Automated Assemblies',
      'Riveting & Staking',
      'Projection Welding & Spot Welding',
      'Robotic MIG Welding',
      'Coatings and surface treatments',
      'Quality inspection',
      'Global shipping',
    ],
    design: [
      'CATIA V5 R20',
      'UniGraphics NX10',
      'SolidWorks 2015',
      'LS DynaForm 5.2',
      'Mastercam X9',
      'FTI - Fastform',
      'NX Design & CNC',
      'Metal forming simulation',
    ],
    capabilities: [
      'HSLA (High Strength Low Alloy) steels',
      'Dual Phase materials up to 1000MPa',
      'Draw Quality steels',
      'Non-ferrous materials',
      '1mm - 8mm material thickness',
      'Deep draw forming',
      'IATF 16949 certified',
      'CMM inspection',
    ],
    assembly: [
      'Seat Frames and Structures',
      'Seat Recliner Mechanisms',
      'Seat Track Mechanisms',
      'Body in White components',
      'Pillar reinforcements',
      'Frame rails',
      'Child Restraint Assemblies',
      'Custom weldments',
    ],
    innovation: [
      'Forming Limit Design',
      'Springback prediction',
      'Material Thinning Analysis',
      'Strip Layout optimization',
      'Die Design simulation',
      'Virtual try-out',
      'Reduced development time',
      'First-time quality',
    ],
  };
  return features[id] || [];
};

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesInfo[serviceId];
  const features = getFeatures(serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen" data-testid="service-not-found">
        <Header />
        <main className="py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen" data-testid={`service-detail-${serviceId}`}>
      <Header />
      <main>
        <PageBanner 
          title={service.title}
          subtitle={service.subtitle}
          backgroundImage={service.bannerImage}
        />
        
        <div className="bg-slate-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              data-testid="back-to-services"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
          </div>
        </div>
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {service.description}
                </p>
                
                <Card className="border border-slate-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="sticky top-24">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover rounded-md shadow-lg mb-8"
                />
                
                <Card className="bg-primary text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-gray-200 mb-6">
                      Contact our team to discuss your {service.title.toLowerCase()} requirements.
                    </p>
                    <Link to="/contact" data-testid="service-contact-btn">
                      <Button className="w-full bg-accent hover:bg-accent-hover text-white">
                        Contact Us Today
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
