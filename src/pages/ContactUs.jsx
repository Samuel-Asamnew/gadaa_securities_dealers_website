import { useState }    from 'react'
import Footer          from '../components/Footer.jsx'
import FAQItem         from '../components/FAQItem.jsx'
import useDocumentTitle  from '../hooks/useDocumentTitle.js'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import '../styles/pages.css'

const info = [
  { icon:'fa-map-marker-alt', title:'Our Office',   content:<>Nile Insurance Building, 16th Floor<br />Lideta Sub-City, Woreda 03<br />Addis Ababa, Ethiopia</> },
  { icon:'fa-phone-alt',      title:'Phone',         content:<a href="tel:+251115583388">+251 11 558 3388</a> },
  { icon:'fa-envelope',       title:'Email',         content:<a href="mailto:info@gadaacapital.com.et">info@gadaacapital.com.et</a> },
  { icon:'fa-clock',          title:'Office Hours',  content:<>Mon – Fri: 8:00 AM – 5:00 PM<br />Sat – Sun: Closed</> },
]

const faqs = [
  { q:'How do I open an investment account?',           a:'Visit our office with a valid government-issued ID and proof of address. Our team will guide you through the KYC process, which typically completes within 1–2 business days.' },
  { q:'What are the trading hours on the ESX?',         a:'Trading sessions run from 9:30 AM to 3:00 PM, Monday to Friday, following the Ethiopian Securities Exchange schedule. Our office is open Mon–Fri 8:00 AM – 5:00 PM.' },
  { q:'How can I monitor my portfolio?',                a:'Contact your account manager directly, visit our office, or request a detailed performance report at any time.' },
  { q:'What types of securities can I trade?',          a:'We provide access to equities (stocks/shares) and fixed income instruments (government and corporate bonds) listed on the Ethiopian Securities Exchange.' },
  { q:'Is Gadaa Securities regulated?',                 a:'Yes. Gadaa Securities Dealer S.C. is licensed by ECMA and is an official Trading Member of the Ethiopian Securities Exchange (Registration No: ESX/TM-SD/005).' },
]

export default function ContactUs() {
  useDocumentTitle('Contact Us — Gadaa Securities Dealer S.C')
  useScrollAnimation(['.reveal', '.contact-card', '.faq-item'])

  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <>
      <section className="page-header">
        <div className="page-header-bg"    />
        <div className="page-header-lines" />
        <div className="container">
          <div className="overline reveal">Contact</div>
          <div className="page-header-rule" />
          <h1 className="reveal reveal-delay-1">Let's Start a<br />Conversation.</h1>
          <p className="reveal reveal-delay-2">
            Our team is ready to help you invest with confidence in Ethiopia's capital markets.
          </p>
          <a href="#contact" className="btn btn-gold reveal reveal-delay-3">Get In Touch</a>
        </div>
      </section>

      {/* ── Contact grid ────────────────────────────────── */}
      <section id="contact" className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">Reach Us</span>
            <h2>Contact Information</h2>
          </div>

          <div className="contact-layout">
            {/* Info cards */}
            <div className="contact-info-col">
              {info.map(c => (
                <div className="contact-card reveal" key={c.title}>
                  <div className="contact-icon"><i className={`fas ${c.icon}`} /></div>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="contact-form-panel reveal reveal-delay-2">
              {sent ? (
                <div className="form-success">
                  <i className="fas fa-check-circle" />
                  <h3>Message Sent</h3>
                  <p>Thank you — we'll respond within one business day.</p>
                </div>
              ) : (
                <>
                  <h3>Send a Message</h3>
                  <p>Fill in the form and we'll get back to you within one business day.</p>
                  <form onSubmit={submit}>
                    <div className="form-row-2">
                      <div className="f-field">
                        <label htmlFor="name">Full Name</label>
                        <input id="name" name="name" type="text"
                          placeholder="Your full name"
                          value={form.name} onChange={handle} required />
                      </div>
                      <div className="f-field">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email"
                          placeholder="you@example.com"
                          value={form.email} onChange={handle} required />
                      </div>
                    </div>
                    <div className="f-field">
                      <label htmlFor="subject">Subject</label>
                      <input id="subject" name="subject" type="text"
                        placeholder="How can we help?"
                        value={form.subject} onChange={handle} />
                    </div>
                    <div className="f-field">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message"
                        placeholder="Tell us more…"
                        value={form.message} onChange={handle} required />
                    </div>
                    <button type="submit" className="f-submit">
                      Send Message &nbsp;<i className="fas fa-paper-plane" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────── */}
      <section className="pg-section alt" style={{ paddingTop:0 }}>
        <div className="container">
          <div className="map-wrap reveal">
            <i className="fas fa-map-marked-alt" />
            <h3>Nile Insurance Building, 16th Floor</h3>
            <p>Lideta Sub-City, Woreda 03 · Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="pg-section">
        <div className="container">
          <div className="section-title">
            <span className="overline">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to the questions we hear most often.</p>
          </div>
          <div className="faq-list">
            {faqs.map(f => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
