import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MousePointer2 } from 'lucide-react'

// Signature scroll-driven "exploded view" of a progressive stamping die.
// Scroll down -> the tool separates into its component plates.
// Scroll up  -> the plates reassemble back into one tool.
export function ExplodedTool() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const tilt = useTransform(scrollYProgress, [0, 1], [12, 19])
  const postY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const topY = useTransform(scrollYProgress, [0, 1], [0, -205])
  const punchY = useTransform(scrollYProgress, [0, 1], [0, -95])
  const dieY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const baseY = useTransform(scrollYProgress, [0, 1], [0, 210])
  const labelOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} data-testid="exploded-tool-section" className="relative h-[260vh] bg-primary">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '46px 46px' }}
        />
        <div className="absolute top-12 left-0 right-0 text-center px-4 z-10">
          <p className="text-accent font-medium tracking-[0.25em] uppercase text-xs mb-3">Precision Tooling</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">Anatomy of a Progressive Die</h2>
          <p className="text-primary-200 mt-3 text-sm md:text-base">Scroll to disassemble the tool — every layer engineered in-house.</p>
        </div>

        <motion.div
          style={{ rotateX: tilt, transformPerspective: 1100 }}
          className="relative w-full max-w-[560px] px-6"
        >
          <svg viewBox="0 0 600 640" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e8edf3" />
                <stop offset="0.5" stopColor="#aab6c6" />
                <stop offset="1" stopColor="#6b7a90" />
              </linearGradient>
              <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3a4d72" />
                <stop offset="1" stopColor="#202E4A" />
              </linearGradient>
              <linearGradient id="accentG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ff5a67" />
                <stop offset="1" stopColor="#E63946" />
              </linearGradient>
            </defs>

            {/* Guide posts (move up & out first) */}
            <motion.g style={{ y: postY }}>
              <rect x="158" y="250" width="15" height="250" rx="7" fill="url(#steel)" stroke="#33405a" strokeWidth="1" />
              <rect x="427" y="250" width="15" height="250" rx="7" fill="url(#steel)" stroke="#33405a" strokeWidth="1" />
              <circle cx="165.5" cy="252" r="9" fill="#cfd8e3" stroke="#33405a" />
              <circle cx="434.5" cy="252" r="9" fill="#cfd8e3" stroke="#33405a" />
            </motion.g>

            {/* Upper shoe / top plate */}
            <motion.g style={{ y: topY }}>
              <rect x="135" y="300" width="330" height="48" rx="9" fill="url(#blue)" stroke="#11203b" strokeWidth="1.5" />
              <rect x="135" y="300" width="330" height="9" rx="9" fill="#ffffff" opacity="0.12" />
              <motion.text x="486" y="330" fill="#ffffff" fontSize="15" fontFamily="Inter, sans-serif" style={{ opacity: labelOpacity }}>Upper Shoe</motion.text>
            </motion.g>

            {/* Punch holder + punches */}
            <motion.g style={{ y: punchY }}>
              <rect x="165" y="356" width="270" height="34" rx="7" fill="url(#steel)" stroke="#33405a" strokeWidth="1.5" />
              <rect x="205" y="390" width="18" height="34" rx="3" fill="#8b97a8" stroke="#33405a" />
              <rect x="291" y="390" width="18" height="42" rx="3" fill="#8b97a8" stroke="#33405a" />
              <rect x="377" y="390" width="18" height="34" rx="3" fill="#8b97a8" stroke="#33405a" />
              <motion.text x="456" y="378" fill="#ffffff" fontSize="15" fontFamily="Inter, sans-serif" style={{ opacity: labelOpacity }}>Punch Plate</motion.text>
            </motion.g>

            {/* Metal blank / strip — the workpiece, stays centred */}
            <g>
              <rect x="120" y="446" width="360" height="14" rx="3" fill="url(#accentG)" stroke="#b51f2c" strokeWidth="1" />
              <circle cx="223" cy="453" r="4" fill="#7a1620" />
              <circle cx="300" cy="453" r="4" fill="#7a1620" />
              <circle cx="386" cy="453" r="4" fill="#7a1620" />
              <motion.text x="120" y="436" fill="#ff8089" fontSize="15" fontFamily="Inter, sans-serif" fontWeight="600" style={{ opacity: labelOpacity }}>Metal Strip</motion.text>
            </g>

            {/* Die plate with cavities */}
            <motion.g style={{ y: dieY }}>
              <rect x="155" y="470" width="290" height="40" rx="8" fill="url(#steel)" stroke="#33405a" strokeWidth="1.5" />
              <rect x="205" y="482" width="18" height="16" rx="2" fill="#2b3242" />
              <rect x="291" y="482" width="18" height="16" rx="2" fill="#2b3242" />
              <rect x="377" y="482" width="18" height="16" rx="2" fill="#2b3242" />
              <motion.text x="456" y="496" fill="#ffffff" fontSize="15" fontFamily="Inter, sans-serif" style={{ opacity: labelOpacity }}>Die Plate</motion.text>
            </motion.g>

            {/* Lower shoe / base */}
            <motion.g style={{ y: baseY }}>
              <rect x="130" y="516" width="340" height="52" rx="9" fill="url(#blue)" stroke="#11203b" strokeWidth="1.5" />
              <rect x="130" y="516" width="340" height="9" rx="9" fill="#ffffff" opacity="0.12" />
              <motion.text x="491" y="548" fill="#ffffff" fontSize="15" fontFamily="Inter, sans-serif" style={{ opacity: labelOpacity }}>Lower Shoe</motion.text>
            </motion.g>
          </svg>
        </motion.div>

        {/* scroll hint */}
        <motion.div style={{ opacity: hintOpacity }} className="absolute bottom-10 flex items-center gap-2 text-primary-100 text-sm">
          <MousePointer2 className="w-4 h-4 animate-bounce" />
          <span>Scroll to explode</span>
        </motion.div>

        {/* progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div className="h-full bg-accent" style={{ width: progressWidth }} />
        </div>
      </div>
    </section>
  )
}
