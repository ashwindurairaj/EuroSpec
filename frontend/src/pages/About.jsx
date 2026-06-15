import { Header } from "../components/Common/Header";
import { Footer } from "../components/Common/Footer";
import { PageBanner } from "../components/Common/PageBanner";
import { SectionTitle } from "../components/Common/SectionTitle";
import { Card, CardContent } from "../components/ui/card";
import { Reveal, StaggerContainer, StaggerItem, TiltCard, PageTransition } from "../components/motion";
import { CheckCircle2, Building2, Users, Globe, Award } from "lucide-react";
import about from "../assets/images/about.jpeg";
import ceoImage from "../assets/images/ceo.png";
import Nancy from "../assets/images/NANCY.png";
import INDAR from "../assets/images/INDAR.png";
import PIRABA from "../assets/images/PIRABA.png";
import RANDY from "../assets/images/RANDY.png";
import VLADIMIR from "../assets/images/VLADIMIR.png";
import { AboutTimeline } from "../components/AboutTimeline";

const competencies = [
  "Four decades of experience supplying to Automotive",
  "Metal stampings, welded assemblies and mechanisms",
  "Progressive dies, transfer dies and line dies",
  "Extensive experience with HSLA, Dual Phase steels",
  "Complete in-house tool design capabilities",
  "Full-service engineering department",
  "Product Development with program management",
  "Mature LCC capability for hybrid build tooling",
];

const facilities = [
  { name: "Plant 1", address: "130 Harry Walker Parkway, Newmarket", size: "110,000 Sq. Ft." },
  { name: "Plant 2", address: "Newmarket, Ontario", size: "55,000 Sq. Ft." },
  { name: "Warehouse", address: "100 Vandorf Sideroad, Aurora", size: "Distribution Center" },
];

const highlights = [
  { icon: Building2, value: "165,000 sq ft", label: "Combined Facility" },
  { icon: Users, value: "250", label: "Employees" },
  { icon: Globe, value: "Global", label: "Shipping Reach" },
  { icon: Award, value: "IATF 16949", label: "Certified" },
];

