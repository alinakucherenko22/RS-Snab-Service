import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { ru, WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants/content'

const heroImage = import.meta.env.BASE_URL + 'c47600d1-caea-4d67-a7dd-66fa944f066f.jpg'

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`
  const phoneUrl = `tel:${PHONE_NUMBER}`
  const prefersReduced = useReducedMotion()

  const ease = [0.16, 1, 0.3, 1]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden"
    >
      {/* Warm ambient glow behind image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] h-[80vh] bg-orange-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] top-1/3 w-72 h-72 bg-amber-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">

        {/* ── Left: text ── */}
        <div className="relative z-10 lg:pr-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">{ru.hero.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4"
          >
            {ru.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="text-gray-400 text-lg mb-10 max-w-xl"
          >
            {ru.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
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

        {/* ── Right: volumetric photo ── */}
        {/* The container has overflow-visible so the image can bleed left into the text column */}
        <div className="relative flex items-center justify-center lg:justify-end">

          {/* Glow plate behind image — creates depth illusion */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl scale-95"
            style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(249,115,22,0.18) 0%, rgba(15,23,42,0) 70%)' }}
          />

          {/* 3-D card: perspective tilt + deep shadow */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 80, rotateY: -20 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
            /* Negative left margin bleeds image into the text column */
            className="relative w-full max-w-lg lg:max-w-none lg:-ml-16 xl:-ml-24"
          >
            <motion.div
              whileHover={prefersReduced ? {} : { rotateY: -3, rotateX: 1, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1400px) rotateY(-6deg) rotateX(2deg)',
                boxShadow:
                  '0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden"
            >
              <img
                src={heroImage}
                alt="Пример отделки помещения — RS Snab Service"
                className="w-full h-[380px] sm:h-[480px] lg:h-[580px] object-cover block"
                draggable={false}
              />
              {/* Subtle gradient overlay, darker on the left edge where it bleeds into text */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.7, ease }}
              className="absolute -left-5 top-1/3 -translate-y-1/2 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-2xl px-4 py-3 shadow-2xl"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            >
              <div className="text-2xl font-extrabold text-white leading-none">4.6<span className="text-orange-400 text-lg ml-0.5">★</span></div>
              <div className="text-gray-400 text-xs mt-0.5">138 отзывов · 2ГИС</div>
            </motion.div>

            {/* Floating projects badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.85, ease }}
              className="absolute -left-5 bottom-12 bg-orange-500 rounded-2xl px-4 py-3 shadow-2xl"
              style={{ boxShadow: '0 20px 40px rgba(249,115,22,0.35)' }}
            >
              <div className="text-2xl font-extrabold text-white leading-none">150+</div>
              <div className="text-orange-100 text-xs mt-0.5">реализованных проектов</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-orange-400" />
        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" />
      </div>
    </section>
  )
}
