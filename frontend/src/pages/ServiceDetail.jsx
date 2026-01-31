import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const servicesData = {
  tooling: {
    title: 'Tooling',
    subtitle: 'Preferred Tooling Vendor for OEMs Globally',
    bannerImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=1920&q=80',
    description: 'Eurospec is a preferred tooling vendor for OEMs globally, specializing in progressive dies, transfer dies, and line dies. Our in-house capabilities ensure precision, quality, and timely delivery.',
    sections: [
      {
        title: 'Progressive Die Design & Build',
        items: [
          'Up to 180 inches in length',
          '60,000 pounds of lifting capacity',
          'Complex multi-station designs',
          'High-speed production capability',
        ],
      },
      {
        title: 'Transfer Die Design & Build',
        items: [
          'Hand Transfer systems',
          'Mechanical Tooling',
          'Transfer Bars & Fingers',
          'Progressive to Transfer conversions',
        ],
      },
      {
        title: 'In-Die Processes',
        items: [
          'Tapping operations',
          'Insertion of stake nuts & rivets',
          'In-die nut piercing',
          'Multi-operation integration',
        ],
      },
      {
        title: 'Material Capabilities',
        items: [
          'HSLA ranging from 340MPa-550MPa',
          'Dual Phase up to 140 KSI (1000MPa)',
          '1mm – 8mm thick material depending on type',
          'Various steel grades and specifications',
        ],
      },
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=800&q=80',
  },
  manufacturing: {
    title: 'Manufacturing',
    subtitle: 'Full-Service Automotive Manufacturing',
    bannerImage: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80',
    description: 'Our manufacturing facilities feature state-of-the-art mechanical presses and automated systems, producing over 60 million components annually for the automotive industry.',
    sections: [
      {
        title: 'Press Capabilities',
        items: [
          'Mechanical Presses: 300-1500 tons',
          'High-volume production lines',
          'Precision stamping operations',
          'Multi-station progressive dies',
        ],
      },
      {
        title: 'Welding Processes',
        items: [
          'Projection Welding',
          'Spot Welding',
          'Robotic MIG Welding',
          'Custom weld fixtures',
        ],
      },
      {
        title: 'Assembly Operations',
        items: [
          'Fully Automated Assemblies',
          'Riveting operations',
          'Staking processes',
          'Sub-assembly integration',
        ],
      },
      {
        title: 'Additional Services',
        items: [
          'Coatings and surface treatments',
          'Quality inspection',
          'Packaging and logistics',
          'Global shipping',
        ],
      },
    ],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
  },
  design: {
    title: 'Design & Development',
    subtitle: 'Complete In-House Engineering Capabilities',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    description: 'Our full-service engineering department provides CAD design, CAE analysis, prototyping, and validation services using industry-leading software and technologies.',
    sections: [
      {
        title: 'CAD Software Suite',
        items: [
          'CATIA V5 R20',
          'UniGraphics NX10',
          'SolidWorks 2015',
          'KeyCreator 13.5',
        ],
      },
      {
        title: 'Simulation & Analysis',
        items: [
          'LS DynaForm 5.2',
          'FTI - Fastform',
          'Metal forming simulation',
          'Material thinning analysis',
        ],
      },
      {
        title: 'CAM & CNC',
        items: [
          'Mastercam X9',
          'NX Design & CNC',
          'Precision machining programs',
          'Tool path optimization',
        ],
      },
      {
        title: 'Development Services',
        items: [
          'Concept to production support',
          'Prototype development',
          'Design validation',
          'Process optimization',
        ],
      },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  capabilities: {
    title: 'Capabilities',
    subtitle: 'Advanced Materials & Process Expertise',
    bannerImage: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1920&q=80',
    description: 'With four decades of experience, we have developed extensive expertise in working with advanced automotive materials and complex manufacturing processes.',
    sections: [
      {
        title: 'Material Expertise',
        items: [
          'HSLA (High Strength Low Alloy) steels',
          'Dual Phase materials up to 1000MPa',
          'Draw Quality steels',
          'Non-ferrous materials',
        ],
      },
      {
        title: 'Thickness Range',
        items: [
          '1mm – 8mm material thickness',
          'Variable based on material type',
          'Precision thickness control',
          'Multi-gauge applications',
        ],
      },
      {
        title: 'Process Capabilities',
        items: [
          'Deep draw forming',
          'Progressive stamping',
          'Transfer die operations',
          'Complex geometry forming',
        ],
      },
      {
        title: 'Quality Systems',
        items: [
          'IATF 16949 certified',
          'CMM inspection',
          'Hardness and tensile testing',
          'Weld inspection capabilities',
        ],
      },
    ],
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80',
  },
  assembly: {
    title: 'Assembly',
    subtitle: 'Complex Automotive Sub-Assemblies',
    bannerImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1920&q=80',
    description: 'We specialize in manufacturing complex sub-assemblies for automotive seating, body-in-white, and chassis systems for major OEM platforms.',
    sections: [
      {
        title: 'Seating Systems',
        items: [
          'Seat Frames and Structures',
          'Seat Recliner Mechanisms',
          'Seat Track Mechanisms',
          'Seat Tumble Mechanisms',
        ],
      },
      {
        title: 'Body in White (BIW)',
        items: [
          'Structural components',
          'Pillar reinforcements',
          'Frame rails',
          'Cross-member assemblies',
        ],
      },
      {
        title: 'Chassis Systems',
        items: [
          'Floor pan components',
          'Structural brackets',
          'Kick-up members',
          'Support structures',
        ],
      },
      {
        title: 'Additional Assemblies',
        items: [
          'Child Restraint Assemblies',
          'Interior/Exterior Systems',
          'Mechanism sub-assemblies',
          'Custom weldments',
        ],
      },
    ],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
  },
  innovation: {
    title: 'Innovation',
    subtitle: 'Advanced Simulation & Analysis',
    bannerImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80',
    description: 'Our engineering team utilizes advanced forming simulations and analysis tools to optimize designs, reduce development time, and ensure first-time quality.',
    sections: [
      {
        title: 'Forming Simulations',
        items: [
          'Forming Limit Design',
          'Springback prediction',
          'Wrinkling analysis',
          'Crack risk assessment',
        ],
      },
      {
        title: 'Material Analysis',
        items: [
          'Material Thinning Analysis',
          'Strain distribution',
          'Thickness optimization',
          'Material utilization',
        ],
      },
      {
        title: 'Tool Design Process',
        items: [
          'Strip Layout optimization',
          'Die Design simulation',
          'Process validation',
          'Virtual try-out',
        ],
      },
      {
        title: 'Benefits',
        items: [
          'Reduced development time',
          'Lower tooling costs',
          'First-time quality',
          'Optimized designs',
        ],
      },
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
  },
};

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  
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
        
        {/* Breadcrumb */}
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
        
        {/* Content */}
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
                
                <div className="space-y-8">
                  {service.sections.map((section, index) => (
                    <Card key={index} className="border border-slate-100 shadow-sm">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-xl font-bold text-primary mb-4">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
