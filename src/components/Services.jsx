import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Layers, Wrench, ArrowRight } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { ru } from '../constants/content'

const iconMap = {
  Building2,
  Layers,
  Wrench,
}

function ServiceCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[item.icon] || Building2

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-orange-400" />
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.description}</p>
      <HashLink
        to="#contact"
        className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors duration-200"
      >
        {ru.services.learnMore}
        <ArrowRight className="w-4 h-4" />
      </HashLink>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-slate-900 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {ru.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {ru.services.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ru.services.subtitle}</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ru.services.items.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
