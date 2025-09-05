import React, { useState } from "react";
import "../styles/nandavanam.css";

const templeData = {
  "Thirukadugai Moondreeswarar Temple": {
    photo: "/images/team/adithyan.png", // replace with actual
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1194.842001273556!2d77.49955540501362!3d8.752436415298831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDUnMDcuNCJOIDc3wrAzMCcwMS4xIkU!5e1!3m2!1sen!2sin!4v1757054316170!5m2!1sen!2sin",
    noOfTrees: 57,
    area: "0.3309 acres",
    speciesCount: 41,
    datePlanted: "11 December 2021",
    trees: [
      { species: "Mango tree", count: 6 },
      { species: "Star jasmine", count: 3 },
      { species: "Amla", count: 3 },
      { species: "Indian tulip tree", count: 3 },
      { species: "Pinwheelflower", count: 2 },
      { species: "Large Garlic Pear", count: 2 },
      { species: "bael", count: 2 },
      { species: "Lemon", count: 2 },
      { species: "Golden shower", count: 2 },
      { species: "Gaub", count: 1 },
      { species: "Red Bead Tree", count: 1 },
      { species: "Hari champa", count: 1 },
      { species: "Devil Tree", count: 1 },
      { species: "Spanish cherry", count: 1 },
      { species: "Wood apple", count: 1 },
      { species: "China Rose", count: 1 },
      { species: "Jamun", count: 1 },
      { species: "White Silk-Cotton Tree", count: 1 },
      { species: "Ceylon iorn wood", count: 1 },
      { species: "Anjan", count: 1 },
      { species: "Fiddlewood", count: 1 },
      { species: "Neem tree", count: 1 },
      { species: "calabash tree", count: 1 },
      { species: "Nux vomica", count: 1 },
      { species: "Baheda", count: 1 },
      { species: "Indian Mulberry", count: 1 },
      { species: "Palas tree", count: 1 },
      { species: "Thin jasmine", count: 1 },
      { species: "Dye fig", count: 1 },
      { species: "Indian Oak", count: 1 },
      { species: "Bidi leaf tree", count: 1 },
      { species: "Sulthan chempa", count: 1 },
      { species: "Jasmine", count: 1 },
      { species: "Tamarind", count: 1 },
      { species: "Arjun tree", count: 1 },
      { species: "jack fruit tree", count: 1 },
      { species: "Gamhar tree", count: 1 },
      { species: "Indian butter tree", count: 1 },
      { species: "Common bamboo", count: 1 },
      { species: "Indian Bat fig", count: 1 },
      { species: "Banyan tree", count: 1 },
    ],
  },
  "Abhi Muktheeswarar Temple": {
    photo: "/images/team/adithyan.png",
    mapEmbed: "https://www.google.com/maps/embed?...",
    noOfTrees: 42,
    area: "900 sq.m.",
    speciesCount: 12,
    datePlanted: "05 January 2022",
    trees: [
      { species: "Tree A", count: 10 },
      { species: "Tree B", count: 8 },
    ],
  },
    "Third Temple": {
    photo: "/images/team/adithyan.png",
    mapEmbed: "https://www.google.com/maps/embed?...",
    noOfTrees: 42,
    area: "900 sq.m.",
    speciesCount: 12,
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
                  <span className="stat-label">Area</span>
                  <span className="stat-value">{temple.area}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Species Count</span>
                  <span className="stat-value">{temple.speciesCount}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Date Planted</span>
                  <span className="stat-value">{temple.datePlanted}</span>
                </div>
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
