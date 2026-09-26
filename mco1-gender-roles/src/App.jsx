import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import GenderRoles from './components/GenderRoles.jsx'
import HistoricalTimeline from './components/HistoricalTimeline.jsx'
import ContemporaryRoles from './components/ContemporaryRoles.jsx'
import GenderIssues from './components/GenderIssues.jsx'
import AnalysisReflection from './components/AnalysisReflection.jsx'
import MultimediaGallery from './components/MultimediaGallery.jsx'
import Conclusion from './components/Conclusion.jsx'
import References from './components/References.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <GenderRoles />
        <HistoricalTimeline />
        <ContemporaryRoles />
        <GenderIssues />
        <AnalysisReflection />
        <MultimediaGallery />
        <Conclusion />
        <References />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
