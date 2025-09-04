import { Routes, Route } from "react-router-dom";
import LayoutDefault from "./components/LayoutDefault";
import LayoutBare from "./components/LayoutBare";

import Home from "./pages/Home";
import Nandavanam from "./pages/Nandavanam";
import TreeDetails from "./pages/TreeDetails";
import MapTool from "./pages/MapTool";
import Media from "./pages/Media";
import Team from "./pages/Team";
import Partners from "./pages/Partners";

export default function App() {
  return (
    <Routes>
      {/* Default layout → with Header + Footer */}
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/nandavanam" element={<Nandavanam />} />
        <Route path="/treedetails" element={<TreeDetails />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
      </Route>

      {/* Bare layout → no Header/Footer */}
      <Route element={<LayoutBare />}>
        <Route path="/maptool" element={<MapTool />} />
      </Route>
    </Routes>
  );
}
