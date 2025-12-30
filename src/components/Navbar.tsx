import { NavLink } from "react-router-dom";
import { useState } from "react";
import { NAVIGATION } from "../config/navLinks";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container obj-width">
        <NavLink to="/" className="logo">
          Fahimul K.
        </NavLink>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}
        aria-label="Main navigation">
          <ul>
            {NAVIGATION.map((item, idx) => (
              <li key={idx} className={item.children ? "dropdown" : ""}>
                {!item.children && item.path && (
                  item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )
                )}

                {item.children && (
                  <>
                    <span className="dropdown-label">
                      {item.label}
                    </span>
                    <ul className="dropdown-menu">
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <a
                            href={child.path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
