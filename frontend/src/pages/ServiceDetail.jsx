import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData, serviceSections } from '../data/services';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const sections = serviceSections[serviceId] || [];
  
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
                  {sections.map((section, index) => (
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
