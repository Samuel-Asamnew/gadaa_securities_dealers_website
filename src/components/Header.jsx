import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [dropOpen,  setDropOpen]      = useState(false)
  const [scrolled,  setScrolled]      = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* position header below top-bar; push .page-header down */
  useEffect(() => {
    function adjust() {
      const tb  = document.querySelector('.top-bar')
      const hdr = document.querySelector('header')
      const ph  = document.querySelector('.page-header')
      if (tb && hdr) {
        const tbH = tb.offsetHeight
        hdr.style.top = tbH + 'px'
        const total = tbH + hdr.offsetHeight
        document.documentElement.style.setProperty('--hdr-total', total + 'px')
        if (ph) ph.style.paddingTop = (total + 52) + 'px'
      }
    }
    adjust()
    window.addEventListener('resize', adjust)
    return () => window.removeEventListener('resize', adjust)
  }, [location.pathname])
  useEffect(() => {
  if (menuOpen) {
    document.body.classList.add('menu-open')
  } else {
    document.body.classList.remove('menu-open')
  }
}, [menuOpen])


  function close() { setMenuOpen(false); setDropOpen(false) }

  function scrollToHash(e, hash) {
    e.preventDefault(); close()
    if (location.pathname !== '/') { navigate('/' + hash); return }
    const el = document.querySelector(hash)
    if (el) {
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--hdr-total') || '108'
      )
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={close} />

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav className="navbar">

            {/* Logo */}
            <Link to="/" className="logo-link" onClick={close}>
              <div className="logo-img-wrap">
                <img src="/images/logo.png" alt="Gadaa Securities Dealer" />
              </div>
              <div className="logo-text-col">
                <span className="logo-name">Gadaa Securities Dealer</span>
                <span className="logo-reg">Trading Member · ESX/TM-SD/005</span>
              </div>
            </Link>

            {/* Nav links */}
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li>
                <a href="#home" onClick={e => scrollToHash(e, '#home')}>Home</a>
              </li>
              <li>
                <NavLink to="/about" onClick={close}
                  className={({ isActive }) => isActive ? 'active-link' : ''}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={close}
                  className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Solutions
                </NavLink>
              </li>
              <li className={`dropdown ${dropOpen ? 'open' : ''}`}
                onMouseEnter={() => { if (window.innerWidth > 768) setDropOpen(true) }}
                onMouseLeave={() => { if (window.innerWidth > 768) setDropOpen(false) }}>
                <button onClick={() => setDropOpen(o => !o)}>
                  Resources <i className="fas fa-chevron-down"
                    style={{ fontSize: '0.6rem', marginLeft: 3 }} />
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/news"          onClick={close}>News</Link></li>
                  <li><Link to="/vacancy"        onClick={close}>Vacancy</Link></li>
                  <li><Link to="/annual-report"  onClick={close}>Annual Report</Link></li>
                  <li><Link to="/market-insight" onClick={close}>Market Insight</Link></li>
                </ul>
              </li>
              <li>
                <NavLink to="/leadership" onClick={close}
                  className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Leadership
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={close}
                  className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-cta">
                <a href="https://forms.gle/bzVaSoTSiDZrYqVF8"
                  target="_blank" rel="noopener noreferrer" onClick={close}>
                  <i className="fas fa-user-plus" style={{ fontSize: '0.78rem' }} />
                  Open Account
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>

          </nav>
        </div>
      </header>
    </>
  )
}
