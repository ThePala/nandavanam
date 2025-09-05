import { Link } from "react-router-dom";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      {/* top panel */}
      <div className="footer-top">
        {/* Col 1 */}
        <nav className="footer-col">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/nandavanam" className="footer-link">Namma Ooru Nandavanam</Link>
          <Link to="/treedetails" className="footer-link">Tree Map Details</Link>
          <Link to="/maptool" className="footer-link">Map Tool</Link>
          <Link to="/media" className="footer-link">Media</Link>
        </nav>

        {/* Col 2 */}
        <nav className="footer-col">
          <Link to="/team" className="footer-link">Our Team</Link>
          <Link to="/partners" className="footer-link">Our Partners</Link>
          <a href="https://www.atree.org" target="_blank" rel="noreferrer" className="footer-link">ATREE</a>
          <a href="mailto:info@atree.org" className="footer-link">Contact Us</a>
        </nav>

        {/* Col 3 (icons + text) */}
        <div className="footer-col footer-contact">
          <div className="contact-row">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ico">
              <path fill="currentColor"
                d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5
                   2.5 2.5 0 0 1 0 5z"/>
            </svg>
            <a href="https://maps.app.goo.gl/ZaBHBXtuAbLWqeNQ8" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
              <address>
                ATREE- ACCC, 3/199D, Mukkavar,<br/>
                Manimutharu Post, Ambasamudram Taluk,<br/>
                Tirunelveli 627421<br/>
                Tamil Nadu
              </address>
            </a>
          </div>

          <div className="contact-row">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ico">
              <path fill="currentColor"
                d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.8.8 4.3.8.7 0 1.2.5 1.2 1.2v3.6c0 .7-.5 1.2-1.2 1.2C9.9 21.8 2.2 14.1 2.2 4.4c0-.7.5-1.2 1.2-1.2H7c.7 0 1.2.5 1.2 1.2 0 1.5.3 3 .8 4.3.1.4 0 .8-.3 1.1l-2.1 2z"/>
            </svg>
            <a href="tel:+919488063750" className="footer-link inline">+91 94880 63750</a>
          </div>

          <div className="contact-row">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ico">
              <path fill="currentColor"
                d="M10 2h2l-.7 4h3.1l.7-4h2l-.7 4H20v2h-3.1l-.9 6H20v2h-3.4l-.7 4h-2l.7-4H11l-.7 4H8.3l.7-4H4v-2h5l.9-6H4V6h3.4l.7-4h2l-.7 4h3.6L10 2zm1.8 6-.9 6h3.6l.9-6h-3.6z"/>
            </svg>
            <a
              href="https://www.instagram.com/atree_accc"
              target="_blank"
              rel="noreferrer"
              className="footer-link inline"
            >
              @atree_accc
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="footer-bottom">
        <div className="bottom-inner">
          <span className="copyright-ico" aria-hidden="true">©</span>
          <span>{year}. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
