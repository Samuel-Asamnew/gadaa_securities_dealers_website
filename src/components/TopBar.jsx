export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:0115583388" className="top-bar-item">
              <i className="fas fa-phone-alt" />
              <span>011 55 83 388</span>
            </a>
            <div className="top-bar-item">
              <i className="fas fa-clock" />
              <span>Mon – Fri &nbsp; 8:00 AM – 5:00 PM</span>
            </div>
            <div className="top-bar-item">
              <i className="fas fa-map-marker-alt" />
              <span>Nile Insurance Bldg, 16th Floor, Addis Ababa</span>
            </div>
          </div>
          <span className="top-bar-badge">ESX/TM-SD/005</span>
        </div>
      </div>
    </div>
  )
}
