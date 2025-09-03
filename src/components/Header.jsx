import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo-final.svg" alt="ATREE Logo" />
          <span className="logo-text">
            ASHOKA TRUST FOR RESEARCH<br />
            IN ECOLOGY AND THE ENVIRONMENT
          </span>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <span>Our Initiatives</span>
            <div className="dropdown-content">
              <Link to="/nandavanam">Namma Ooru Nandavanam</Link>
              <span>Tree Mapping</span>
              <div className="nested-dropdown">
                <Link to="/treedetails">Tree Map Details</Link>
                <Link to="/maptool">Map Tool</Link>
              </div>
            </div>
          </div>
          <Link to="/media">Media</Link>
          <Link to="/team">Team</Link>
          <Link to="/partners">Partners</Link>
        </nav>
      </div>
    </header>
  );
}
