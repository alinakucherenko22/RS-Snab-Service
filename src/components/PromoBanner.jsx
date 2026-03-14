import { motion } from 'framer-motion'
import { Gift, CalendarClock, MessageCircle } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { ru, WHATSAPP_NUMBER } from '../constants/content'

export default function PromoBanner() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`

  return (
    <section id="promo" className="bg-slate-900 py-14 sm:py-18 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-slate-800 to-slate-900 p-7 sm:p-10"
        >
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-300 text-xs font-semibold uppercase tracking-wide mb-5">
              <CalendarClock className="w-4 h-4" />
              {ru.promo.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{ru.promo.title}</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">{ru.promo.subtitle}</p>

            <div className="flex flex-wrap gap-2 mb-7">
              {ru.promo.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-slate-700/70 border border-slate-600 text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <HashLink
                to="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <Gift className="w-4 h-4" />
                {ru.promo.ctaPrimary}
              </HashLink>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                {ru.promo.ctaSecondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
