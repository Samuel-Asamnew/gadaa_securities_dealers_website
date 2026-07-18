import { Link } from 'react-router-dom'
import Footer           from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import { newsData }     from '../data/newsData.js'
import '../styles/home.css'

const values = [
  { icon: 'fa-book-open',           label: 'Wisdom',         desc: 'Decisions grounded in deep market expertise.' },
  { icon: 'fa-hand-holding-heart',  label: 'Empathy',        desc: 'Client-first thinking at every touchpoint.' },
  { icon: 'fa-handshake',           label: 'Commitment',     desc: 'Delivering on every promise, every time.' },
  { icon: 'fa-scale-balanced',      label: 'Accountability', desc: 'Transparent, measurable outcomes always.' },
  { icon: 'fa-users',               label: 'Respect',        desc: 'Every stakeholder treated with dignity.' },
  { icon: 'fa-trophy',              label: 'Excellence',     desc: 'Raising the standard in every trade.' },
]

const solutions = [
  {
    icon: 'fa-exchange-alt',
    tag: 'Core',
    title: 'Trade Execution Services',
    body: 'Efficient buy and sell order execution with best-price policies ensuring optimal pricing and minimal market impact for retail and institutional clients.',
    featured: true,
  },
  {
    icon: 'fa-briefcase',
    tag: 'Core',
    title: 'Proprietary Trading',
    body: 'Company-capital-driven trading that improves market liquidity while generating optimal returns and supporting ESX price stability.',
    featured: true,
  },
  {
    icon: 'fa-user-cog',
    tag: 'Operational',
    title: 'Account Services',
    body: 'Streamlined KYC onboarding and full lifecycle account management for smooth daily trading operations.',
    featured: false,
  },
  {
    icon: 'fa-landmark',
    tag: 'ESX Member',
    title: 'Regulated Market Access',
    body: 'Direct, official access to the Ethiopian Securities Exchange as a licensed Trading Member.',
    featured: false,
  },
  {
    icon: 'fa-chart-line',
    tag: 'Instruments',
    title: 'Equity — Stocks',
    body: 'Access domestic equity markets with competitive pricing and efficient settlement.',
    featured: false,
  },
  {
    icon: 'fa-file-invoice-dollar',
    tag: 'Instruments',
    title: 'Bonds & Fixed Income',
    body: 'Government and corporate bonds for stable, income-generating portfolios.',
    featured: false,
  },
]

const credRows = [
  { label: 'Registration No.',   value: 'ESX/TM-SD/005', gold: true  },
  { label: 'License Date',       value: 'Dec 24, 2025',  gold: false },
  { label: 'Regulator',          value: 'ECMA',          gold: false },
  { label: 'Exchange',           value: 'Ethiopian Securities Exchange', gold: false },
  { label: 'Paid-up Capital',    value: 'ETB 40 Million', gold: true  },
  { label: 'Majority Shareholder', value: 'Gadaa Bank S.C. — 75%', gold: false },
]

