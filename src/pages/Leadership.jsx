import Footer           from '../components/Footer.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import '../styles/pages.css'

const board = [
  { name:'Mr. Wolde Bulto',     pos:'CEO, Gadaa Bank S.C.',              exp:'25+ years', edu:'BA & MSc Economics · EMBA International Economics',    bg:'Previously at Oromia Bank & Commercial Bank of Ethiopia.' },
  { name:'Mr. Dereje Tadesse',  pos:'HR Management Expert',              exp:null,         edu:'BA in HR Management & Leadership',                      bg:'Roles at Abbahawa Trading, AVISET, Edna Mall, Asela ATVET. Certified in ISO quality management.' },
  { name:'Mr. Tigistu Shiferaw',pos:'CEO, Oromia Insurance S.C.',        exp:'18+ years',  edu:'BA Business Admin & Information Systems',               bg:'Certified Manager with extensive insurance expertise.' },
  { name:'Eng. Abebe Angasa',   pos:'GM & Owner, Wada Engineering Plc',  exp:'20+ years',  edu:'MSc Hydraulic Engineering',                             bg:'Former Addis Ababa University lecturer.' },
  { name:'Mr. Alazar Adula',    pos:'CEO, Godu General Trading S.C.',    exp:null,         edu:'MA Economics · MA Business Leadership',                  bg:'Board member Gadaa Bank. Former Branch Manager, Oromia Bank. Capital Market certified.' },
  { name:'Mr. Shiferaw Rufe',   pos:'Former Board Director, Gadaa Bank', exp:null,         edu:'BA Management',                                         bg:'Former Chief Executive Advisor, Ethiopian Insurance Corporation.' },
]

const management = [
  { name:'Abreham Terecha',  pos:'Chief Executive Officer',           edu:'BA Economics · MSc International Business', bg:'Former Manager of Capital Market Projects at Gadaa Bank. Certified in valuation, corporate strategy, and capital markets.' },
  { name:'Hassen Mohammed',  pos:'Chief Risk & Compliance Officer',   edu:'BA Economics · MA Development Management',  bg:'Experience at CBE, Coop Bank, Gadaa Bank. Certified in IFB, investment banking, and analytics.' },
]

const values = [
  { icon:'fa-eye',        title:'Vision',    text:'A clear forward view of securities trading in Ethiopia, driving innovation and strategic growth.' },
  { icon:'fa-handshake',  title:'Integrity', text:'The highest ethical standards — transparency and trust with every client and stakeholder.' },
  { icon:'fa-chart-line', title:'Excellence',text:'Continuous improvement and deep industry expertise in every transaction we execute.' },
]

export default function Leadership() {
  useDocumentTitle('Leadership — Gadaa Securities Dealer S.C')
  useScrollAnimation(['.reveal', '.board-card', '.mgmt-card', '.lv-card'])

  return (
    <>
      <section className="page-header">
        <div className="page-header-bg"    />
        <div className="page-header-lines" />
        <div className="container">
          <div className="overline reveal">Leadership</div>
          <div className="page-header-rule" />
          <h1 className="reveal reveal-delay-1">The Team Behind<br />Gadaa Securities</h1>
          <p className="reveal reveal-delay-2">
            Experienced professionals guiding Ethiopia's newest broker-dealer with
            vision, expertise, and integrity.
          </p>
          <a href="#board" className="btn btn-gold reveal reveal-delay-3">Meet the Team</a>
        </div>
      </section>

      {/* ── Board ───────────────────────────────────────── */}
      <section id="board" className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">Governance</span>
            <h2>Board of Directors</h2>
            <p>Six experienced leaders providing strategic oversight and governance.</p>
          </div>
          <div className="board-grid">
            {board.map((m, i) => (
              <div className={`board-card reveal reveal-delay-${(i % 3) + 1}`} key={m.name}>
                <div className="board-avatar"><i className="fas fa-user-tie" /></div>
                <div>
                  <h3>{m.name}</h3>
                  <div className="pos">{m.pos}</div>
                  {m.exp && <div className="exp">{m.exp} experience</div>}
                  <div className="edu">{m.edu}</div>
                  <div className="bg">{m.bg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Management ──────────────────────────────────── */}
      <section className="pg-section alt">
        <div className="container">
          <div className="section-title">
            <span className="overline">Management</span>
            <h2>Executive Team</h2>
            <p>Day-to-day leadership driving operations, compliance, and growth.</p>
          </div>
          <div className="mgmt-grid">
            {management.map((m, i) => (
              <div className={`mgmt-card reveal reveal-delay-${i + 1}`} key={m.name}>
                <div className="mgmt-avatar"><i className="fas fa-user" /></div>
                <div>
                  <h3>{m.name}</h3>
                  <div className="pos">{m.pos}</div>
                  <div className="edu">{m.edu}</div>
                  <div className="bg">{m.bg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Values ────────────────────────────── */}
      <section className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">Principles</span>
            <h2>How We Lead</h2>
          </div>
          <div className="lv-grid">
            {values.map((v, i) => (
              <div className={`lv-card reveal reveal-delay-${i + 1}`} key={v.title}>
                <div className="ico"><i className={`fas ${v.icon}`} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
