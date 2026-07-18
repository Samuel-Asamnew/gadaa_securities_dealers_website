import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import { vacancyData } from '../data/vacancyData.js'
import '../styles/pages.css'

export default function Vacancy() {
  useDocumentTitle('Careers & Vacancies — Gadaa Securities Dealer')
  useScrollAnimation(['.reveal', '.vacancy-card', '.vacancy-header-card'])

  return (
    <>
      {/* ── Page Header ──────────────────────────────────── */}
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="page-header-lines" />
        <div className="container">
          <span className="overline">Join Our Team</span>
          <h1>Careers & Vacancies</h1>
          <p>
            Explore career opportunities at Gadaa Securities Dealer S.C. and
            become part of a dynamic team shaping Ethiopia's capital markets.
          </p>
          <div className="page-header-rule" />
        </div>
      </section>

      {/* ── Vacancy Listing ──────────────────────────────── */}
      <section className="pg-section alt">
        <div className="container">
          {/* Header info card */}
          <div className="vacancy-header-card reveal">
            <div className="icon">
              <i className="fas fa-briefcase" />
            </div>
            <h2>Current Open Positions</h2>
            <p>
              We are always looking for talented professionals to join our team.
              Below are our current vacancies. To apply, please send your CV and
              cover letter to the specified email address.
            </p>
          </div>

          {/* Vacancy cards */}
          {vacancyData.length > 0 ? (
            <div className="vacancy-list">
              {vacancyData.map(v => (
                <div className="vacancy-card reveal" key={v.id}>
                  <div className="vacancy-info">
                    <h3>{v.title}</h3>
                    <div className="dept">{v.department}</div>
                    <p className="desc">{v.description}</p>
                  </div>

                  <div className="vacancy-meta">
                    <span className="meta-item">
                      <i className="fas fa-clock" />{v.type}
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-map-marker-alt" />{v.location}
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-calendar-times" />Deadline: {v.deadline}
                    </span>
                  </div>

                  <a
                    href={v.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-btn"
                  >
                    <i className="fas fa-paper-plane" /> Apply Now
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--slate)' }}>
              <i className="fas fa-users" style={{ fontSize: '3rem', color: 'var(--red)', marginBottom: 16, display: 'block' }} />
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', marginBottom: 8 }}>No Open Positions</h3>
              <p>There are no vacancies at the moment. Please check back later or follow us on social media for updates.</p>
            </div>
          )}

          {/* Spontaneous application note */}
          <div
            style={{
              marginTop: 48,
              padding: '28px 32px',
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              textAlign: 'center',
            }}
            className="reveal"
          >
            <i className="fas fa-envelope-open-text" style={{ fontSize: '2rem', color: 'var(--red)', marginBottom: 12, display: 'block' }} />
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem', marginBottom: 8, color: 'var(--ink)' }}>
              Don't See a Matching Role?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              We welcome speculative applications from qualified professionals.
              Send your CV and cover letter to{' '}
              <a href="mailto:hr@gadaacapital.com.et" style={{ color: 'var(--red)', fontWeight: 600 }}>
                hr@gadaacapital.com.et
              </a>{' '}
              and we'll keep your details on file for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-inner reveal">
            <div className="cta-rule" />
            <h2>Ready to Make an Impact?</h2>
            <p>
              Join a team committed to excellence, integrity, and the growth of
              Ethiopia's financial markets.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-outline-white">
                <i className="fas fa-envelope" /> Get in Touch
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