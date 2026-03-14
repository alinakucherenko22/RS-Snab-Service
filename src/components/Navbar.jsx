import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Menu, X, HardHat } from 'lucide-react'
import { ru } from '../constants/content'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: ru.nav.services },
    { href: '#portfolio', label: ru.nav.portfolio },
    { href: '#process', label: ru.nav.process },
    { href: '#contact', label: ru.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <HashLink to="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
              <HardHat className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              {ru.nav.logo}
            </span>
          </HashLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </HashLink>
            ))}
            <HashLink
              to="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              {ru.nav.cta}
            </HashLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-base font-medium py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </HashLink>
            ))}
            <HashLink
              to="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              {ru.nav.cta}
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  )
}
