import React from "react";
import "../styles/partners.css";

// === DATA ===
const partnerLogos = [
  "/images/partners/Picture1",
  "/images/partners/Picture2",
  "/images/partners/Picture3",
  "/images/partners/Picture4",
  "/images/partners/Picture5",
  "/images/partners/Picture6",
  "/images/partners/Picture7",
  "/images/partners/Picture8",
  "/images/partners/Picture9",
];

const partnerNames = [
  "Dr Prabhu & Family",
  "Dr Michael Jayaraj",
  "Smt. Sharadha Ramadoss",
  "Dr A. Rajesh, Government Sidha College, Palayamkottai",
  "Shri. Jawahar",
  "Shri. Saravana Perumal",
  "Nellai Press Club",
];

const funderLogos = [
  "/images/partners/FPicture1",
  "/images/partners/FPicture2",
  "/images/partners/FPicture3",
  "/images/partners/FPicture4",
  "/images/partners/FPicture5",
  "/images/partners/FPicture6",
];

const funderNames = [
  "Shri Jayashankar & Family",
  "Smt. Usha & Family",
  "Shri. Rajendran & Family",
];

// === SMALL IMG component with extension fallback ===
function Img({ base, className, alt }) {
  const [src, setSrc] = React.useState(`${base}.png`);
  const tried = React.useRef(new Set(["png"]));
  const exts = ["webp", "jpg", "jpeg", "svg"];
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => {
        for (const e of exts) {
          if (!tried.current.has(e)) {
            tried.current.add(e);
            setSrc(`${base}.${e}`);
            return;
          }
        }
      }}
    />
  );
}

export default function Partners() {
  return (
    <main className="partners-page">
      <section className="wrap">
        {/* ===== Our Partners ===== */}
        <h1 className="title">Our Partners</h1>

        {/* Logos only: 5 in row 1, 4 in row 2 on desktop */}
        <div className="grid partners-grid">
          {partnerLogos.map((p, i) => (
            <div key={i} className="cell">
              <Img base={p} alt={`Partner ${i + 1}`} className="logo partner-logo" />
            </div>
          ))}
        </div>

        {/* Names block (separate from logos) */}
        <div className="names-grid">
          {partnerNames.map((n, i) => (
            <div key={i} className="name-item">{n}</div>
          ))}
        </div>

        <hr className="sep" />

        {/* ===== Our Funding Partners ===== */}
        <h2 className="title">Our Funding Partners</h2>

        {/* Logos only: 3 + 3 on desktop */}
        <div className="grid funders-grid">
          {funderLogos.map((f, i) => (
            <div key={i} className="cell">
              <Img base={f} alt={`Funding Partner ${i + 1}`} className="logo funder-logo" />
            </div>
          ))}
        </div>

        {/* Names block (separate) */}
        <div className="names-grid">
          {funderNames.map((n, i) => (
            <div key={i} className="name-item">{n}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
