import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { ru, WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants/content'

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`
  const phoneUrl = `tel:${PHONE_NUMBER}`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(249,115,22,0.3) 40px,
              rgba(249,115,22,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Orange accent circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">{ru.hero.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            {ru.hero.title.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-orange-500">
              {ru.hero.title.split(' ').slice(2, 4).join(' ')}
            </span>{' '}
            {ru.hero.title.split(' ').slice(4).join(' ')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4"
          >
            {ru.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg mb-10 max-w-xl"
          >
            {ru.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              <MessageCircle className="w-5 h-5" />
              {ru.hero.ctaWhatsapp}
            </a>
            <a
              href={phoneUrl}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              {ru.hero.ctaCall}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-orange-400" />
        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" />
      </div>
    </section>
  )
}
