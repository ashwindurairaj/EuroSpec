import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionTitle } from './Common/SectionTitle'

/*
  About page — "Our Journey" vertical timeline with a growing center line
  and milestone cards that animate in on scroll. Simple, clean animation.
*/
const milestones = [
  { year: '1985', title: 'Founded', text: 'Eurospec Tooling established in Newmarket, Ontario.' },
  { year: '1995', title: 'Expansion', text: 'Plant 2 opens — adding 55,000 sq ft of capacity.' },
  { year: '2005', title: 'Heavy Press Shop', text: 'Mechanical presses up to 1500 tons commissioned.' },
  { year: '2012', title: 'Automation', text: 'Robotic MIG welding and automated assembly lines.' },
  { year: '2018', title: 'IATF 16949', text: 'Certified by Bureau Veritas for design & manufacturing.' },
  { year: 'Today', title: 'Global Supplier', text: '250 employees producing 60M+ components every year.' },
]

export function AboutTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="py-24 bg-slate-50" data-testid="about-timeline-section">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle title="Our Journey" subtitle="Four decades of building precision, one milestone at a time" />
        <div ref={ref} className="relative mt-8">
          {/* center line (track) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />
          {/* center line (animated fill) */}
          <motion.div style={{ scaleY: lineScale }} className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent origin-top" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const leftSide = i % 2 === 0
              return (
                <div key={m.year} className="relative md:grid md:grid-cols-2 md:gap-8 items-center" data-testid={`milestone-${i}`}>
                  {/* node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.4, ease: 'backOut' }}
                      className="w-4 h-4 rounded-full bg-accent ring-4 ring-slate-50 shadow"
                    />
                  </div>

                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, x: leftSide ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`ml-16 md:ml-0 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-100 ${leftSide ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}
                  >
                    <span className="font-serif text-3xl font-bold text-accent">{m.year}</span>
                    <h3 className="font-serif text-xl font-bold text-primary mt-1 mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm">{m.text}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
