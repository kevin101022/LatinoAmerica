import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Secciones
import Hero from './sections/Hero'
import WhatIsLatam from './sections/WhatIsLatam'
import ColorsSection from './sections/Colors'
import GaleanoSection from './sections/Galeano'
import InteractiveMap from './sections/InteractiveMap'
import Timeline from './sections/Timeline'
import Education from './sections/Education'
import Songs from './sections/Songs'
import StoryAnalysis from './sections/StoryAnalysis'
import Questions from './sections/Questions'
import Team from './sections/Team'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero"><Hero /></div>
              <div id="whatislatam"><WhatIsLatam /></div>
              <div id="colors"><ColorsSection /></div>
              <div id="galeano"><GaleanoSection /></div>
              <div id="interactive-map"><InteractiveMap /></div>
              <div id="timeline"><Timeline /></div>
              <div id="education"><Education /></div>
              <div id="songs"><Songs /></div>
              <div id="story-analysis"><StoryAnalysis /></div>
              <div id="questions"><Questions /></div>
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
