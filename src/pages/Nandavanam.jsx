import React, { useState } from "react";
import "../styles/nandavanam.css";

const templeData = {
  "Thirukadugai Moondreeswarar Temple": {
    photo: "/images/team/adithyan.png", // replace with actual
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1194.842001273556!2d77.49955540501362!3d8.752436415298831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDUnMDcuNCJOIDc3wrAzMCcwMS4xIkU!5e1!3m2!1sen!2sin!4v1757054316170!5m2!1sen!2sin",
    noOfTrees: 57,
    area: "0.33 acres",
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d608.7340926831381!2d77.58892900684285!3d8.695725683868496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnNDQuMiJOIDc3wrAzNScyMC4xIkU!5e1!3m2!1sen!2sin!4v1757063667686!5m2!1sen!2sin",
    noOfTrees: 42,
    area: "0.28 acres",
    speciesCount: 31,
    datePlanted: "5 June 2022",
trees: [
  { species: "Arjun tree", count: 6 },
  { species: "Sulthan chempa", count: 6 },
  { species: "Jamun", count: 4 },
  { species: "Indian butter tree", count: 4 },
  { species: "Common bamboo", count: 3 },
  { species: "Baheda", count: 3 },
  { species: "Pinwheelflower", count: 3 },
  { species: "Pongam Tree", count: 3 },
  { species: "Neem", count: 2 },
  { species: "Spanish cherry", count: 2 },
  { species: "jack fruit tree", count: 2 },
  { species: "Wood apple", count: 2 },
  { species: "Khejri Tree", count: 2 },
  { species: "Indian Mulberry", count: 1 },
  { species: "Indian Cork Tree", count: 1 },
  { species: "Dye fig", count: 1 },
  { species: "Peepal tree", count: 1 },
  { species: "False Ashok", count: 1 },
  { species: "Common jasmine", count: 1 },
  { species: "Champaca", count: 1 },
  { species: "Wild jack", count: 1 },
  { species: "Indian Oak", count: 1 },
  { species: "Palas tree", count: 1 },
  { species: "Amla", count: 1 },
  { species: "Ceylon iorn wood", count: 1 },
  { species: "Devil Tree", count: 1 },
  { species: "calabash tree", count: 1 },
  { species: "Large Garlic Pear", count: 1 },
  { species: "Indian sandalwood", count: 1 },
  { species: "Mango tree", count: 1 },
  { species: "Coral Jasmine", count: 1 },
],
  },
    "Sridevi Boodevi Sametha Venkatachalapathy Temple": {
    photo: "/images/team/adithyan.png",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d608.7340926831381!2d77.58892900684285!3d8.695725683868496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnNDQuMiJOIDc3wrAzNScyMC4xIkU!5e1!3m2!1sen!2sin!4v1757063957965!5m2!1sen!2sin",
    noOfTrees: 98,
    area: "0.54 acres",
    speciesCount: 60,
    datePlanted: "05 June 2022",
trees: [
  { species: "Jamun", count: 4 },
  { species: "Indian Mulberry", count: 4 },
  { species: "China rose", count: 3 },
  { species: "Neem", count: 3 },
  { species: "Indian Oak", count: 3 },
  { species: "Tree of Sorrow", count: 3 },
  { species: "Mango tree", count: 3 },
  { species: "Malabar Neem", count: 3 },
  { species: "Golden shower", count: 3 },
  { species: "Wood apple", count: 3 },
  { species: "Guava", count: 2 },
  { species: "Teak", count: 2 },
  { species: "Arjun tree", count: 2 },
  { species: "Dye fig", count: 2 },
  { species: "Common jasmine", count: 2 },
  { species: "Amla", count: 2 },
  { species: "Babool", count: 2 },
  { species: "Garlic pear tree", count: 2 },
  { species: "Pinwheelflower", count: 2 },
  { species: "Baheda", count: 2 },
  { species: "Spanish cherry", count: 2 },
  { species: "Palas tree", count: 2 },
  { species: "Indian butter tree", count: 2 },
  { species: "Peepal tree", count: 1 },
  { species: "Henna tree", count: 1 },
  { species: "Indian Beech Tree", count: 1 },
  { species: "Common bamboo", count: 1 },
  { species: "Tamarind tree", count: 1 },
  { species: "Palmyra Palm", count: 1 },
  { species: "Ebony tree", count: 1 },
  { species: "Nux Vomica", count: 1 },
  { species: "Red Bead Tree", count: 1 },
  { species: "Gray Nicker", count: 1 },
  { species: "Indian Almond", count: 1 },
  { species: "Chaste Tree", count: 1 },
  { species: "Night-blooming cestrum", count: 1 },
  { species: "Indian sandalwood", count: 1 },
  { species: "jack fruit tree", count: 1 },
  { species: "Cluster fig", count: 1 },
  { species: "Indian Laurel", count: 1 },
  { species: "Carandas plum", count: 1 },
  { species: "Hari champa", count: 1 },
  { species: "Haldu", count: 1 },
  { species: "Ceylon satin wood", count: 1 },
  { species: "Devil Tree", count: 1 },
  { species: "Cannonball tree", count: 1 },
  { species: "Star jasmine", count: 1 },
  { species: "Bidi leaf tree", count: 1 },
  { species: "Sulthan chempa", count: 1 },
  { species: "White Silk-Cotton Tree", count: 1 },
  { species: "Gamhar tree", count: 1 },
  { species: "True Kadamb", count: 1 },
  { species: "Black-Honey Shrub", count: 1 },
  { species: "Curry leaf", count: 1 },
  { species: "Siamese Cassia", count: 1 },
  { species: "Sausage Tree", count: 1 },
  { species: "Custard apple", count: 1 },
  { species: "Indian tulip tree", count: 1 },
  { species: "Indian cherry", count: 1 },
  { species: "Indian Coral Tree", count: 1 },
  { species: "Indian siris", count: 1 },
  { species: "Ceylon iron wood", count: 1 },
],
  },
      "Thiruvalutheeswarar Temple": {
    photo: "/images/team/adithyan.png",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1029.5617402920493!2d77.60091050932368!3d8.43497970156411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjYnMDYuMiJOIDc3wrAzNicwNi4xIkU!5e1!3m2!1sen!2sin!4v1757064485003!5m2!1sen!2sin",
    noOfTrees: 98,
    area: "0.39 acres",
    speciesCount: 52,
    datePlanted: "16 Sept 2022",
trees: [
  { species: "Oleander", count: 21 },
  { species: "Royal Jasmine", count: 13 },
  { species: "Siamese Cassia", count: 2 },
  { species: "bael", count: 2 },
  { species: "Arjun tree", count: 2 },
  { species: "Mango tree", count: 2 },
  { species: "Indian Beech Tree", count: 2 },
  { species: "East indian mahogany", count: 2 },
  { species: "Baheda", count: 2 },
  { species: "Amla", count: 2 },
  { species: "Amaltas", count: 1 },
  { species: "Peepal tree", count: 1 },
  { species: "Fiddlewood", count: 1 },
  { species: "Haldu", count: 1 },
  { species: "Fishtail Palm", count: 1 },
  { species: "Bidi leaf tree", count: 1 },
  { species: "Champaca", count: 1 },
  { species: "Indian cherry", count: 1 },
  { species: "Coconut", count: 1 },
  { species: "Sausage Tree", count: 1 },
  { species: "Indian butter tree", count: 1 },
  { species: "Indian sandalwood", count: 1 },
  { species: "clearing-nut tree", count: 1 },
  { species: "China Rose", count: 1 },
  { species: "Star fruit", count: 1 },
  { species: "Curry leaf", count: 1 },
  { species: "Guava", count: 1 },
  { species: "Indian cork tree", count: 1 },
  { species: "White Silk-Cotton Tree", count: 1 },
  { species: "Indian Almond", count: 1 },
  { species: "Custard apple", count: 1 },
  { species: "Sulthan chempa", count: 1 },
  { species: "Coral Jasmine", count: 1 },
  { species: "Dye fig", count: 1 },
  { species: "Indian tulip tree", count: 1 },
  { species: "Chaste Tree", count: 1 },
  { species: "Cannonball tree", count: 1 },
  { species: "Ceylon satin wood", count: 1 },
  { species: "jack fruit tree", count: 1 },
  { species: "Sweet indrajao", count: 1 },
  { species: "Garlic pear tree", count: 1 },
  { species: "Common bamboo", count: 1 },
  { species: "Lenten tree", count: 1 },
  { species: "Neem tree", count: 1 },
  { species: "Gray Nicker", count: 1 },
  { species: "Kindal tree", count: 1 },
  { species: "Devil Tree", count: 1 },
  { species: "Hari champa", count: 1 },
  { species: "Pride of India", count: 1 },
  { species: "Pinwheelflower", count: 1 },
  { species: "Wood apple", count: 1 },
  { species: "Palas tree", count: 1 },
  { species: "Indian Elm", count: 1 },
]

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
