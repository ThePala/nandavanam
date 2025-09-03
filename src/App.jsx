import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nandavanam from "./pages/Nandavanam";
import MapTool from "./pages/MapTool";   // ✅ now imported from new file
import TreeDetails from "./pages/TreeDetails";
import Media from "./pages/Media";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import "./styles/common.css";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Header />
      <nav>
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
        <div className="dropdown">
          <span>About Us</span>
          <div className="dropdown-content">
            <Link to="/team">Our Team</Link>
            <Link to="/partners">Our Partners</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nandavanam" element={<Nandavanam />} />
        <Route path="/maptool" element={<MapTool />} />   {/* ✅ new route */}
        <Route path="/treedetails" element={<TreeDetails />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