const directors = [
  { name: "PIRABA GURUMURTHI", role: "Human Resources", image: PIRABA, description: "Cultivating exceptional talent and fostering organizational excellence through strategic initiatives." },
  { name: "INDAR MUDALIAR", role: "QUALITY, MAINTENANCE, MPL", image: INDAR, description: "Maintaining world-class quality standards and ensuring IATF 16949 compliance." },
  { name: "NANCY KIRKPATRICK", role: "Finance", image: Nancy, description: "Ensuring financial excellence and strategic fiscal planning for sustainable growth." },
  { name: "RANDY DUIVESTEYN", role: "NEW TOOLING & PRESS SHOP", image: RANDY, description: "Driving operational excellence and production efficiency across all facilities." },
  { name: "VLADIMIR POSATSKIY", role: "HEAD OF ENGINEERING", image: VLADIMIR, description: "Building enduring partnerships with global customers and expanding market presence." },
];

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageBanner title="About Us" subtitle="Four decades of excellence in automotive manufacturing" backgroundImage={about} />

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <SectionTitle title="Company Profile" subtitle="Established in 1985" centered={false} />
                  <Reveal delay={0.05}><p className="text-gray-500 mb-6">North American Metals Corp (NAMCO), operating as Eurospec Tooling & Manufacturing, has been serving the automotive industry for four decades.</p></Reveal>
                  <Reveal delay={0.1}><p className="text-gray-500 mb-8">With a combined facility of over 165,000 square feet and 250 dedicated employees, we produce over 60 million components annually.</p></Reveal>
                  <StaggerContainer className="grid grid-cols-2 gap-6">
                    {highlights.map((h, i) => {
                      const Icon = h.icon;
                      return (
                        <StaggerItem key={i}>
                          <div className="flex items-center gap-3"><Icon className="w-8 h-8 text-accent" /><div><p className="font-semibold text-primary">{h.value}</p><p className="text-sm text-gray-500">{h.label}</p></div></div>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                </div>
                <Reveal delay={0.15}>
                  <div className="relative">
                    <img src={about} alt="Facility" className="w-full h-[500px] object-cover rounded-md shadow-lg" />
                    <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-md shadow-lg">
                      <p className="font-serif text-4xl font-bold">40+</p>
                      <p className="text-sm">Years of Excellence</p>
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
          <AboutTimeline/>

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

          {/* Leadership Team Section */}
          <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #202E4A 1px, transparent 0)`,
                  backgroundSize: "48px 48px",
                }}
              />
            </div>

            {/* Floating gradient orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl" style={{ animation: "float 20s ease-in-out infinite" }} />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-3xl" style={{ animation: "float 25s ease-in-out infinite reverse" }} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              {/* Header */}
              <Reveal>
                <div className="text-center mb-28">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent/40 to-accent" />
                    <div className="px-6 py-2.5 bg-white shadow-lg rounded-full border border-gray-100">
                      <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium tracking-[0.25em] uppercase text-primary">Leadership Team</span>
                      </div>
                    </div>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent via-accent/40 to-accent" />
                  </div>
                  <h2 className="font-serif text-6xl md:text-7xl font-extralight text-primary mb-6 tracking-tight">
                    Our <span className="font-normal italic bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Visionaries</span>
                  </h2>
                  <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">Distinguished leaders driving innovation and transformative excellence</p>
                </div>
              </Reveal>

              {/* CEO Card */}
              <Reveal>
                <div className="max-w-6xl mx-auto mb-32">
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-1000" />
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-xl">
                      <div className="flex flex-col lg:flex-row">
                        {/* Image */}
                        <div className="lg:w-[45%] relative">
                          <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
                            <img src={ceoImage} alt="CEO Ken Rudnick" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                            {/* Title Badge */}
                            <div className="absolute top-3 left-2">
                              <div className="px-6 py-3 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/60">
                                <div className="flex items-center gap-3">
                                  <div className="w-2.5 h-2.5 bg-accent rounded-full" style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                                  <span className="text-primary text-sm font-medium tracking-wide">Chief Executive Officer</span>
                                </div>
                              </div>
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute bottom-10 right-10">
                              <div className="px-6 py-3 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/60">
                                <div className="text-center">
                                  <p className="text-2xl font-serif font-bold text-accent mb-0.5">40+</p>
                                  <p className="text-xs text-gray-600 uppercase tracking-wider">Years</p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/15 to-transparent rounded-bl-full" />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="lg:w-[55%] p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white via-white to-gray-50/30">
                          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full mb-8 w-fit">
                            <Award className="w-4 h-4 text-accent" />
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">CEO &amp; President</span>
                          </div>
                          <h3 className="font-serif text-5xl lg:text-6xl font-extralight text-primary mb-3 tracking-tight group-hover:text-accent transition-colors duration-700">
                            KEN <span className="font-medium">RUDNICK</span>
                          </h3>
                          <div className="flex items-center gap-4 my-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-accent/30 via-accent/50 to-transparent" />
                            <span className="text-gray-400 text-sm italic font-light">Visionary Leader</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-accent/30 via-accent/50 to-transparent" />
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">Pioneering strategic innovation and operational excellence in automotive manufacturing. Leading with unwavering vision, integrity, and commitment to transformative growth.</p>
                          <div className="flex flex-wrap gap-3">
                            <div className="px-6 py-2.5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-accent/30 transition-all duration-300 shadow-sm"><span className="text-sm text-gray-700 font-medium">Strategic Vision</span></div>
                            <div className="px-6 py-2.5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-accent/30 transition-all duration-300 shadow-sm"><span className="text-sm text-gray-700 font-medium">Innovation Leader</span></div>
                            <div className="px-6 py-2.5 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20 shadow-sm"><span className="text-sm text-accent font-semibold">Global Impact</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Directors */}
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {directors.map((director, index) => {
                  const [firstName, lastName] = director.name.split(" ");
                  return (
                    <StaggerItem key={index} className="h-full">
                      <div className="group relative h-full">
                        <div className="absolute -inset-2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-700 transform hover:-translate-y-4 h-full">
                          {/* Portrait */}
                          <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
                            <img src={director.image} alt={director.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent group-hover:from-primary/70 transition-all duration-700" />
                            <div className="absolute top-1 left-1.5">
                              <div className="px-4 py-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-white/60">
                                <span className="text-primary text-xs font-medium tracking-wide">{director.role}</span>
                              </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-[100px]" />
                          </div>
                          {/* Content */}
                          <div className="p-8 bg-gradient-to-br from-white to-gray-50/40">
                            <h4 className="font-serif text-2xl font-light text-primary mb-2 group-hover:text-accent transition-colors duration-500">
                              {firstName} <span className="font-medium">{lastName}</span>
                            </h4>
                            <div className="flex items-center gap-3 mb-5">
                              <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                              <span className="text-gray-400 text-xs italic">Director</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{director.description}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-accent rounded-full" style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                              <span>Leadership Team</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
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
                  <div className="text-left">
                    <p className="font-semibold">IATF 16949: Design &amp; Manufacturing</p>
                    <p className="text-sm text-gray-300">Bureau Veritas Certified since 2018</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
