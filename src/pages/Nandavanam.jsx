import React, { useState } from "react";
import "../styles/nandavanam.css";

const templeData = {
  "Thirukadugai Moondreeswarar Temple": {
    photo: "/images/bird.jpg", // replace with actual
    mapEmbed: "https://www.google.com/maps/embed?...",
    noOfTrees: 59,
    datePlanted: "11 December 2021",
    trees: [
      { species: "Tree 1", count: 5 },
      { species: "Tree 2", count: 5 },
      { species: "Tree 3", count: 5 },
      { species: "Tree 4", count: 5 },
    ],
  },
  "Abhi Muktheeswarar Temple": {
    photo: "/images/bird.jpg",
    mapEmbed: "https://www.google.com/maps/embed?...",
    noOfTrees: 42,
    datePlanted: "05 January 2022",
    trees: [
      { species: "Tree A", count: 10 },
      { species: "Tree B", count: 8 },
    ],
  },
  // ... add all 9 temples here
};

export default function Nandavanam() {
  const [selectedTemple, setSelectedTemple] = useState(
    "Thirukadugai Moondreeswarar Temple"
  );
  const temple = templeData[selectedTemple];

  return (
    <div className="nandavanam-container">
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Namma Ooru Nandavanam</h1>
          <div className="hero-ribbon">
            <div className="ribbon-content">
              <p className="hero-paragraph">
                In 2021,  ATREE's Agasthyamalai Community Conservation Centre,  in collaboration with the Tirunelveli District Administration and the  Hindu Religious and Charitable Endowments Board, conducted a  survey of the trees in 131 temples. While native trees like Neem,  Marutham, and Vilvam were abundant, species such as Punnai and  Illupai were alarmingly scarce. To address this, the <b>Namma Ooru  Nandavanam</b> project was launched, aiming to restore temple gardens  with native trees, medicinal plants, and flowering shrubs. The initiative  also involves regularly monitoring these gardens to document lessons  for broader implementation and engaging local communities to  recognize the ecological and spiritual significance of Nandavanams.  The project has already been implemented in nine temples, showing  promising results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content below hero */}
      <div className="nandavanam-main">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <nav className="temple-list" aria-label="Temple list">
              {Object.keys(templeData).map((name) => (
                <button
                  key={name}
                  className={`temple-item ${selectedTemple === name ? "active" : ""}`}
                  onClick={() => setSelectedTemple(name)}
                >
                  {name}
                </button>
              ))}
            </nav>
          </div>
        </aside>
        {/* Details */}
        <section className="details">
          <div className="details-top">
            {/* Photo + stats */}
            <div className="photo-and-stats">
              <img
                src={temple.photo}
                alt={selectedTemple}
                className="circle-photo"
              />
              <div className="stats">
                <div className="stat-row">
                  <span className="stat-label">No. of Trees</span>
                  <span className="stat-value">{temple.noOfTrees}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Date Planted</span>
                  <span className="stat-value">{temple.datePlanted}</span>
                </div>
                <a
                  href={temple.mapEmbed}
                  target="_blank"
                  rel="noreferrer"
                  className="goto-map-link"
                >
                  Go To Location ↗
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="map-wrapper">
              <iframe
                title={`${selectedTemple} map`}
                src={temple.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Tree table */}
          <table className="tree-table">
            <thead>
              <tr>
                <th>Tree Species</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {temple.trees.map((t, i) => (
                <tr key={i}>
                  <td>{t.species}</td>
                  <td>{t.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
