import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, MessageSquareText, Images } from 'lucide-react'
import { ru, TWO_GIS_URL } from '../constants/content'

const iconMap = {
  1: Star,
  2: MessageSquareText,
  3: Images,
}

function TrustCard({ card, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[card.id] || Star

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
    >
      <div className="w-11 h-11 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-orange-400" />
      </div>
      <div className="text-3xl font-extrabold text-white mb-1">
        {card.value}
        {card.suffix && <span className="text-orange-400 ml-1">{card.suffix}</span>}
      </div>
      <p className="text-white font-semibold mb-1">{card.label}</p>
      <p className="text-gray-400 text-sm">{card.note}</p>
    </motion.div>
  )
}

export default function TrustSignals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-90px' })

  return (
    <section id="trust" className="bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {ru.trust.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{ru.trust.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ru.trust.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ru.trust.cards.map((card, index) => (
            <TrustCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={TWO_GIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            {ru.trust.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
