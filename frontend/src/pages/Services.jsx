import { Link } from 'react-router-dom';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { SectionTitle } from '../components/Common/SectionTitle';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowRight, Wrench, Factory, PenTool, Cog, Boxes, Sparkles } from 'lucide-react';
import { servicesData, serviceFeatures } from '../data/services';

const iconMap = {
  tooling: Wrench,
  manufacturing: Factory,
  design: PenTool,
  capabilities: Cog,
  assembly: Boxes,
  innovation: Sparkles,
};

const servicesList = Object.values(servicesData);

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
                {servicesList.map((service) => {
                  const Icon = iconMap[service.id];
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
              
              {servicesList.map((service) => {
                const features = serviceFeatures[service.id] || [];
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
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
                );
              })}
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
              {servicesList.map((service) => {
                const Icon = iconMap[service.id];
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
