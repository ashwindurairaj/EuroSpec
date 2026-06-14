import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { img } from '../assets/images'

/*
  Scroll-driven horizontal showcase of the real manufacturing process.
  Pinned (sticky) while scrolling: the image panels travel left as you scroll
  DOWN and back right as you scroll UP, with a red accent line sweeping across.
  All images come from /assets/images — swap any file to update.
*/
const panels = [
  { src: img.design,        step: '01', title: 'Design & Engineering', text: 'CAD/CAE, forming simulation and prototyping.' },
  { src: img.tooling,       step: '02', title: 'Tooling',              text: 'Progressive, transfer and line dies up to 180".' },
  { src: img.press,         step: '03', title: 'Stamping & Press',     text: '300–1500 ton mechanical presses.' },
  { src: img.welding,       step: '04', title: 'Welding & Assembly',   text: 'Robotic MIG, projection and spot welding.' },
  { src: img.quality,       step: '05', title: 'Quality & Shipping',   text: 'IATF 16949 inspection, global delivery.' },
]

export function ScrollShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })

  const x = useTransform(p, [0, 1], ['1vw', '-80vw'])
  const redLeft = useTransform(p, [0, 1], ['-5%', '105%'])
  const fill = useTransform(p, [0, 1], ['0%', '100%'])
  const headOpacity = useTransform(p, [0, 0.12], [0, 1])

  return (
    <section ref={ref} className="relative bg-primary" style={{ height: '320vh' }} data-testid="scroll-showcase-section">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* sweeping red accent line */}
        <motion.div style={{ left: redLeft }} className="pointer-events-none absolute top-0 bottom-0 w-[3px] bg-accent/70 shadow-[0_0_40px_8px_rgba(230,57,70,0.5)]" />

        {/* heading */}
        <motion.div style={{ opacity: headOpacity }} className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">From Concept to Component</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-2xl">Our process, in motion.</h2>
          <p className="text-gray-300 mt-3 max-w-xl">Scroll to move through every stage of precision automotive manufacturing.</p>
        </motion.div>

        {/* horizontal panel strip */}
        <motion.div style={{ x }} className="flex gap-6 px-[6vw] will-change-transform">
          {panels.map((panel) => (
            <div key={panel.step} className="relative shrink-0 w-[78vw] md:w-[46vw] lg:w-[34vw] h-[56vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              <img src={panel.src} alt={panel.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute top-5 left-5 font-mono text-sm text-accent tracking-widest">{panel.step}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">{panel.title}</h3>
                <p className="text-gray-200 text-sm">{panel.text}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* progress bar */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 mt-8">
          <div className="h-px bg-white/15 relative overflow-hidden rounded-full">
            <motion.div style={{ width: fill }} className="absolute inset-y-0 left-0 bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
