import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { SectionTitle } from '../components/Common/SectionTitle'
import { Reveal, StaggerGroup, StaggerItem } from '../components/Common/Reveal'
import { ExplodedTool } from '../components/Home/ExplodedTool'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, CheckCircle2, Wrench, Factory, PenTool, Cog, Boxes, Sparkles } from 'lucide-react'
import tooling from '../assets/images/WhatsApp Image 2026-02-10 at 22.03.41.jpeg'
import innovation from '../assets/images/image2.jpeg'
import manufacturing from '../assets/images/image1.jpeg'
import floor from '../assets/images/floor.jpeg'
import experience from '../assets/images/experiences.jpeg'
import homeBan from '../assets/images/IMG_4363.PNG'

const services = [
  { id: 'tooling', title: 'Tooling', description: 'Progressive dies, transfer dies, and line dies up to 180 inches.', icon: Wrench, image: tooling },
  { id: 'manufacturing', title: 'Manufacturing', description: 'Mechanical presses ranging from 300-1500 tons.', icon: Factory, image: manufacturing },
  { id: 'design', title: 'Design & Development', description: 'CAD design, CAE, prototyping and validation.', icon: PenTool, image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?auto=format&fit=crop&w=600&q=80' },
  { id: 'capabilities', title: 'Capabilities', description: 'HSLA, Dual Phase steels up to 1000MPa.', icon: Cog, image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80' },
  { id: 'assembly', title: 'Assembly', description: 'Fully automated assemblies, riveting, welding.', icon: Boxes, image: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?auto=format&fit=crop&w=600&q=80' },
  { id: 'innovation', title: 'Innovation', description: 'Forming simulations and material analysis.', icon: Sparkles, image: innovation },
]

const features = [
  'Progressive Dies, Transfer Dies and Line Dies',
  'Metal Stampings, Welded Assemblies and Mechanisms',
  'Complete In-house Tool Design Capabilities',
  'Full-service Engineering Department',
  'IATF 16949 Certified Quality Systems',
]

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: '250', label: 'Employees' },
  { value: '60M+', label: 'Components/Year' },
  { value: '35M', label: 'Parts Shipped' },
]

const customers = ['Ford', 'GM', 'Stellantis', 'BMW', 'Mercedes-Benz', 'Honda', 'Toyota', 'Nissan']

// Gallery images - Define all 9 images here
const galleryImages = [
  {
    id: 1,
    src: floor,
    alt: 'Manufacturing Floor',
    category: 'Manufacturing'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1727373203627-73457889fe0f?auto=format&fit=crop&w=800&q=80',
    alt: 'Robotic Welding',
    category: 'Welding'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?auto=format&fit=crop&w=800&q=80',
    alt: 'Quality Control',
    category: 'Quality'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    alt: 'Engineering Design',
    category: 'Design'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?auto=format&fit=crop&w=800&q=80',
    alt: 'Assembly Line',
    category: 'Assembly'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1742967416909-ffbceccbf4da?auto=format&fit=crop&w=800&q=80',
    alt: 'Metal Stamping',
    category: 'Manufacturing'
  },
  {
    id: 7,
     src: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=800&q=80',
    alt: 'Precision Machining',
    category: 'Tooling'
  },
  {
    id: 8,
    src: manufacturing,
    alt: 'Production Facility',
    category: 'Facility'
  },
  {
    id: 9,
    src: tooling,
    alt: 'Tool Manufacturing',
    category: 'Tooling'
  }
]

export default function Home() {
  const [showAllImages, setShowAllImages] = useState(false)
  
  // Display only first 6 images initially, all 9 when expanded
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 6)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${homeBan})` }} />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.p
              className="text-accent font-medium mb-4 tracking-wider uppercase text-sm"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}
            >
              Established 1985 • IATF 16949 Certified
            </motion.p>
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            >
              Precision Engineering<span className="block text-accent">for Global Automotive</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              Four decades of excellence in tooling, stamping, mechanisms and assemblies.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            >
              <Link to="/services"><Button variant="accent" size="lg" data-testid="hero-services-btn">Explore Our Services <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
              <Link to="/contact"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" data-testid="hero-contact-btn">Contact Us</Button></Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((s, i) => (
                  <StaggerItem key={i}>
                    <p className="font-serif text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                    <p className="text-gray-300 text-sm">{s.label}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>

        {/* Signature exploded-tool scroll animation */}
        <ExplodedTool />

        {/* Overview */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal direction="right">
                <SectionTitle title="Four Decades of Excellence" subtitle="Serving the global automotive industry since 1985" centered={false} />
                <p className="text-gray-500 mb-8">North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, has been a trusted partner for the automotive industry.</p>
                <StaggerGroup className="space-y-4">
                  {features.map((f, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{f}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80" alt="Machining" className="w-full h-48 object-cover rounded-md shadow-md" />
                  <img src={experience} alt="Facility" className="w-full h-64 object-cover rounded-md shadow-md" />
                </div>
                <div className="pt-8">
                  <img src="https://images.unsplash.com/photo-1742967416909-ffbceccbf4da?auto=format&fit=crop&w=600&q=80" alt="Quality" className="w-full h-80 object-cover rounded-md shadow-md" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal><SectionTitle title="Our Services" subtitle="Comprehensive solutions for the automotive manufacturing industry" /></Reveal>
            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.id}>
                    <Link to={`/services/${service.id}`} className="group block h-full" data-testid={`home-service-${service.id}`}>
                      <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="h-full">
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <div className="relative h-48 overflow-hidden">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/25 transition-colors" />
                            <div className="absolute top-4 left-4 p-3 bg-white rounded-md shadow-md"><Icon className="w-6 h-6 text-primary" /></div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                              {service.title}<ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                            <p className="text-gray-500 text-sm">{service.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerGroup>
          </div>
        </section>

        {/* Customers */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal><SectionTitle title="Trusted by Industry Leaders" subtitle="Supplying components to the world's most demanding automotive manufacturers" /></Reveal>
            <StaggerGroup className="flex flex-wrap justify-center gap-8 md:gap-12">
              {customers.map((c, i) => (
                <StaggerItem key={i}>
                  <div className="font-serif text-xl md:text-2xl font-semibold text-gray-400 hover:text-primary transition-colors">{c}</div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Gallery Section - NEW */}
               <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle 
              title="Our Capabilities in Action" 
              subtitle="Explore our state-of-the-art facilities and manufacturing processes" 
            />
            
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-lg">{image.alt}</p>
                      <p className="text-accent text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {!showAllImages && (
              <div className="text-center">
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => setShowAllImages(true)}
                  className="group"
                >
                  Show More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}

            {/* Show Less Button (optional) */}
            {showAllImages && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setShowAllImages(false)}
                  className="group"
                >
                  Show Less
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
