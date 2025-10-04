// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">

      <main className="home-main">
        {/* Section 1 */}
        <section
          className="home-hero"
          style={{ backgroundImage: "url('/images/pappakudi.png')" }}
        >
          <div className="home-hero-content">
            <h1>What is a Nandavanam?</h1>
            <p>
 A Nandavanam is a sanctuary  for native trees, medicinal plants, and shrubs. Ancient temples dedicated to the Hindu deities of Shiva, Vishnu, and Murugan often included these gardens, which were meticulously maintained by a dedicated community known as the Nandavana Kudis. 
Key features of historic Nandavanams include the presence of  Sacred Trees (Sthala Vrikshas), where each temple had a tree  symbolizing its spiritual essence. These gardens also housed  Functional Flora, with flowers for rituals, seeds from trees like  Punnai and Illupai for oil lamps, and medicinal plants like Tulsi and  Vilvam used in the preparation of holy water. 
Cultural Practices  were deeply embedded in these gardens, with stone platforms  (Poo Palagai) serving as spaces for gathering flowers and weaving  garlands, combining both practical and cultural roles. 
Additionally,  Historical Inscriptions highlight that lands were explicitly donated  for the upkeep of temple gardens, underscoring their significant  historical and spiritual importance. 
In recent times, though, the importance given to temple  architecture, artistic sculptures, and history is unfortunately not  extended to the sacred plants within temple grounds, which is  disheartening. 
Traditionally, sanctuaries for deities were established beneath  sacred trees (Sthala Vrikshas), with worship taking place in  their shade. A notable example is the Arulmigu Courtallanathar  Temple in Tenkasi district, where a lingam placed beneath  the Kurumbala (Jackfruit) tree is immortalized in sculpture.  Thirugnanasambandar’s Thiruppathigam also includes 11 verses,  known as Kurumbalapathigam, dedicated to the Kurumbala tree.  Even today, the deity Kurumbala Nathar, located beneath the tree,  continues to receive significant reverence and worship.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section
          className="home-hero section-divider"
          style={{ backgroundImage: "url('/images/butterfly.JPG')" }}
        >
          <div className="home-hero-content">
            <h2>What Biodiversity does a Nandavanam Support?</h2>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
