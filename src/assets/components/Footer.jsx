function Footer() {
  return (
    <footer className="footer">
      <div className="">
        <div className="foot">
          {/* Left: Company Description */}
          <div className="fv">
            <h1 className="mb-3">Skybound</h1>
            <p>
              We help travelers, families, and businesses plan seamless journeys worldwide. From destination ideas to final bookings, we deliver modern travel solutions that inspire exploration. Let’s make your next trip smooth and memorable today.
            </p>
          </div>

          <div className="dad">
            {/* Middle: Services */}
            <div className="wow">
              <h5>Services</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/hotels" className="nav-link p-0">All Hotels</a></li>
                <li className="nav-item mb-2"><a href="/investors" className="nav-link p-0">Investor Relations</a></li>
                <li className="nav-item mb-2"><a href="/supplier" className="nav-link p-0">Become a Supplier</a></li>
                <li className="nav-item mb-2"><a href="/list-property" className="nav-link p-0">List Your Property</a></li>
              </ul>
            </div>

            {/* Right: Quick Links */}
            <div className="wow wow1">
              <h5>Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/#Home" className="nav-link p-0">Home</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0">About</a></li>
                <li className="nav-item mb-2"><a href="/services" className="nav-link p-0">Services</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © 1997 - 2025 Skybound | Company number: XYXYXYXY | <a href="/terms">Terms & Privacy</a>
          </p>
          <ul className="list-unstyled d-flex">
            <li className="me-3">
              <a className="link-body-emphasis" href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg>
              </a>
            </li>
            <li className="me-3">
              <a className="link-body-emphasis" href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="bi" width="24" height="24"><use xlinkHref="#linkedin" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;