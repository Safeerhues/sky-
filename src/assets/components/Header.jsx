import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="w-container">
          <div className="grid">
            {/* Logo */}
            <div className="logo">
              <NavLink to="/" className="logo-link">
                <h1>Skybound</h1>
              </NavLink>
            </div>

            {/* Toggle Button */}
            <div
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
            </div>

            {/* Navigation */}
            <nav aria-label="Main navigation" className={`j ${menuOpen ? "show" : ""}`}>
              <ul className="nav-list">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                <li className="nav-item"><NavLink to="/services">Services</NavLink></li>
                <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
              </ul>

              <div className="bhn">
                <NavLink to="/contact">
                  <button className="con-btn">Let's talk</button>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;