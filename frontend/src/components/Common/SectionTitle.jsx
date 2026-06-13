import { motion } from 'framer-motion'

export function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`block h-1 w-16 bg-accent rounded-full mb-4 origin-left ${centered ? 'mx-auto' : ''}`}
      />
      {subtitle && <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}
