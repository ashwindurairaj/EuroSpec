import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { PageBanner } from '../components/Common/PageBanner'
import { SectionTitle } from '../components/Common/SectionTitle'
import { Reveal, StaggerGroup, StaggerItem } from '../components/Common/Reveal'
import { Card, CardContent } from '../components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import { ArrowRight, Wrench, Factory, PenTool, Cog, Boxes, Sparkles } from 'lucide-react'
import { images } from '../assets'

const services = [
  { id: 'tooling', title: 'Tooling', icon: Wrench, image: images.tooling, description: 'Progressive dies, transfer dies, and line dies. Preferred tooling vendor for OEMs globally.', features: ['Progressive Die Design up to 180 inches', '60,000 pounds lifting capacity', 'Transfer Die: Hand Transfer, Mechanical', 'In-house Tool Try-out and Certification'] },
  { id: 'manufacturing', title: 'Manufacturing', icon: Factory, image: images.manufacturing, description: 'Full-service manufacturing with presses ranging from 300-1500 tons.', features: ['Mechanical Presses: 300-1500 tons', 'Fully Automated Assemblies', 'Projection & Spot Welding', 'Robotic MIG Welding'] },
  { id: 'design', title: 'Design & Development', icon: PenTool, image: images.design, description: 'Complete in-house tool design capabilities with advanced CAD/CAE.', features: ['CATIA V5, NX10, SolidWorks', 'LS DynaForm, Mastercam X9', 'Metal forming simulation', 'Prototype development'] },
  { id: 'capabilities', title: 'Capabilities', icon: Cog, image: images.capabilities, description: 'Extensive experience with advanced materials and processes.', features: ['HSLA 340MPa-550MPa', 'Dual Phase up to 1000MPa', '1mm – 8mm thickness', 'IATF 16949 certified'] },
  { id: 'assembly', title: 'Assembly', icon: Boxes, image: images.assembly, description: 'Complex sub-assemblies for automotive seating, BIW, and chassis.', features: ['Seat Frames and Structures', 'Seat Recliner Mechanisms', 'Body in White components', 'Child Restraint Assemblies'] },
  { id: 'innovation', title: 'Innovation', icon: Sparkles, image: images.innovation, description: 'Advanced simulation and analysis for optimized designs.', features: ['Forming Limit Design', 'Material Thinning Analysis', 'Die Design simulation', 'Virtual try-out'] },
]

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner title="Our Services" subtitle="Comprehensive automotive manufacturing solutions" backgroundImage={images.heroFactory} />

        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal><SectionTitle title="What We Offer" subtitle="End-to-end solutions for automotive tooling and manufacturing" /></Reveal>
            <Tabs defaultValue="tooling" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <TabsTrigger key={s.id} value={s.id} className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md border border-gray-200">
                      <Icon className="w-4 h-4" />{s.title}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
              {services.map((s) => (
                <TabsContent key={s.id} value={s.id}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                      <h3 className="font-serif text-3xl font-bold text-primary mb-4">{s.title}</h3>
                      <p className="text-gray-500 text-lg mb-6">{s.description}</p>
                      <ul className="space-y-3 mb-8">
                        {s.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3"><div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>
                        ))}
                      </ul>
                      <Link to={`/services/${s.id}`} className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></Link>
                    </motion.div>
                    <motion.img src={s.image} alt={s.title} className="w-full h-[400px] object-cover rounded-md shadow-lg" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal><SectionTitle title="Explore All Services" subtitle="Click on any service to learn more" /></Reveal>
            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <StaggerItem key={s.id}>
                    <Link to={`/services/${s.id}`} className="group block h-full" data-testid={`service-card-${s.id}`}>
                      <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="h-full">
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <div className="relative h-48 overflow-hidden">
                            <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/25 transition-colors" />
                            <div className="absolute top-4 left-4 p-3 bg-white rounded-md shadow-md"><Icon className="w-6 h-6 text-primary" /></div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors flex items-center justify-between">{s.title}<ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></h3>
                            <p className="text-gray-500 text-sm line-clamp-2">{s.description}</p>
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
      </main>
      <Footer />
    </div>
  )
}
