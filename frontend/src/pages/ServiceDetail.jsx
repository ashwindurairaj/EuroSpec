import { useParams, Link } from 'react-router-dom'
import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { PageBanner } from '../components/Common/PageBanner'
import { Reveal } from '../components/Common/Reveal'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { images } from '../assets'

const servicesData = {
  tooling: { title: 'Tooling', subtitle: 'Preferred Tooling Vendor for OEMs Globally', bannerImage: images.toolingBanner, image: images.tooling, description: 'Eurospec is a preferred tooling vendor for OEMs globally, specializing in progressive dies, transfer dies, and line dies.', features: ['Progressive Die Design up to 180 inches', '60,000 pounds lifting capacity', 'Transfer Die: Hand Transfer, Mechanical', 'In-Die processes: Tapping, Insertion', 'In-house Tool Try-out and Certification', 'HSLA ranging from 340MPa-550MPa', 'Dual Phase up to 140 KSI (1000MPa)'] },
  manufacturing: { title: 'Manufacturing', subtitle: 'Full-Service Automotive Manufacturing', bannerImage: images.manufacturing, image: images.manufacturing, description: 'Our manufacturing facilities feature state-of-the-art mechanical presses and automated systems.', features: ['Mechanical Presses: 300-1500 tons', 'Fully Automated Assemblies', 'Riveting & Staking', 'Projection & Spot Welding', 'Robotic MIG Welding', 'Coatings and surface treatments', 'Quality inspection', 'Global shipping'] },
  design: { title: 'Design & Development', subtitle: 'Complete In-House Engineering', bannerImage: images.design, image: images.design, description: 'Full-service engineering department provides CAD design, CAE analysis, prototyping, and validation.', features: ['CATIA V5 R20', 'UniGraphics NX10', 'SolidWorks 2015', 'LS DynaForm 5.2', 'Mastercam X9', 'FTI - Fastform', 'Metal forming simulation'] },
  capabilities: { title: 'Capabilities', subtitle: 'Advanced Materials & Process Expertise', bannerImage: images.capabilities, image: images.capabilities, description: 'Four decades of expertise in advanced automotive materials and complex manufacturing processes.', features: ['HSLA (High Strength Low Alloy) steels', 'Dual Phase materials up to 1000MPa', 'Draw Quality steels', 'Non-ferrous materials', '1mm - 8mm material thickness', 'Deep draw forming', 'IATF 16949 certified'] },
  assembly: { title: 'Assembly', subtitle: 'Complex Automotive Sub-Assemblies', bannerImage: images.assembly, image: images.assembly, description: 'Complex sub-assemblies for automotive seating, body-in-white, and chassis systems.', features: ['Seat Frames and Structures', 'Seat Recliner Mechanisms', 'Seat Track Mechanisms', 'Body in White components', 'Pillar reinforcements', 'Frame rails', 'Child Restraint Assemblies'] },
  innovation: { title: 'Innovation', subtitle: 'Advanced Simulation & Analysis', bannerImage: images.innovation, image: images.innovation, description: 'Advanced forming simulations and analysis tools to optimize designs and ensure quality.', features: ['Forming Limit Design', 'Springback prediction', 'Material Thinning Analysis', 'Strip Layout optimization', 'Die Design simulation', 'Virtual try-out', 'First-time quality'] },
}

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <Link to="/services"><Button><ArrowLeft className="w-4 h-4 mr-2" />Back to Services</Button></Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner title={service.title} subtitle={service.subtitle} backgroundImage={service.bannerImage} />
        <div className="bg-slate-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"><ArrowLeft className="w-4 h-4" />Back to All Services</Link>
          </div>
        </div>
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Reveal direction="right">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-lg text-gray-500 mb-10">{service.description}</p>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal direction="left" delay={0.12}>
                <div className="sticky top-24">
                  <div className="overflow-hidden rounded-md shadow-lg mb-8">
                    <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <Card className="bg-primary text-white border-0">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-bold mb-4">Ready to Get Started?</h3>
                      <p className="text-gray-200 mb-6">Contact our team to discuss your {service.title.toLowerCase()} requirements.</p>
                      <Link to="/contact"><Button variant="accent" className="w-full">Contact Us Today</Button></Link>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
