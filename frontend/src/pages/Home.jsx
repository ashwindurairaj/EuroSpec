import { Link } from 'react-router-dom'
import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { SectionTitle } from '../components/Common/SectionTitle'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, CheckCircle2, Wrench, Factory, PenTool, Cog, Boxes, Sparkles } from 'lucide-react'

const services = [
  { id: 'tooling', title: 'Tooling', description: 'Progressive dies, transfer dies, and line dies up to 180 inches.', icon: Wrench, image: 'https://images.unsplash.com/photo-1727373203627-73457889fe0f?auto=format&fit=crop&w=600&q=80' },
  { id: 'manufacturing', title: 'Manufacturing', description: 'Mechanical presses ranging from 300-1500 tons.', icon: Factory, image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80' },
  { id: 'design', title: 'Design & Development', description: 'CAD design, CAE, prototyping and validation.', icon: PenTool, image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?auto=format&fit=crop&w=600&q=80' },
  { id: 'capabilities', title: 'Capabilities', description: 'HSLA, Dual Phase steels up to 1000MPa.', icon: Cog, image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80' },
  { id: 'assembly', title: 'Assembly', description: 'Fully automated assemblies, riveting, welding.', icon: Boxes, image: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?auto=format&fit=crop&w=600&q=80' },
  { id: 'innovation', title: 'Innovation', description: 'Forming simulations and material analysis.', icon: Sparkles, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
]

const features = [
  'Progressive Dies, Transfer Dies and Line Dies',
  'Metal Stampings, Welded Assemblies and Mechanisms',
  'Complete In-house Tool Design Capabilities',
  'Full-service Engineering Department',
  'IATF 16949 Certified Quality Systems',
]

const customers = ['Ford', 'GM', 'Stellantis', 'BMW', 'Mercedes-Benz', 'Honda', 'Toyota', 'Nissan']

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80')` }} />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">Established 1985 • IATF 16949 Certified</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Precision Engineering<span className="block text-accent">for Global Automotive</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Four decades of excellence in tooling, stamping, mechanisms and assemblies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services"><Button variant="accent" size="lg">Explore Our Services <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
              <Link to="/contact"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">Contact Us</Button></Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div><p className="font-serif text-3xl md:text-4xl font-bold text-white">40+</p><p className="text-gray-300 text-sm">Years Experience</p></div>
                <div><p className="font-serif text-3xl md:text-4xl font-bold text-white">250</p><p className="text-gray-300 text-sm">Employees</p></div>
                <div><p className="font-serif text-3xl md:text-4xl font-bold text-white">60M+</p><p className="text-gray-300 text-sm">Components/Year</p></div>
                <div><p className="font-serif text-3xl md:text-4xl font-bold text-white">35M</p><p className="text-gray-300 text-sm">Parts Shipped</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle title="Four Decades of Excellence" subtitle="Serving the global automotive industry since 1985" centered={false} />
                <p className="text-gray-500 mb-8">North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, has been a trusted partner for the automotive industry.</p>
                <ul className="space-y-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80" alt="Machining" className="w-full h-48 object-cover rounded-md shadow-md" />
                  <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80" alt="Facility" className="w-full h-64 object-cover rounded-md shadow-md" />
                </div>
                <div className="pt-8">
                  <img src="https://images.unsplash.com/photo-1742967416909-ffbceccbf4da?auto=format&fit=crop&w=600&q=80" alt="Quality" className="w-full h-80 object-cover rounded-md shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Our Services" subtitle="Comprehensive solutions for the automotive manufacturing industry" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link key={service.id} to={`/services/${service.id}`} className="group">
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                        <div className="absolute top-4 left-4 p-3 bg-white rounded-md shadow-md"><Icon className="w-6 h-6 text-primary" /></div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                          {service.title}<ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-gray-500 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Customers */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title="Trusted by Industry Leaders" subtitle="Supplying components to the world's most demanding automotive manufacturers" />
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {customers.map((c, i) => (
                <div key={i} className="font-serif text-xl md:text-2xl font-semibold text-gray-400 hover:text-primary transition-colors">{c}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
