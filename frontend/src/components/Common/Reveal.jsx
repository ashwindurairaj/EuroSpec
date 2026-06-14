import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const directions = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
}

// Scroll-triggered reveal wrapper used across all pages
export function Reveal({ children, delay = 0, direction = 'up', duration = 0.7, className, once = true, amount = 0.2 }) {
  const offset = directions[direction] || directions.up
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

// Staggered container — children should be <Reveal> or motion items
export function StaggerGroup({ children, className, delayChildren = 0.1, stagger = 0.12 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 32 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  )
}
