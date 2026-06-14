import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/*
  Scroll-driven "exploded view" of a progressive stamping die-set.
  - Pinned (sticky) while the user scrolls through a tall wrapper.
  - Plates separate (explode) on scroll-down and reassemble on scroll-up.
  - A red accent band sweeps left -> right with scroll.
  Swap the styled "plate" divs for real PNG/SVG layers later if desired.
*/

// assembledY = tight stack | explodedY = spread apart
const plates = [
  { id: 'p0', label: 'Top Die Shoe',      assembledY: -90, explodedY: -270, w: 360, h: 46, rot: -5, grad: 'from-slate-200 via-slate-300 to-slate-400' },
  { id: 'p1', label: 'Punch Holder',      assembledY: -45, explodedY: -135, w: 312, h: 40, rot: -2.5, grad: 'from-slate-300 via-slate-400 to-slate-500' },
  { id: 'p2', label: 'Stripper / Blank',  assembledY: 0,   explodedY: 0,    w: 380, h: 50, rot: 0, grad: 'from-slate-100 via-slate-200 to-slate-300', center: true },
  { id: 'p3', label: 'Die Plate',         assembledY: 45,  explodedY: 135,  w: 312, h: 40, rot: 2.5, grad: 'from-slate-300 via-slate-400 to-slate-500' },
  { id: 'p4', label: 'Bottom Die Shoe',   assembledY: 90,  explodedY: 270,  w: 360, h: 46, rot: 5, grad: 'from-slate-300 via-slate-400 to-slate-600' },
]

function Plate({ progress, plate, index }) {
  const y = useTransform(progress, [0.05, 0.85], [plate.assembledY, plate.explodedY])
  const rotateZ = useTransform(progress, [0.05, 0.85], [0, plate.rot])
  const labelOpacity = useTransform(progress, [0.35, 0.7], [0, 1])
  const labelX = useTransform(progress, [0.35, 0.7], [-12, 0])

  return (
    <motion.div style={{ y, rotateZ }} className="absolute inset-0 flex items-center justify-center will-change-transform">
      <div className="relative" style={{ width: plate.w }}>
        <div className={`rounded-md bg-gradient-to-b ${plate.grad} shadow-[0_12px_30px_-8px_rgba(15,23,42,0.5)] border border-white/60 ring-1 ring-slate-900/5 flex items-center justify-between px-5`} style={{ height: plate.h }}>
          {/* bolt holes */}
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900/15 shadow-inner" />
          {plate.center ? (
            <span className="h-3 w-24 rounded-sm bg-accent shadow-sm" title="stamped part" />
          ) : (
            <span className="h-1.5 w-16 rounded-full bg-slate-900/10" />
          )}
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900/15 shadow-inner" />
        </div>
        {/* leader line + label */}
        <motion.div style={{ opacity: labelOpacity, x: labelX }} className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden md:flex items-center gap-2 whitespace-nowrap">
          <span className="h-px w-10 bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">{plate.label}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ExplodedTool() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  const redX = useTransform(progress, [0, 1], ['-40%', '40%'])
  const redOpacity = useTransform(progress, [0, 0.25, 0.85, 1], [0, 0.9, 0.9, 0.2])
  const headOpacity = useTransform(progress, [0, 0.18], [0, 1])
  const headY = useTransform(progress, [0, 0.18], [24, 0])
  const stateLabel = useTransform(progress, [0, 0.5, 1], ['ASSEMBLED', 'DISASSEMBLING', 'EXPLODED VIEW'])
  const fillWidth = useTransform(progress, [0.05, 0.85], ['0%', '100%'])

  return (
    <section ref={ref} className="relative bg-slate-50" style={{ height: '300vh' }} data-testid="exploded-tool-section">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* sweeping red accent band */}
        <motion.div
          style={{ x: redX, opacity: redOpacity }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-44 -rotate-6 bg-gradient-to-r from-transparent via-accent/25 to-transparent blur-2xl"
        />
        <motion.div
          style={{ x: redX }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-1 -rotate-6 bg-accent/40"
        />

        {/* heading */}
        <motion.div style={{ opacity: headOpacity, y: headY }} className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-16 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">Engineered in Layers</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary max-w-2xl mx-auto md:mx-0">
            Every die, broken down to precision.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto md:mx-0">Scroll to disassemble a progressive stamping die — and back up to reassemble it.</p>
        </motion.div>

        {/* exploded stack */}
        <div className="relative flex-1" style={{ perspective: 1400 }}>
          <div className="absolute inset-0">
            {plates.map((p, i) => (
              <Plate key={p.id} progress={progress} plate={p} index={i} />
            ))}
          </div>
        </div>

        {/* progress / state readout */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pb-10">
          <div className="flex items-center gap-4">
            <motion.span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/70">{stateLabel}</motion.span>
            <div className="flex-1 h-px bg-slate-300/70 relative overflow-hidden rounded-full">
              <motion.div style={{ width: fillWidth }} className="absolute inset-y-0 left-0 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
