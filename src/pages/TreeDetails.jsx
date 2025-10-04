import { Link } from "react-router-dom";
import "../styles/treedetails.css";

export default function NandavanamLanding() {
  return (
    <main className="nv-landing">
      {/* Page Title */}
      <section className="nv-title">
        <h1>Nandavanam Tree Mapping</h1>
      </section>

      {/* Intro + Hero */}
      <section className="nv-hero">
        <div className="nv-hero-copy">
          <p>
            In 2023, ATREE - Agasthyamalai Community-based Conservation Center,
            along with volunteers, surveyed existing Nandavanams in 162 temples
            across the 9 Blocks of Tirunelveli District. Here is what we found:
            This is a graph showing the number of Nandavanams and No. of Nandavanam Trees, breaking it down by block.
          </p>
        </div>
        <div className="nv-hero-image">
          <img
            src="/images/graph.png"
            alt="Temple campus aerial"
            loading="eager"
          />
        </div>
      </section>

{/* Bubble Chart */}
<section className="nv-bubbles">
  <div className="nv-bubble-text">
    <p>
      Here is a Bubble graph displaying the most common trees
      in the surveyed Nandavanams. The interesting thing to note is that even
      though the Neem tree is not a Sthala Vriksha, it is still considered
      culturally important, and easily dispersed by birds, which might
      explain their high count.
    </p>
  </div>
  <img
    src="/images/bubble.png"
    alt="Most common trees in the Nandavanams (bubble chart)"
    loading="eager"
    className="nv-bubble-img"
  />
</section>

      {/* How-to + CTA */}
      <section className="nv-cta">
        <div className="nv-instructions">
          <h3>
            We have made a Web Map Tool, so that you may see our data. Read the Instructions. Here you
            go!
          </h3>
          <ol>
            <li>
              Select <b>Block</b> (either by clicking on the Map or pressing the
              dropdown).
            </li>
            <li>
              Select <b>Temple</b> (by the Dropdown or on the Map).
            </li>
            <li>
              Select <b>The Tree (Individual Dots on the Map)</b> to see the specific tree details.
            </li>
            <li>
              <b>Reset</b> by pressing the top right button.
            </li>
          </ol>
          <p className="nv-footnote">
            Use the Home button (top-left) to return to the main page.
            <br />
            Detailed data files can be accessed by contacting us.
          </p>
        </div>

        <div className="nv-cta-linkwrap">
          <Link to="/maptool" className="nv-cta-link">
            Go To Map Tool
          </Link>
        </div>
      </section>
    </main>
  );
}
