import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Faq from './components/FAQ/FAQ'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'
import Events from './components/Events/Events'
import Testimonials from './components/Testimonials/Testimonials'
import Register from './components/Session/Register'
import Login from './components/Session/Login'

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Hero 
        onOpenRegister={() => setIsRegisterOpen(true)} 
        onOpenLogin={() => setIsLoginOpen(true)}
      />
      <Products />
      <AboutUs />
      <Events />
      <Testimonials />
      <ContactUs />
      <Faq />
      <Footer />

      {/* Modales */}
      <Register 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
      <Login 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
    </>
  )
}

export default App