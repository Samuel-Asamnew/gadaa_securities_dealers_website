import Footer           from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import '../styles/pages.css'

export default function Services() {
  useDocumentTitle('Solutions — Gadaa Securities Dealer S.C')
  useScrollAnimation(['.reveal', '.reveal-left', '.reveal-right',
    '.svc-card', '.core-card', '.why-card'])

  return (
    <>
      <section className="page-header">
        <div className="page-header-bg"    />
        <div className="page-header-lines" />
        <div className="container">
          <div className="overline reveal">Our Solutions</div>
          <div className="page-header-rule" />
          <h1 className="reveal reveal-delay-1">
            Professional Access to<br />Ethiopian Capital Markets
          </h1>
          <p className="reveal reveal-delay-2">
            Instruments, execution, and account services — built for every type of investor.
          </p>
          <a href="#services" className="btn btn-gold reveal reveal-delay-3">Explore</a>
        </div>
      </section>

      {/* ── Financial Instruments ──────────────────────── */}
      <section id="services" className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">Instruments</span>
            <h2>What You Can Trade</h2>
            <p>Access two asset classes through Gadaa Securities on the Ethiopian Securities Exchange.</p>
          </div>
          <div className="svc-grid-2">
            {[
              {
                icon: 'fa-chart-line',
                title: 'Equity — Stocks &amp; Shares',
                body:  'Access domestic equity markets with competitive pricing and efficient settlement. Build a diversified portfolio across listed Ethiopian companies.',
              },
              {
                icon: 'fa-landmark',
                title: 'Bonds &amp; Fixed Income',
                body:  'Government bonds, corporate bonds, and municipal securities. Our risk analysis helps you build stable, income-generating portfolios.',
              },
            ].map(s => (
              <div className="svc-card reveal" key={s.title}>
                <div className="svc-icon"><i className={`fas ${s.icon}`} /></div>
                <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Services (dark) ────────────────────────── */}
      <section className="pg-section dark">
        <div className="container">
          <div className="section-title" style={{ marginBottom:48 }}>
            <span className="overline">Core Services</span>
            <h2 style={{ color:'var(--white)' }}>How We Serve You</h2>
          </div>
          <div className="core-grid-3">
            {[
              {
                icon: 'fa-exchange-alt',
                title: 'Trade Execution',
                body:  'Efficient and timely buy/sell order execution with best-price policies ensuring optimal pricing and minimal market impact.',
              },
              {
                icon: 'fa-briefcase',
                title: 'Proprietary Trading',
                body:  'Strategic company-capital trading to improve market liquidity while generating optimal returns and supporting ESX price depth.',
              },
              {
                icon: 'fa-user-cog',
                title: 'Account Opening &amp; Maintenance',
                body:  'Streamlined KYC onboarding and comprehensive lifecycle management for smooth daily trading operations.',
              },
            ].map(s => (
              <div className="core-card reveal" key={s.title}>
                <div className="icon"><i className={`fas ${s.icon}`} /></div>
                <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ──────────────────────────────────── */}
      <section className="pg-section alt">
        <div className="container">
          <div className="section-title">
            <span className="overline">Why Gadaa</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="why-grid-3">
            {[
              {
                icon: 'fa-rocket',
                title: 'Superior Execution',
                body:  'Best-execution policies ensuring optimal trade outcomes with minimal market impact and competitive pricing.',
              },
              {
                icon: 'fa-users',
                title: 'Client-Centric Service',
                body:  'Personalised services tailored to the specific needs of each client, from individual investors to large institutions.',
              },
              {
                icon: 'fa-shield-alt',
                title: 'Regulatory Compliance',
                body:  'Full regulatory compliance under ECMA and ESX rules, backed by a robust risk management framework.',
              },
            ].map(w => (
              <div className="why-card reveal" key={w.title}>
                <div className="why-icon-wrap"><i className={`fas ${w.icon}`} /></div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
