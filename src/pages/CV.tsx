const handleDownload = () => {
  const existing = document.getElementById("html2pdf-script");
  const run = () => {
    const element = document.querySelector(".cv-page") as HTMLElement;
    (window as any).html2pdf().set({
      margin: 0,
      filename: "CV-Ahmadou-Moustapha-Tounkara.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).from(element).save();
  };
  if (existing) { run(); return; }
  const script = document.createElement("script");
  script.id = "html2pdf-script";
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = run;
  document.head.appendChild(script);
};

const CV = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #f5f5f5; }

        .cv-page {
          font-family: 'Inter', sans-serif;
          font-size: 10pt;
          color: #1a1a1a;
          background: #fff;
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 18mm 18mm 16mm 18mm;
          line-height: 1.5;
        }

        @media print {
          body { background: #fff; }
          .cv-page { margin: 0; padding: 15mm 16mm 14mm 16mm; box-shadow: none; }
          .no-print { display: none !important; }
        }

        @media screen {
          .cv-page { box-shadow: 0 4px 32px rgba(0,0,0,0.12); margin: 32px auto; }
        }

        /* Header */
        .cv-name {
          font-size: 28pt;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .cv-title {
          font-size: 9pt;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 10px;
        }
        .cv-contact {
          font-size: 9pt;
          color: #444;
          display: flex;
          flex-wrap: wrap;
          gap: 4px 12px;
          margin-bottom: 2px;
        }
        .cv-contact a { color: #444; text-decoration: none; }
        .cv-divider {
          border: none;
          border-top: 1.5px solid #1a1a1a;
          margin: 12px 0 16px 0;
        }

        /* Sections */
        .cv-section { margin-bottom: 18px; }
        .cv-section-title {
          font-size: 9.5pt;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-bottom: 1px solid #ddd;
          padding-bottom: 4px;
          margin-bottom: 12px;
        }

        /* Formation */
        .cv-edu-item { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
        .cv-edu-item-left {}
        .cv-edu-degree { font-weight: 600; font-size: 10pt; }
        .cv-edu-school { font-size: 9pt; color: #555; }
        .cv-edu-date { font-size: 9pt; color: #777; font-style: italic; white-space: nowrap; }

        /* Compétences */
        .cv-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 16px; }
        .cv-skills-col-title { font-weight: 600; font-size: 9.5pt; margin-bottom: 6px; }
        .cv-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .cv-tag {
          border: 1px solid #ccc;
          border-radius: 99px;
          padding: 1px 8px;
          font-size: 8.5pt;
          color: #333;
          white-space: nowrap;
        }

        /* Projets */
        .cv-project { margin-bottom: 10px; }
        .cv-project-header { display: flex; justify-content: space-between; align-items: baseline; }
        .cv-project-title { font-weight: 600; font-size: 10pt; }
        .cv-project-type { font-size: 9pt; color: #777; font-style: italic; }
        .cv-project-desc { font-size: 9pt; color: #444; margin-top: 2px; }
        .cv-project-link { color: #555; font-size: 8.5pt; }

        /* Profil / Expérience */
        .cv-text { font-size: 9.5pt; color: #333; line-height: 1.6; text-align: justify; }

        /* Langues */
        .cv-langs { display: flex; gap: 20px; flex-wrap: wrap; }
        .cv-lang { font-size: 9.5pt; }
        .cv-lang strong { font-weight: 600; }

        /* Intérêts */
        .cv-interests { display: flex; gap: 6px; flex-wrap: wrap; }

        /* Print button */
        .print-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          border-radius: 99px;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          z-index: 100;
          font-family: 'Inter', sans-serif;
        }
        .print-btn:hover { background: #333; }
      `}</style>

      <button className="print-btn no-print" onClick={handleDownload}>
        Télécharger en PDF
      </button>

      <div className="cv-page">
        {/* Header */}
        <div className="cv-name">Ahmadou Moustapha Tounkara</div>
        <div className="cv-title">Artiste Peintre · Décorateur Moderne · Fondateur de LARTISKA</div>
        <div className="cv-contact">
          <span>Dakar / Sénégal</span>
          <a href="mailto:Lartiska2@gmail.com">Lartiska2@gmail.com</a>
          <span>+221 78 544 63 63</span>
          <a href="https://wa.me/221785446363" target="_blank" rel="noreferrer">wa.me/221785446363</a>
          <span>Instagram · Facebook · TikTok : LARTISKA</span>
        </div>
        <hr className="cv-divider" />

        {/* Profil */}
        <div className="cv-section">
          <div className="cv-section-title">Profil</div>
          <p className="cv-text">
            Artiste peintre sénégalais et fondateur de LARTISKA, une entreprise spécialisée dans la peinture
            décorative, les créations murales artistiques, le carrelage design et le plafonnage moderne.
            Passionné par l'art, les couleurs et l'innovation visuelle, je transforme les espaces en
            véritables œuvres d'art à travers des concepts modernes, élégants et uniques. Créatif et
            ambitieux, j'accompagne particuliers, entreprises et professionnels dans la réalisation de
            projets décoratifs alliant esthétique, qualité et originalité. Mon objectif est de faire de
            LARTISKA une référence de l'art décoratif moderne au Sénégal et en Afrique.
          </p>
        </div>

        {/* Formation */}
        <div className="cv-section">
          <div className="cv-section-title">Formation</div>

          <div className="cv-edu-item">
            <div className="cv-edu-item-left">
              <div className="cv-edu-degree">Licence en Infographie</div>
              <div className="cv-edu-school">Université Numérique du Sénégal — Design visuel, création numérique & communication graphique</div>
            </div>
            <div className="cv-edu-date">En cours</div>
          </div>

          <div className="cv-edu-item">
            <div className="cv-edu-item-left">
              <div className="cv-edu-degree">Baccalauréat Scientifique</div>
              <div className="cv-edu-school">Lycée Demba Diop</div>
            </div>
            <div className="cv-edu-date">2018</div>
          </div>
        </div>

        {/* Compétences */}
        <div className="cv-section">
          <div className="cv-section-title">Compétences</div>
          <div className="cv-skills-grid">
            <div>
              <div className="cv-skills-col-title">🎨 Art & Décoration</div>
              <div className="cv-tags">
                <span className="cv-tag">Peinture décorative</span>
                <span className="cv-tag">Décoration murale artistique</span>
                <span className="cv-tag">Effets artistiques modernes</span>
                <span className="cv-tag">Design intérieur</span>
                <span className="cv-tag">Créativité visuelle</span>
                <span className="cv-tag">Finitions haut de gamme</span>
              </div>
            </div>
            <div>
              <div className="cv-skills-col-title">🧱 Aménagement & Travaux</div>
              <div className="cv-tags">
                <span className="cv-tag">Carrelage design</span>
                <span className="cv-tag">Plafonnage moderne</span>
                <span className="cv-tag">Pose et finitions</span>
                <span className="cv-tag">Rénovation d'espaces</span>
                <span className="cv-tag">Aménagement intérieur</span>
                <span className="cv-tag">Transformation esthétique</span>
              </div>
            </div>
            <div>
              <div className="cv-skills-col-title">✨ Créatif & Design</div>
              <div className="cv-tags">
                <span className="cv-tag">Harmonie des couleurs</span>
                <span className="cv-tag">Concepts artistiques</span>
                <span className="cv-tag">Identité visuelle</span>
                <span className="cv-tag">Décoration personnalisée</span>
                <span className="cv-tag">Design moderne</span>
                <span className="cv-tag">Innovation visuelle</span>
                <span className="cv-tag">Infographie</span>
              </div>
            </div>
            <div>
              <div className="cv-skills-col-title">📱 Communication & Digital</div>
              <div className="cv-tags">
                <span className="cv-tag">Communication visuelle</span>
                <span className="cv-tag">Instagram</span>
                <span className="cv-tag">Facebook</span>
                <span className="cv-tag">TikTok</span>
                <span className="cv-tag">Relation client</span>
                <span className="cv-tag">Présentation de projets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projets */}
        <div className="cv-section">
          <div className="cv-section-title">Projets & Réalisations</div>

          <div className="cv-project">
            <div className="cv-project-header">
              <span className="cv-project-title">LARTISKA — Art & Décoration Moderne</span>
              <span className="cv-project-type">Fondateur</span>
            </div>
            <p className="cv-project-desc">
              Entreprise spécialisée dans la décoration murale artistique, la peinture moderne, le carrelage
              design et le plafonnage esthétique. LARTISKA accompagne ses clients dans la transformation de
              leurs espaces à travers des créations uniques, élégantes et innovantes.
            </p>
          </div>

          <div className="cv-project">
            <div className="cv-project-header">
              <span className="cv-project-title">Réalisations artistiques</span>
              <span className="cv-project-type">Sur-mesure</span>
            </div>
            <p className="cv-project-desc">
              Décorations murales personnalisées · Transformations d'intérieurs · Concepts artistiques
              modernes · Espaces résidentiels et professionnels.
            </p>
          </div>
        </div>

        {/* Expérience */}
        <div className="cv-section">
          <div className="cv-section-title">Expérience</div>
          <p className="cv-text">
            Je développe mon savoir-faire à travers des projets artistiques concrets et des réalisations
            décoratives variées, en perfectionnant continuellement mes techniques, ma créativité et mon
            sens du détail afin d'offrir des résultats uniques et professionnels à chaque client.
          </p>
        </div>

        {/* Langues */}
        <div className="cv-section">
          <div className="cv-section-title">Langues</div>
          <div className="cv-langs">
            <span className="cv-lang"><strong>Français</strong> — Excellent</span>
            <span className="cv-lang"><strong>Wolof</strong> — Excellent</span>
            <span className="cv-lang"><strong>Anglais</strong> — Intermédiaire</span>
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className="cv-section">
          <div className="cv-section-title">Centres d'intérêt</div>
          <div className="cv-interests">
            {["🎨 Art & Création", "🏠 Design intérieur", "📸 Réseaux sociaux & contenu visuel", "🚀 Entrepreneuriat", "✨ Innovation artistique"].map((i) => (
              <span key={i} className="cv-tag">{i}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
