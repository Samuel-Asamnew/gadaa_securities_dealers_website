import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import Leadership from './pages/Leadership.jsx'
import ContactUs from './pages/ContactUs.jsx'
import News from './pages/News.jsx'
import Vacancy from './pages/Vacancy.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
