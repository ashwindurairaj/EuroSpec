import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { SectionTitle } from '../components/Common/SectionTitle';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, Building2, Users, Globe, Award } from 'lucide-react';

const competencies = [
  'Four decades of experience supplying to Automotive',
  'Metal stampings, welded assemblies and mechanisms',
  'Progressive dies, transfer dies and line dies',
  'Extensive experience with HSLA, Dual Phase, Draw Quality steels',
  'Complete in-house tool design capabilities including metal forming simulation',
  'Full-service engineering department: CAD design, CAE, Prototyping and Validation',
  'Product Development Process with program management disciplines',
  'Mature LCC capability for hybrid build tooling',
];

const facilities = [
  {
    name: 'Plant 1',
    address: '130 Harry Walker Parkway, Newmarket, Ontario, Canada',
    size: '110,000 Sq. Ft.',
    description: 'Main manufacturing and tooling facility',
  },
  {
    name: 'Plant 2',
    address: 'Newmarket, Ontario, Canada',
    size: '55,000 Sq. Ft.',
    description: 'Secondary manufacturing facility',
  },
  {
    name: 'Warehouse',
    address: '100 Vandorf Sideroad, Aurora, ON',
    size: 'Distribution Center',
    description: 'Logistics and distribution hub',
  },
];

export const About = () => {
  return (
    <div className="min-h-screen" data-testid="about-page">
      <Header />
      <main>
        <PageBanner 
          title="About Us"
          subtitle="Four decades of excellence in automotive manufacturing"
          backgroundImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=1920&q=80"
        />
        
        {/* Company Profile */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle 
                  title="Company Profile"
                  subtitle="Established in 1985"
                  centered={false}
                />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, 
                  has been serving the automotive industry for four decades. We specialize in tooling, 
                  stamping, mechanisms, and assemblies for the world's leading OEMs and Tier 1 suppliers.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With a combined facility of over 165,000 square feet and 250 dedicated employees, 
                  we produce over 60 million components annually, shipping 35 million parts and 
                  assemblies to customers globally.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">165,000 sq ft</p>
                      <p className="text-sm text-muted-foreground">Combined Facility</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">250</p>
                      <p className="text-sm text-muted-foreground">Employees</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">Global</p>
                      <p className="text-sm text-muted-foreground">Shipping Reach</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-primary">IATF 16949</p>
                      <p className="text-sm text-muted-foreground">Certified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Manufacturing facility"
                  className="w-full h-[500px] object-cover rounded-md shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-md shadow-lg">
                  <p className="font-serif text-4xl font-bold">40+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Competencies */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Our Competencies"
              subtitle="Comprehensive capabilities that set us apart"
            />
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {competencies.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Facilities */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Our Facilities"
              subtitle="State-of-the-art manufacturing locations across Ontario"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">{facility.name}</h3>
                    <p className="text-accent font-semibold mb-3">{facility.size}</p>
                    <p className="text-sm text-muted-foreground mb-2">{facility.address}</p>
                    <p className="text-sm text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Quality Commitment */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Quality Policy Statement
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                "We are committed to meeting all customer expectations through communication of 
                organizational objectives including customer requirements, commitment and dedication 
                to employee development, and continual improvement."
              </p>
              <div className="flex items-center justify-center gap-4">
                <Award className="w-12 h-12 text-accent" />
                <div className="text-left">
                  <p className="font-semibold">IATF 16949: Design & Manufacturing</p>
                  <p className="text-sm text-gray-300">Bureau Veritas Certified since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
