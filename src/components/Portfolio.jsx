import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Maximize } from 'lucide-react'
import { ru } from '../constants/content'

const categoryColors = {
  Офис: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Жилой: 'bg-green-500/20 text-green-300 border-green-500/30',
}

// Placeholder gradient backgrounds for portfolio cards
const cardGradients = [
  'from-blue-900/60 to-slate-800/80',
  'from-amber-900/60 to-slate-800/80',
  'from-purple-900/60 to-slate-800/80',
  'from-teal-900/60 to-slate-800/80',
  'from-rose-900/60 to-slate-800/80',
  'from-indigo-900/60 to-slate-800/80',
]

function PortfolioCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-orange-500/40 transition-all duration-300 cursor-pointer"
    >
      {/* Decorative background */}
      <div
        className={`h-48 bg-gradient-to-br ${cardGradients[index]} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300" />
        <div className="relative text-center p-4">
          <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-2">
            <Maximize className="w-8 h-8 text-white/60" />
          </div>
          <p className="text-white/50 text-sm">{item.area}</p>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
              categoryColors[item.category] || categoryColors['Офис']
            }`}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Card info */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <MapPin className="w-3 h-3" />
          <span>{ru.portfolio.location}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="bg-slate-950 py-20 sm:py-28">
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
            {ru.portfolio.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {ru.portfolio.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ru.portfolio.subtitle}</p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ru.portfolio.items.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
