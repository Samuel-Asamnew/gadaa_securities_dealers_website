import { Link }         from 'react-router-dom'
import Footer           from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import '../styles/pages.css'

export default function NotFound() {
  useDocumentTitle('Coming Soon — Gadaa Securities Dealer S.C')
  return (
    <>
      <section className="page-header">
        <div className="page-header-bg"    />
        <div className="page-header-lines" />
        <div className="container">
          <div className="overline">Coming Soon</div>
          <div className="page-header-rule" />
          <h1>This Page Is<br />Being Updated.</h1>
          <p>We're working on this section. Please check back shortly.</p>
          <Link to="/" className="btn btn-gold">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
