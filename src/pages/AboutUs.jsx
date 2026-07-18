import { Link }         from 'react-router-dom'
import Footer           from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import '../styles/pages.css'

export default function AboutUs() {
  useDocumentTitle('About Us — Gadaa Securities Dealer S.C')
  useScrollAnimation(['.reveal', '.reveal-left', '.reveal-right',
    '.leader-preview-card', '.svc-card'])

  return (
    <>
      <section className="page-header">
        <div className="page-header-bg"    />
        <div className="page-header-lines" />
        <div className="container">
          <div className="overline reveal">About Us</div>
          <div className="page-header-rule" />
          <h1 className="reveal reveal-delay-1">
            Rooted in Heritage.<br />Built for Modern Markets.
          </h1>
          <p className="reveal reveal-delay-2">
            A licensed broker-dealer born from Ethiopia's oldest governance tradition —
            the Gadaa System.
          </p>
          <a href="#intro" className="btn btn-gold reveal reveal-delay-3">
            Our Story
          </a>
        </div>
      </section>

      {/* ── Who We Are ─────────────────────────────────── */}
      <section id="intro" className="pg-section">
        <div className="container">
          <div className="pg-2col">
            <div className="pg-text-block">
              <span className="overline reveal">Who We Are</span>
              <h2 className="reveal reveal-delay-1">Ethiopia's Newest Licensed Broker-Dealer</h2>
              <p className="reveal reveal-delay-2">
                Licensed on <strong>December 24, 2025</strong> by the Ethiopian Capital
                Market Authority (ECMA), Gadaa Securities Dealer S.C. is a premier
                Capital Market Service Provider headquartered in Addis Ababa's Lideta
                Sub-City.
              </p>
              <p className="reveal reveal-delay-2">
                Our name draws from the <strong>Gadaa System</strong> — an ancient Oromo
                institution representing democratic governance, collective order, and
                generational prosperity. We carry those values into the financial frontier:
                structure, transparency, and service to all Ethiopians.
              </p>
              <div className="pg-divider reveal reveal-delay-3" />
              <div className="stat-strip reveal reveal-delay-3">
                <div className="stat-item-v">
                  <div className="num">2025</div><div className="lbl">ECMA Licensed</div>
                </div>
                <div className="stat-item-v">
                  <div className="num">ETB 80M</div><div className="lbl">Subscribed Capital</div>
                </div>
                <div className="stat-item-v">
                  <div className="num">ESX</div><div className="lbl">Exchange Member</div>
                </div>
              </div>
            </div>
            <div className="pg-img-frame reveal-right">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="Addis Ababa skyline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Foundation & Strength ───────────────────────── */}
      <section className="pg-section alt">
        <div className="container">
          <div className="pg-2col">
            <div className="pg-img-frame reveal-left">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=900&q=80"
                alt="Financial institution building"
              />
            </div>
            <div className="pg-text-block">
              <span className="overline reveal">Our Foundation</span>
              <h2 className="reveal reveal-delay-1">Backed by Gadaa Bank</h2>
              <p className="reveal reveal-delay-2">
                Established with a <strong>subscribed capital of ETB 80 Million
                (ETB 40 Million paid-up)</strong>, Gadaa Securities is majority-owned
                by <strong>Gadaa Bank S.C.</strong> at 75%, which brings an extensive
                national branch network and strong financial legacy.
              </p>
              <p className="reveal reveal-delay-2">
                Led by a specialised Board of Directors and highly skilled professionals,
                we bridge traditional banking with Ethiopia's emerging capital markets.
              </p>
              <div className="chip-row reveal reveal-delay-3">
                <span className="chip"><i className="fas fa-university" />Gadaa Bank — 75%</span>
                <span className="chip"><i className="fas fa-chart-pie" />ETB 80M Capital</span>
                <span className="chip"><i className="fas fa-users" />Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategic Solutions ─────────────────────────── */}
      <section className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">Services</span>
            <h2>Our Strategic Solutions</h2>
            <p>Serving institutional investors, corporations, and high-net-worth individuals.</p>
          </div>
          <div className="svc-grid-2">
            {[
              {
                icon: 'fa-chart-line',
                title: 'Full Brokerage Service',
                body: 'Efficient trading of Stocks (Shares), Bonds, and Fixed Income instruments. Orders handled with precision and speed — "above and beyond" execution.',
              },
              {
                icon: 'fa-handshake',
                title: 'Principal Dealer & Market Making',
                body: 'As a licensed Dealer we use our capital to facilitate liquidity in the Ethiopian market, ensuring depth and stability in the national trading ecosystem.',
              },
            ].map(s => (
              <div className="svc-card reveal" key={s.title}>
                <div className="svc-icon"><i className={`fas ${s.icon}`} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Governance ──────────────────────────────────── */}
      <section className="pg-section alt">
        <div className="container">
          <div className="pg-2col">
            <div className="pg-text-block">
              <span className="overline reveal">Governance</span>
              <h2 className="reveal reveal-delay-1">Regulatory Compliance First</h2>
              <p className="reveal reveal-delay-2">
                Gadaa Securities Dealer S.C. operates under the strict regulatory
                framework of the Ethiopian Commercial Registration Proclamation and
                ECMA directives. Every transaction is backed by transparency and
                legal excellence.
              </p>
              <div className="chip-row reveal reveal-delay-3">
                <span className="chip"><i className="fas fa-gavel" />ECMA Regulated</span>
                <span className="chip"><i className="fas fa-file-contract" />Commercial Reg.</span>
                <span className="chip"><i className="fas fa-scale-balanced" />Full Transparency</span>
              </div>
            </div>
            <div className="pg-img-frame reveal-right">
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80"
                alt="Ethiopian landscape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────────── */}
      <div className="quote-band">
        <div className="container">
          <blockquote className="reveal">
            <span className="quote-mark">"</span>
            We don't just facilitate trades; we build a legacy of prosperity
            for all Ethiopians.
            <span className="quote-attribution">— Gadaa Securities Dealer S.C.</span>
          </blockquote>
        </div>
      </div>

      {/* ── Leadership Preview ──────────────────────────── */}
      <section className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">Our People</span>
            <h2>Leadership &amp; Management</h2>
            <p>Experienced professionals guiding Gadaa Securities with vision and integrity.</p>
          </div>
          <div className="leader-preview-grid">
            {[
              {
                name: 'Abreham Terecha',
                pos:  'Chief Executive Officer',
                bio:  'Former Manager of Capital Market Projects at Gadaa Bank. Expert in banking, capital markets, and strategic investment management.',
              },
              {
                name: 'Mr. Wolde Bulto',
                pos:  'Board Member · CEO, Gadaa Bank',
                bio:  '25+ years experience. BA & MSc Economics, EMBA International Economics. Previously at Oromia Bank & CBE.',
              },
              {
                name: 'Hassen Mohammed',
                pos:  'Chief Risk & Compliance Officer',
                bio:  '10+ years banking experience. BA Economics, MA Development Management. Certified in IFB, investment banking, and capital markets.',
              },
            ].map(l => (
              <div className="leader-preview-card reveal" key={l.name}>
                <div className="lp-avatar"><i className="fas fa-user-tie" /></div>
                <div>
                  <h3>{l.name}</h3>
                  <div className="pos">{l.pos}</div>
                  <p>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:40 }}>
            <Link to="/leadership" className="btn btn-primary">
              Full Leadership Team <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
