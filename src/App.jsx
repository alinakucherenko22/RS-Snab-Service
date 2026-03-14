import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Portfolio />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
