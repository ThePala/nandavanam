import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);           // hamburger menu
  const [openInitiatives, setOpenInitiatives] = useState(false); // mobile accordion
  const [openAbout, setOpenAbout] = useState(false); // mobile accordion

  const closeAll = () => {
    setOpen(false);
    setOpenInitiatives(false);
    setOpenAbout(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo + Brand */}
        <Link to="/" className="brand" onClick={closeAll}>
          <img src={`${import.meta.env.BASE_URL}images/logonobg.png`} alt="ATREE logo" />
          <span className="brand-text">
            ASHOKA TRUST FOR RESEARCH IN 
            <br />ECOLOGY AND THE ENVIRONMENT
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav */}
<nav id="primary-nav" className={`nav-menu ${open ? "open" : ""}`}>
  <NavLink to="/" className="nav-link" onClick={closeAll}>
    Home
  </NavLink>

  {/* Our Initiatives */}
  <div className="nav-item has-panel">
    <button className="section-header" type="button" aria-haspopup="true">
      Our Initiatives
      <span className="chev" />
    </button>

    <div className="panel">
      <ul className="panel-list">
        <li>
          <NavLink to="/nandavanam" className="panel-link" onClick={closeAll}>
            Namma Ooru Nandavanam
          </NavLink>
        </li>

        <li>
          <NavLink to="/treedetails" className="panel-link" onClick={closeAll}>
            Tree Mapping
          </NavLink>
        </li>
      </ul>
    </div>
  </div>

  <NavLink to="/media" className="nav-link" onClick={closeAll}>
    Media
  </NavLink>

  {/* About Us */}
  <div className="nav-item has-panel">
    <button className="section-header" type="button" aria-haspopup="true">
      About Us
      <span className="chev" />
    </button>

    <div className="panel">
      <ul className="panel-list">
        <li>
          <NavLink to="/team" className="panel-link" onClick={closeAll}>
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/partners" className="panel-link" onClick={closeAll}>
            Our Partners
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


      </div>
    </header>
  );
}
