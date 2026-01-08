import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { NAVIGATION } from "../config/navLinks";
import "../styles/navbar.css";
import { loadSiteSettings } from "../utils/loadSiteSettings";
import type { SiteSettings } from "../types/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    loadSiteSettings().then(setSiteSettings);
  }, []);

  if (!siteSettings) return null;

  return (
    <header className="site-header">
      <div className="container obj-width">
        <Link to="/" className="logo">
          {siteSettings.navbarTitle}
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {NAVIGATION.map((item, idx) => (
              <li key={idx} className={item.children ? "dropdown" : ""}>
                {!item.children &&
                  item.path &&
                  (item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink to={item.path} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </NavLink>
                  ))}

                {item.children && (
                  <>
                    <span className="dropdown-label">{item.label}</span>
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
