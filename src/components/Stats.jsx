import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ru } from '../constants/content'

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
        {stat.value}
        {stat.suffix && (
          <span className="text-orange-400 ml-1 text-3xl">{stat.suffix}</span>
        )}
      </div>
      <div className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="bg-slate-800 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {ru.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