export default function Home() {
  useDocumentTitle('Gadaa Securities Dealer S.C')
  useScrollAnimation(['.reveal', '.reveal-left', '.reveal-right',
    '.sol-card', '.value-row', '.mvv-card', '.news-card'])

  const featured = solutions.filter(s => s.featured)
  const standard = solutions.filter(s => !s.featured)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" id="home">
        <div className="hero-bg-crimson" />
        <div className="hero-bg-gold"    />

        <div className="hero-inner">
          <div className="container">
            <div className="hero-grid">

              {/* Left — copy */}
              <div className="hero-copy">
                <div className="hero-eyebrow">
                  <i className="fas fa-shield-alt" />
                  ECMA Licensed · ESX Trading Member
                </div>

                <h1 className="hero-headline">
                  Ethiopia's Capital Markets,<br />
                  <em>Professionally Navigated.</em>
                </h1>

                <p className="hero-sub">
                  Gadaa Securities Dealer S.C. is a licensed broker-dealer providing
                  trade execution, proprietary trading, and account services to retail
                  and institutional clients on the Ethiopian Securities Exchange.
                </p>

                <div className="hero-actions">
                  <Link to="/services" className="btn btn-white">
                    Explore Solutions
                  </Link>
                  <a href="https://forms.gle/bzVaSoTSiDZrYqVF8"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline-white">
                    <i className="fas fa-user-plus" /> Open Account
                  </a>
                </div>

                <div className="hero-trust">
                  <div className="trust-item">
                    <i className="fas fa-shield-alt" />
                    <span>ECMA Regulated</span>
                  </div>
                  <div className="trust-divider" />
                  <div className="trust-item">
                    <i className="fas fa-university" />
                    <span>Gadaa Bank Backed</span>
                  </div>
                  <div className="trust-divider" />
                  <div className="trust-item">
                    <i className="fas fa-chart-line" />
                    <span>ESX Member</span>
                  </div>
                </div>
              </div>

              {/* Right — credential card */}
              <div className="hero-card-stack">
                <div className="credential-card">
                  <div className="cred-header">
                    <div>
                      <div className="cred-title">Gadaa Securities Dealer</div>
                      <div className="cred-title-sub">Share Company · Addis Ababa, Ethiopia</div>
                    </div>
                    <span className="cred-badge">ESX MEMBER</span>
                  </div>
                  {credRows.map(r => (
                    <div className="cred-row" key={r.label}>
                      <span className="cred-label">{r.label}</span>
                      <span className={`cred-val${r.gold ? ' gold' : ''}`}>{r.value}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-stat-row">
                  <div className="hero-stat-card">
                    <div className="hero-stat-num">ETB <sup>40M</sup></div>
                    <div className="hero-stat-lbl">Paid-up Capital</div>
                  </div>
                  <div className="hero-stat-card">
                    <div className="hero-stat-num">75<sup>%</sup></div>
                    <div className="hero-stat-lbl">Gadaa Bank Stake</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="home-about" id="about">
        <div className="container">
          <div className="about-2col">

            <div className="about-media-wrap reveal-left">
              <div className="about-watermark">2025</div>
              <div className="about-img-box">
                <img src="/images/img1.jpeg" alt="Gadaa Securities office" />
              </div>
              <div className="about-float-card">
                <span className="about-float-num">2025</span>
                <span className="about-float-lbl">ECMA Licensed</span>
              </div>
            </div>

            <div className="about-text-col">
              <span className="overline reveal">Our Story</span>
              <h2 className="reveal reveal-delay-1">
                Rooted in Heritage.<br />Built for Modern Markets.
              </h2>
              <p className="reveal reveal-delay-2">
                Our name draws from the <strong>Gadaa System</strong> — the ancient Oromo
                institution of democratic governance, collective order, and generational
                prosperity. We carry those principles into Ethiopia's capital markets:
                structure, transparency, and service to all.
              </p>
              <p className="reveal reveal-delay-2">
                Established in 2025 and majority-owned by Gadaa Bank S.C., we provide
                retail and institutional clients with professional access to the Ethiopian
                Securities Exchange through trusted, technology-enabled trading solutions.
              </p>
              <div className="about-divider reveal reveal-delay-3" />
              <div className="about-kpis reveal reveal-delay-3">
                <div>
                  <div className="about-kpi-num">ETB 80M</div>
                  <div className="about-kpi-lbl">Subscribed Capital</div>
                </div>
                <div>
                  <div className="about-kpi-num">75%</div>
                  <div className="about-kpi-lbl">Gadaa Bank Stake</div>
                </div>
                <div>
                  <div className="about-kpi-num">ESX</div>
                  <div className="about-kpi-lbl">Exchange Member</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────── */}
      <section className="home-solutions">
        <div className="container">
          <div className="solutions-head reveal">
            <span className="overline">What We Offer</span>
            <h2>Professional Market Access</h2>
            <p>
              Six core capabilities — from account opening to institutional-scale
              order execution — delivered by a licensed ESX trading member.
            </p>
          </div>

          {/* featured top row */}
          <div className="solutions-row-top">
            {featured.map((s, i) => (
              <div className={`sol-card featured reveal reveal-delay-${i + 1}`} key={s.title}>
                <div className="sol-icon"><i className={`fas ${s.icon}`} /></div>
                <span className="sol-card-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          {/* standard bottom row */}
          <div className="solutions-row-bottom">
            {standard.map((s, i) => (
              <div className={`sol-card reveal reveal-delay-${(i % 3) + 1}`} key={s.title}>
                <div className="sol-icon"><i className={`fas ${s.icon}`} /></div>
                <span className="sol-card-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ────────────────────── */}
      <section className="home-mvv" id="values">
        <div className="container">
          <div className="section-title">
            <span className="overline">Our Foundation</span>
            <h2>Mission, Vision &amp; Values</h2>
          </div>

          <div className="mvv-grid">
            {/* Left: mission + vision */}
            <div className="mvv-left">
              <div className="mvv-card reveal">
                <div className="mvv-card-eyebrow">Mission</div>
                <h3>Why We Exist</h3>
                <p>
                  To offer comprehensive and reliable financial solutions by deploying
                  state-of-the-art technology and skilled expertise, while maximising
                  stakeholder value.
                </p>
              </div>
              <div className="mvv-card reveal reveal-delay-1">
                <div className="mvv-card-eyebrow">Vision</div>
                <h3>Where We're Going</h3>
                <p>
                  To be a leading provider of seamless financial solutions and the
                  most trusted broker-dealer on the Ethiopian Securities Exchange.
                </p>
              </div>
            </div>

            {/* Right: values */}
            <div className="mvv-right">
              <div className="mvv-values-head reveal">
                <span className="overline">Our Values</span>
                <h3>We Care</h3>
              </div>
              <div className="values-list">
                {values.map((v, i) => (
                  <div className={`value-row reveal reveal-delay-${(i % 3) + 1}`} key={v.label}>
                    <div className="value-icon">
                      <i className={`fas ${v.icon}`} />
                    </div>
                    <div className="value-text">
                      <h4>{v.label}</h4>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ─────────────────────────────────────────── */}
      <section className="home-news">
        <div className="container">
          <div className="section-title">
            <span className="overline">Latest Updates</span>
            <h2>News & Announcements</h2>
            <p>
              Stay informed with the latest news, press releases, and corporate
              updates from Gadaa Securities Dealer S.C.
            </p>
          </div>
          <div className="news-grid">
            {newsData.slice(0, 3).map(n => (
              <article className="news-card reveal" key={n.id}>
                <div className="news-img">
                  <img src={n.image} alt={n.title} loading="lazy" />
                </div>
                <div className="news-body">
                  <div className="news-cat">{n.category}</div>
                  <h3 className="news-title">{n.title}</h3>
                  <p className="news-excerpt">{n.excerpt}</p>
                  <div className="news-meta">
                    <span><i className="far fa-calendar-alt" />{n.date}</span>
                    <span><i className="far fa-clock" />{n.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/news" className="btn btn-outline-red">
              <i className="fas fa-newspaper" /> View All News
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-inner reveal">
            <div className="cta-rule" />
            <h2>Ready to Invest in<br />Ethiopia's Future?</h2>
            <p>
              Open an account and gain professional, regulated access to the
              Ethiopian Securities Exchange.
            </p>
            <div className="cta-actions">
                  <a href="https://forms.gle/bzVaSoTSiDZrYqVF8"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-white">
                    <i className="fas fa-user-plus" /> Open Account
              </a>
              <Link to="/contact" className="btn btn-outline-white">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer id="contact" />
    </>
  )
}
