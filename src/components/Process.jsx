import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ru } from '../constants/content'

function StepCard({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-start"
    >
      {/* Step number */}
      <div className="text-6xl font-extrabold text-orange-500/20 leading-none mb-4 select-none">
        {step.number}
      </div>

      {/* Connector line (hidden on last item) */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-orange-500/40 to-transparent -translate-x-1/2 translate-x-4" />
      )}

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full">
        <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="bg-slate-900 py-20 sm:py-28">
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
            {ru.process.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {ru.process.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ru.process.subtitle}</p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ru.process.steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
