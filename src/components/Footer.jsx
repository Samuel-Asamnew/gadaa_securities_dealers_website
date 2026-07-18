import { Link } from 'react-router-dom'

export default function Footer({ id }) {
  return (
    <footer id={id}>
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <img src="/images/logo.png" alt="Gadaa Securities Dealer" />
              <span className="footer-brand-name">Gadaa Securities Dealer</span>
            </div>
            <p className="footer-brand-desc">
              A licensed broker-dealer providing professional access to the Ethiopian
              Securities Exchange for retail and institutional investors.
            </p>
            <div className="footer-reg-badge">
              <i className="fas fa-shield-alt" />
              ESX / TM-SD / 005
            </div>
            <div className="footer-social">
              {[
                { href: 'https://www.facebook.com/profile.php?id=61586385081565', icon: 'fab fa-facebook-f',  label: 'Facebook'  },
                { href: 'https://t.me/gsd_2026',                                  icon: 'fab fa-telegram',    label: 'Telegram'  },
                { href: 'https://www.linkedin.com/company/gadaa-securities-dealer-s-c/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
                { href: 'https://vm.tiktok.com/ZS9Rq18okFhrE-9ja3E/',             icon: 'fab fa-tiktok',      label: 'TikTok'    },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-nav-list">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/services', 'Solutions'],
                ['/news', 'News'],
                ['/vacancy', 'Vacancy'],
                ['/leadership', 'Leadership'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-nav-list">
              {['Trade Execution', 'Proprietary Trading', 'Account Services',
                'Equity (Stocks)', 'Bonds & Fixed Income'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-nav-list">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt" />
                  Nile Insurance Bldg, 16th Floor<br />
                  Lideta Sub-City, Addis Ababa
                </span>
              </li>
              <li>
                <a href="tel:+251115583388">
                  <i className="fas fa-phone" />+251 11 558 3388
                </a>
              </li>
              <li>
                <a href="mailto:info@gadaacapital.com.et">
                  <i className="fas fa-envelope" />info@gadaacapital.com.et
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="footer-bottom-strip">
          <span>© {new Date().getFullYear()} Gadaa Securities Dealer S.C. All rights reserved.</span>
          <a href="https://www.gadaacapital.com.et:2096/"
            target="_blank" rel="noopener noreferrer">Webmail</a>
        </div>

        {/* Regulatory disclaimer */}
        <div className="footer-disclaimer">
          Gadaa Securities Dealer S.C. is licensed by the Ethiopian Capital Market Authority
          (ECMA) and is a registered Trading Member of the Ethiopian Securities Exchange
          (ESX). Capital market investments carry risk. Past performance does not guarantee
          future results. This website is for informational purposes only and does not
          constitute investment advice.
        </div>

      </div>
    </footer>
  )
}
