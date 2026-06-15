import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from './Common/SectionTitle'
import { img } from '../assets/images'

/*
  Services page — "Equipment & Capabilities" sticky-scroll deep dive.
  A sticky image panel (left) crossfades to the capability that is active as
  the user scrolls through the chapters (right). Distinct from the Home
  horizontal showcase. Light theme.
*/
const caps = [
  { title: 'Stamping & Press', spec: '300 – 1500 Tons', text: 'A full line of mechanical presses runs HSLA and Dual Phase steels with automated coil feed and transfer automation.', image: img.press },
  { title: 'Tooling & Dies', spec: 'Up to 180 inches', text: 'Progressive, transfer and line dies engineered, built and tried out in-house — 60,000 lb lifting capacity.', image: img.tooling },
  { title: 'Materials Expertise', spec: 'Up to 1000 MPa', text: 'Decades of experience forming HSLA (340–550 MPa) and Dual Phase steels from 1mm to 8mm thickness.', image: img.machining },
  { title: 'Welding & Assembly', spec: 'Robotic MIG · Spot', text: 'Fully automated assemblies with projection, spot and robotic MIG welding, riveting and staking.', image: img.welding },
  { title: 'Quality Systems', spec: 'IATF 16949', text: 'Certified design and manufacturing quality with full in-process inspection and global shipping.', image: img.quality },
]

export function ServiceCapabilities() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-white" data-testid="service-capabilities-section">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Equipment & Capabilities" subtitle="Scroll through the backbone of our manufacturing operation" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* sticky image */}
          <div className="hidden lg:block">
            <div className="sticky top-28 h-[68vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={caps[active].image}
                  alt={caps[active].title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.p key={`spec-${active}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-accent text-sm tracking-widest mb-1">{caps[active].spec}</motion.p>
                <motion.h3 key={`title-${active}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="font-serif text-3xl font-bold text-white">{caps[active].title}</motion.h3>
              </div>
            </div>
          </div>

          {/* chapters */}
          <div className="space-y-10 lg:space-y-24 lg:py-16">
            {caps.map((c, i) => (
              <motion.div
                key={i}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: '-45% 0px -45% 0px' }}
                data-testid={`capability-chapter-${i}`}
                className={`border-l-2 pl-6 transition-all duration-300 ${active === i ? 'border-accent' : 'border-slate-200'}`}
              >
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                  <span className={`font-mono text-sm tracking-widest ${active === i ? 'text-accent' : 'text-slate-400'}`}>0{i + 1}</span>
                  <h3 className={`font-serif text-2xl md:text-3xl font-bold mt-2 mb-2 transition-colors ${active === i ? 'text-primary' : 'text-slate-500'}`}>{c.title}</h3>
                  <p className="text-accent font-semibold mb-3">{c.spec}</p>
                  <p className="text-gray-500 max-w-md">{c.text}</p>
                  {/* mobile image */}
                  <img src={c.image} alt={c.title} className="lg:hidden mt-5 w-full h-56 object-cover rounded-xl shadow-lg" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
