// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
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
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pappakudi.jpg)` }}
        >
          <div className="home-hero-content">
            <h1>What is a Nandavanam?</h1>
            <p>
 A Nandavanam is a sanctuary  for native trees, medicinal plants, and shrubs. Ancient temples dedicated to the Hindu deities of Shiva, Vishnu, and Murugan often included these gardens, which were meticulously maintained by a dedicated community known as the Nandavana Kudis. 
Key features of historic Nandavanams include the presence of  Sacred Trees (Sthala Vrikshas), where each temple had a tree  symbolizing its spiritual essence. These gardens also housed  Functional Flora, with flowers for rituals, seeds from trees like  Punnai and Illupai for oil lamps, and medicinal plants like Tulsi and  Vilvam used in the preparation of holy water. 
Cultural Practices  were deeply embedded in these gardens, with stone platforms  (Poo Palagai) serving as spaces for gathering flowers and weaving  garlands, combining both practical and cultural roles. 
Additionally,  Historical Inscriptions highlight that lands were explicitly donated  for the upkeep of temple gardens, underscoring their significant  historical and spiritual importance. 
In recent times, though, the importance given to temple  architecture, artistic sculptures, and history is unfortunately not  extended to the sacred plants within temple grounds, which is  disheartening. 
<br /><br />

Traditionally, sanctuaries for deities were established beneath  sacred trees (Sthala Vrikshas), with worship taking place in  their shade. A notable example is the Arulmigu Courtallanathar  Temple in Tenkasi district, where a lingam placed beneath  the Kurumbala (Jackfruit) tree is immortalized in sculpture.  Thirugnanasambandar’s Thiruppathigam also includes 11 verses,  known as Kurumbalapathigam, dedicated to the Kurumbala tree.  Even today, the deity Kurumbala Nathar, located beneath the tree,  continues to receive significant reverence and worship.
            </p>
          </div>
        </section>

        {/* Section: Star Plants */}
        <section
          className="home-hero section-divider"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/poopalagai.JPG)` }}
        >
          <div className="home-hero-content">
            <h2>What are Star Plants?</h2>

            <StarPlantsCarousel />

            <p>
According to the Vedic system, groups of stars 
in the sky were assigned a unique tree for 27 constellations/nakshatra 
based on the birth of individuals. 
It is believed that Sun and Moon have a different impact on humans 
during their transition via 27 nakshatras/constellations. 
Furthermore, it is assumed that the sun/moon's impact could be modulated or improved with planting or 
worshipping a specific tree associated with nakshatra. <br></br>
In ancient times, community leaders established nakshatra van adjacent to sacred groves with 
characteristic trees for worshipping, honoring, and maintaining good health.
- https://doi.org/10.1016/j.sajb.2022.08.029
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section
          className="home-hero section-divider"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/butterfly.JPG)` }}
        >
          <div className="home-hero-content">
            <h2>What Biodiversity does a Nandavanam Support?</h2>
            <p>
Owing to their relatively longer history of formal protection of forests, sacred groves host unique assemblages of biodiversity – species and genes – that are not found elsewhere, kind of like a repository.

“It is difficult to imagine being able to conserve all of India's biodiversity in formal protected areas, which cover less than 5% of our geographic area,” said Anand Osuri, a PhD student at the National Centre for Biological Sciences. “It is important that we understand and utilise the potential of areas outside protected areas to conserve biodiversity. Although small and often fragmented, these networks can provide resources such as fruiting trees or nesting sites, as well as act as stepping stones for wildlife across human-used landscapes.”
In their study of the ecological value of 61 temples, they found 135 species of shrubs and trees such as mahua, bael, neem, arjuna, jackfruit, Indian sandalwood, palash. In terms of biodiversity, they observed 51 bird species, 16 butterfly species and four mammals.

“These gardens have a healthy population of native trees and they attract frugivores and small mammals,” said Mathivanan. <br></br>
https://scroll.in/article/755410/what-indias-ancient-sacred-sites-can-teach-us-about-forests#:~:text=Sacred%20groves%20form%20a%20network,Bhagwat%2C%20lecturer%2C%20faculty%20of%20science            
            </p>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;

function StarPlantsCarousel() {
  const [images, setImages] = useState([]);
  const trackRef = React.useRef(null);
  const hoverRef = React.useRef(false);

  useEffect(() => {
    let mounted = true;
        fetch(`${import.meta.env.BASE_URL}images/starplants/manifest.json`)
      .then(res => res.json())
      .then(list => {
        if (!mounted) return;
        if (!Array.isArray(list)) return;

        const parsed = list.map(item => {
          if (typeof item === 'string') {
            const file = item;
            const name = file.split('/').pop().replace(/\.[^/.]+$/, '');
            return { file: `${import.meta.env.BASE_URL}images/starplants/${file}`, name, star: '' };
          }

          // object form
          const fileField = item.file || item.filename || item.src || '';
          const file = fileField || '';
          const name = item.name || (file ? file.split('/').pop().replace(/\.[^/.]+$/, '') : '');
          const star = item.star || item.starName || '';
          const fileUrl = file.startsWith('/') ? `${import.meta.env.BASE_URL}${file.slice(1)}` : `${import.meta.env.BASE_URL}images/starplants/${file}`;
          return { file: fileUrl, name, star };
        });

        setImages(parsed.filter(Boolean));
      })
      .catch(() => {
        if (!mounted) return;
        setImages([
          { file: `${import.meta.env.BASE_URL}images/starplants/templ2.JPG`, name: 'templ2', star: '' },
          { file: `${import.meta.env.BASE_URL}images/starplants/templ3.JPG`, name: 'templ3', star: '' },
          { file: `${import.meta.env.BASE_URL}images/starplants/templ4.jpg`, name: 'templ4', star: '' },
          { file: `${import.meta.env.BASE_URL}images/starplants/templ5.jpg`, name: 'templ5', star: '' }
        ]);
      });

    return () => { mounted = false; };
  }, []);

  // Manual scroll handlers -- disable auto-scroll
  const scrollBy = (amount) => {
    const el = trackRef.current;
    if (!el) return;
    // smooth scroll by amount pixels
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handlePrev = () => scrollBy(-200);
  const handleNext = () => scrollBy(200);

  if (!images.length) return <p>Loading star plants...</p>;

  return (
    <div className="starplants-wrap">
      <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous">←</button>
      <div
        className="starplants-carousel"
        ref={trackRef}
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; }}
      >
        {images.map((it, i) => {
          const src = it.file;
          const name = it.name || (src ? src.split('/').pop().replace(/\.[^/.]+$/, '') : '');
          const starName = it.star || '';
          return (
            <figure key={i} className="starplant-item">
              <div className="starplant-card">
                <div className="starplant-image-wrap">
                  <img src={src} alt={name} loading="lazy" />
                </div>
                <div className="starplant-name">{name}</div>
                <div className="starplant-starname">{starName}</div>
              </div>
            </figure>
          );
        })}
      </div>
      <button className="carousel-arrow right" onClick={handleNext} aria-label="Next">→</button>
    </div>
  );
}
