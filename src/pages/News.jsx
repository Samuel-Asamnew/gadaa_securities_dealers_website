import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import { newsData } from '../data/newsData.js'
import '../styles/pages.css'

export default function News() {
  useDocumentTitle('News & Announcements — Gadaa Securities Dealer')
  useScrollAnimation(['.reveal', '.news-page-card'])

  return (
    <>
      {/* ── Page Header ──────────────────────────────────── */}
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="page-header-lines" />
        <div className="container">
          <span className="overline">Latest Updates</span>
          <h1>News & Announcements</h1>
          <p>
            Stay informed with the latest news, press releases, and corporate
            updates from Gadaa Securities Dealer S.C.
          </p>
          <div className="page-header-rule" />
        </div>
      </section>

      {/* ── News Grid ────────────────────────────────────── */}
      <section className="pg-section alt">
        <div className="container">
          <div className="news-page-grid">
            {newsData.length > 0 ? (
              newsData.map(n => (
                <article className="news-page-card reveal" key={n.id}>
                  <div className="news-page-img">
                    <img src={n.image} alt={n.title} loading="lazy" />
                  </div>
                  <div className="news-page-body">
                    {n.badge && <span className="news-page-badge">{n.badge}</span>}
                    <h3>{n.title}</h3>
                    <p>{n.excerpt}</p>
                    <div className="news-page-meta">
                      <span><i className="far fa-calendar-alt" />{n.date}</span>
                      <span><i className="far fa-clock" />{n.readTime}</span>
                      <span><i className="far fa-folder" />{n.category}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--slate)' }}>
                <i className="fas fa-newspaper" style={{ fontSize: '3rem', color: 'var(--red)', marginBottom: 16, display: 'block' }} />
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', marginBottom: 8 }}>No News Yet</h3>
                <p>Check back soon for the latest updates and announcements.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-inner reveal">
            <div className="cta-rule" />
            <h2>Want to Stay Connected?</h2>
            <p>
              Follow us on social media for real-time updates and market insights.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-outline-white">
                <i className="fas fa-envelope" /> Contact Us
              </Link>
              <Link to="/" className="btn btn-white">
                <i className="fas fa-home" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}