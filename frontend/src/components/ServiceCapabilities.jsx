import { motion } from 'framer-motion'
import { SectionTitle } from './Common/SectionTitle'
import { img } from '../assets/images'

// import experienceImg from '../assets/images/'
// import pressImg from '../assets/images/service-press.jpg'
// import qualityImg from '../assets/images/service-quality.jpg'
// import facilityImg from '../assets/images/service-facility.jpg'

const highlights = [
  
  {
    number: '40+',
    title: 'Years of Experience',
    description:
      'Serving the automotive industry with precision tooling and manufacturing solutions since 1985.',
    image: img.capone,
  },
  {
    number: '1500',
    subtitle: 'TON',
    title: 'Press Capacity',
    description:
      'Mechanical press lines ranging from 300 to 1500 tons supporting high-volume automotive production.',
    image: img.press,
  },
  {
    number: 'IATF',
    subtitle: '16949',
    title: 'Certified Quality Systems',
    description:
      'Automotive quality standards supported through robust inspection, validation and process control.',
    image: img.capthree,
  },
  {
    number: 'GLOBAL',
    title: 'Automotive Partnerships',
    description:
      'Supporting OEM and Tier-1 customers through engineering, tooling and manufacturing excellence.',
    image: img.capfour,
  },
]
console.log(img.capone)
console.log(img.capthree)
console.log(img.capfour)

export function ServiceHighlights() {
  return (
    
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <SectionTitle
          title="Engineering Excellence"
          subtitle="Built on precision, experience and manufacturing expertise"
        />

        <div className="space-y-32">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-16 left-0 text-[100px] md:text-[140px] font-bold text-primary/5 leading-none select-none">
                  {item.number}
                </div>

                <div className="relative z-10">
                  {item.subtitle && (
                    <p className="text-accent font-semibold tracking-[0.3em] mb-2">
                      {item.subtitle}
                    </p>
                  )}

                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}