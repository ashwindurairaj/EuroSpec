import { Header } from '../components/Common/Header'
import { Footer } from '../components/Common/Footer'
import { PageBanner } from '../components/Common/PageBanner'
import { SectionTitle } from '../components/Common/SectionTitle'
import { Card, CardContent } from '../components/ui/card'
import { Reveal, StaggerContainer, StaggerItem, TiltCard, PageTransition } from '../components/motion'
import { CheckCircle2, Building2, Users, Globe, Award } from 'lucide-react'

const competencies = [
  'Four decades of experience supplying to Automotive',
  'Metal stampings, welded assemblies and mechanisms',
  'Progressive dies, transfer dies and line dies',
  'Extensive experience with HSLA, Dual Phase steels',
  'Complete in-house tool design capabilities',
  'Full-service engineering department',
  'Product Development with program management',
  'Mature LCC capability for hybrid build tooling',
]

const facilities = [
  { name: 'Plant 1', address: '130 Harry Walker Parkway, Newmarket', size: '110,000 Sq. Ft.' },
  { name: 'Plant 2', address: 'Newmarket, Ontario', size: '55,000 Sq. Ft.' },
  { name: 'Warehouse', address: '100 Vandorf Sideroad, Aurora', size: 'Distribution Center' },
]

const highlights = [
  { icon: Building2, value: '165,000 sq ft', label: 'Combined Facility' },
  { icon: Users, value: '250', label: 'Employees' },
  { icon: Globe, value: 'Global', label: 'Shipping Reach' },
  { icon: Award, value: 'IATF 16949', label: 'Certified' },
]

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageBanner title="About Us" subtitle="Four decades of excellence in automotive manufacturing" backgroundImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?auto=format&fit=crop&w=1920&q=80" />

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <SectionTitle title="Company Profile" subtitle="Established in 1985" centered={false} />
                  <Reveal delay={0.05}><p className="text-gray-500 mb-6">North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, has been serving the automotive industry for four decades.</p></Reveal>
                  <Reveal delay={0.1}><p className="text-gray-500 mb-8">With a combined facility of over 165,000 square feet and 250 dedicated employees, we produce over 60 million components annually.</p></Reveal>
                  <StaggerContainer className="grid grid-cols-2 gap-6">
                    {highlights.map((h, i) => {
                      const Icon = h.icon
                      return (
                        <StaggerItem key={i}>
                          <div className="flex items-center gap-3"><Icon className="w-8 h-8 text-accent" /><div><p className="font-semibold text-primary">{h.value}</p><p className="text-sm text-gray-500">{h.label}</p></div></div>
                        </StaggerItem>
                      )
                    })}
                  </StaggerContainer>
                </div>
                <Reveal delay={0.15}>
                  <div className="relative">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Facility" className="w-full h-[500px] object-cover rounded-md shadow-lg" />
                    <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-md shadow-lg">
                      <p className="font-serif text-4xl font-bold">40+</p><p className="text-sm">Years of Excellence</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle title="Our Competencies" subtitle="Comprehensive capabilities that set us apart" />
              <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" stagger={0.08}>
                {competencies.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <SectionTitle title="Our Facilities" subtitle="State-of-the-art manufacturing locations across Ontario" />
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {facilities.map((f, i) => (
                  <StaggerItem key={i} className="h-full">
                    <TiltCard className="h-full">
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-serif text-xl font-bold text-primary mb-2">{f.name}</h3>
                          <p className="text-accent font-semibold mb-3">{f.size}</p>
                          <p className="text-sm text-gray-500">{f.address}</p>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-24 bg-primary text-white">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Quality Policy Statement</h2>
                <p className="text-xl text-gray-200 mb-8">"We are committed to meeting all customer expectations through communication, commitment to employee development, and continual improvement."</p>
                <div className="flex items-center justify-center gap-4">
                  <Award className="w-12 h-12 text-accent" />
                  <div className="text-left"><p className="font-semibold">IATF 16949: Design & Manufacturing</p><p className="text-sm text-gray-300">Bureau Veritas Certified since 2018</p></div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
