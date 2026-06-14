import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { SectionTitle } from '../components/Common/SectionTitle'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Reveal, StaggerContainer, StaggerItem, TiltCard, Counter, PageTransition } from '../components/motion'
import { ExplodedTool } from '../components/ExplodedTool'
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

const stats = [
  { value: 40, suffix: '+', label: 'Years Experience' },
  { value: 250, suffix: '', label: 'Employees' },
  { value: 60, suffix: 'M+', label: 'Components/Year' },
  { value: 35, suffix: 'M', label: 'Parts Shipped' },
]

const customers = ['Ford', 'GM', 'Stellantis', 'BMW', 'Mercedes-Benz', 'Honda', 'Toyota', 'Nissan']

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.28])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section ref={heroRef} className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80')`, y: bgY, scale: bgScale }}
            />
            <div className="absolute inset-0 bg-primary/85" />
            <motion.div style={{ y: contentY }} className="relative z-10 max-w-7xl mx-auto px-4 text-center">
              <motion.div variants={heroContainer} initial="hidden" animate="visible">
                <motion.p variants={heroItem} className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">Established 1985 • IATF 16949 Certified</motion.p>
                <motion.h1 variants={heroItem} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Precision Engineering<span className="block text-accent">for Global Automotive</span>
                </motion.h1>
                <motion.p variants={heroItem} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                  Four decades of excellence in tooling, stamping, mechanisms and assemblies.
                </motion.p>
                <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/services"><Button variant="accent" size="lg" data-testid="hero-services-btn">Explore Our Services <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                  <Link to="/contact"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" data-testid="hero-contact-btn">Contact Us</Button></Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {stats.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }} data-testid={`hero-stat-${i}`}>
                      <p className="font-serif text-3xl md:text-4xl font-bold text-white"><Counter value={s.value} suffix={s.suffix} /></p>
                      <p className="text-gray-300 text-sm">{s.label}</p>
                    </motion.div>
                  ))}
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
                  <Reveal delay={0.1}>
                    <p className="text-gray-500 mb-8">North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, has been a trusted partner for the automotive industry.</p>
                  </Reveal>
                  <StaggerContainer as="ul" className="space-y-4">
                    {features.map((f, i) => (
                      <StaggerItem key={i}>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{f}</span>
                        </li>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
                <StaggerContainer className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <StaggerItem><img src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?auto=format&fit=crop&w=600&q=80" alt="Machining" className="w-full h-48 object-cover rounded-md shadow-md" /></StaggerItem>
                    <StaggerItem><img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80" alt="Facility" className="w-full h-64 object-cover rounded-md shadow-md" /></StaggerItem>
                  </div>
                  <div className="pt-8">
                    <StaggerItem><img src="https://images.unsplash.com/photo-1742967416909-ffbceccbf4da?auto=format&fit=crop&w=600&q=80" alt="Quality" className="w-full h-80 object-cover rounded-md shadow-md" /></StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* Exploded tool scroll animation */}
          <ExplodedTool />

          {/* Services */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle title="Our Services" subtitle="Comprehensive solutions for the automotive manufacturing industry" />
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <StaggerItem key={service.id} className="h-full">
                      <Link to={`/services/${service.id}`} className="group block h-full" data-testid={`home-service-${service.id}`}>
                        <TiltCard className="h-full">
                          <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 overflow-hidden">
                              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
                        </TiltCard>
                      </Link>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          </section>

          {/* Customers */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle title="Trusted by Industry Leaders" subtitle="Supplying components to the world's most demanding automotive manufacturers" />
            </div>
            <Reveal>
              <Marquee gradient gradientColor="#ffffff" gradientWidth={120} speed={45} pauseOnHover>
                {customers.map((c, i) => (
                  <div key={i} className="font-serif text-2xl md:text-3xl font-semibold text-gray-400 hover:text-primary transition-colors mx-10">{c}</div>
                ))}
              </Marquee>
            </Reveal>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
