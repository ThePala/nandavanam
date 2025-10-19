import React from "react";
import "../styles/team.css";

const PLACEHOLDER = `${import.meta.env.BASE_URL}images/team/placeholder.png`; // add a simple silhouette here

const TEAM = [
  { name: "M. Mathivanan", role: "Coordinator", photo: "images/team/mathivanan.jpg" },
  { name: "A. Thanigaivel", photo: "images/team/thanigaivel.jpg" },
  { name: "A. Saravanan", photo: "images/team/saravanan.jpg" },                          // no role, no photo
  { name: "S. Thalavaipandi", photo: "images/team/thalavaipandi.jpg" }, // no role
  { name: "S. Thamizhazhagan", photo: "images/team/tamizhazhagan.jpg" },
  { name: "Maria Antony", photo: "images/team/antont.jpg" },
  { name: "K. Thiraviam", photo: "images/team/thiraviam.png" },
  { name: "A. Arunachalam", photo: "images/team/arunachalam.jpg"},
  { name: "M. Ganesan", photo: "images/team/ganesan.png" },
  { name: "Vinod M Kumar", photo: "images/team/vinod.png" },
  { name: "Geethu Ganga Sankar", role: "Intern", photo: "images/team/geethu.jpg" },
  { name: "Arshak", role: "Intern", photo: "images/team/Arshak.JPG" },
  { name: "Pala Adithyan", role: "Website Design & Dev", photo: "images/team/adithyan.png"  },
];

export default function Team() {
  return (
    <main className="team-page">
      <section className="team-hero">
        <img src={`${import.meta.env.BASE_URL}images/team/team-hero.jpg`} alt="TamizhMani_Team Photo" className="team-hero__img" />
        <h1 className="team-hero__title">Our Team</h1>
      </section>

      <section className="team-wrap">
        <ul className="team-grid team-grid--1-4">
          {TEAM.map((m, i) => {
            const imgSrc = m.photo ? `${import.meta.env.BASE_URL}${m.photo}` : PLACEHOLDER;
            return (
              <li key={i} className="member-card">
                <div className="member-photo" aria-hidden="true">
                  <img src={imgSrc} alt="" loading="lazy" />
                </div>
                <div className="member-meta">
                  <h3 className="member-name">{m.name}</h3>
                  {m.role ? <p className="member-role">{m.role}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
