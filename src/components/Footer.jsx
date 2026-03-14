import { HardHat, MessageCircle, Phone } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { ru, WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants/content'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`

  const navLinks = [
    { href: '#trust', label: 'Рейтинг 2ГИС' },
    { href: '#services', label: ru.nav.services },
    { href: '#portfolio', label: ru.nav.portfolio },
    { href: '#promo', label: 'Акция открытия' },
    { href: '#process', label: ru.nav.process },
    { href: '#contact', label: ru.nav.contact },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">{ru.nav.logo}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{ru.footer.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              {ru.footer.navHeading}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <HashLink
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              {ru.footer.contactHeading}
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">{ru.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
