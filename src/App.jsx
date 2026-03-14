import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import TrustSignals from './components/TrustSignals'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import PromoBanner from './components/PromoBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <TrustSignals />
          <Services />
          <Portfolio />
          <Process />
          <PromoBanner />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </HashRouter>
  )
}
