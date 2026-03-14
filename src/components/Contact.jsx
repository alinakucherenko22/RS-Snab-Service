import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Send,
  MessageCircle,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Instagram,
  Globe,
} from 'lucide-react'
import {
  ru,
  WHATSAPP_NUMBER,
  PHONE_NUMBER,
  FORMSPREE_ENDPOINT,
  INSTAGRAM_URL,
  COMPANY_SITE_URL,
} from '../constants/content'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-slate-950 py-20 sm:py-28">
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
            {ru.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {ru.contact.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{ru.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">{ru.contact.successTitle}</h3>
                <p className="text-gray-400">{ru.contact.successMsg}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-orange-400 hover:text-orange-300 text-sm font-semibold"
                >
                  {ru.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={ru.contact.namePlaceholder}
                    required
                    className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 outline-none transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={ru.contact.phonePlaceholder}
                    required
                    className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 outline-none transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={ru.contact.messagePlaceholder}
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 text-white placeholder-gray-500 rounded-xl px-4 py-3.5 outline-none transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {ru.contact.errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/60 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-orange-500/25"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {ru.contact.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {ru.contact.submitBtn}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* WhatsApp block */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">{ru.contact.orWhatsapp}</h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                {ru.contact.whatsappBtn}
              </a>
            </div>

            {/* Phone block */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{ru.contact.phone}</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-white font-semibold hover:text-orange-400 transition-colors duration-200"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* Address block */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{ru.contact.address}</p>
                <p className="text-white font-semibold">{ru.contact.addressValue}</p>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl px-4 py-3 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-medium">{ru.contact.instagram}</span>
              </a>
              <a
                href={COMPANY_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl px-4 py-3 transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{ru.contact.website}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
