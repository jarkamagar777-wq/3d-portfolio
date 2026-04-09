import React from 'react'
import Navbar from './seections/Navbar'
import Hero from './seections/Hero'
import About from './seections/About'
import Experience from './seections/Experience'
import Projects from './seections/Projects'
import Clients from './seections/Clients'
import Contact from './seections/Contact'
import Footer from './seections/Footer'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Clients />
      
      <Contact />
      <Footer />
    </main>
  )
}

export default App