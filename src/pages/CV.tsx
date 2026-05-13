const handleDownload = () => {
  const existing = document.getElementById("html2pdf-script");
  const run = () => {
    const element = document.querySelector(".cv-page") as HTMLElement;
    // Passe en mode "export" pour neutraliser les marges écran et la box-shadow
    element.classList.add("cv-export");
    (window as any)
      .html2pdf()
      .set({
        margin: 0,
        filename: "CV-Ahmadou-Moustapha-Tounkara.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, windowWidth: 794 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait", compress: true },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      })
      .from(element)
      .save()
      .then(() => element.classList.remove("cv-export"))
      .catch(() => element.classList.remove("cv-export"));
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
          font-size: 9pt;
          color: #1a1a1a;
          background: #fff;
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 12mm 14mm 10mm 14mm;
          line-height: 1.42;
        }

        @media print {
          body { background: #fff; }
          .cv-page { margin: 0; padding: 10mm 13mm 9mm 13mm; box-shadow: none; min-height: auto; }
          .no-print { display: none !important; }
        }

        @media screen {
          .cv-page { box-shadow: 0 4px 32px rgba(0,0,0,0.12); margin: 32px auto; }
        }

        /* Mode export PDF : on neutralise tout ce qui est "écran" */
        .cv-page.cv-export {
          margin: 0 !important;
          box-shadow: none !important;
          padding: 10mm 13mm 9mm 13mm !important;
          min-height: auto !important;
        }

        /* ===== HEADER ===== */
        .cv-name {
          font-size: 24pt;
          font-weight: 700;
          letter-spacing: -0.6px;
          line-height: 1.05;
          margin-bottom: 3px;
        }
        .cv-title {
          font-size: 8.5pt;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 7px;
        }
        .cv-contact {
          font-size: 8.5pt;
          color: #444;
          display: flex;
          flex-wrap: wrap;
          gap: 2px 10px;
          line-height: 1.5;
        }
        .cv-contact a { color: #444; text-decoration: none; }
        .cv-divider {
          border: none;
          border-top: 1.2px solid #1a1a1a;
          margin: 8px 0 10px 0;
        }

        /* ===== 2-COL LAYOUT ===== */
        .cv-body {
          display: grid;
          grid-template-columns: 38% 1fr;
          gap: 0 14mm;
        }

        /* ===== SECTIONS ===== */
        .cv-section { margin-bottom: 10px; }
        .cv-section:last-child { margin-bottom: 0; }
        .cv-section-title {
          font-size: 8.5pt;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 0.8px solid #ddd;
          padding-bottom: 3px;
          margin-bottom: 7px;
        }

        /* Profil + Expérience texte */
        .cv-text {
          font-size: 8.7pt;
          color: #2a2a2a;
          line-height: 1.5;
          text-align: justify;
        }

        /* ===== FORMATION ===== */
        .cv-edu-item { margin-bottom: 6px; }
        .cv-edu-item:last-child { margin-bottom: 0; }
        .cv-edu-row { display: flex; justify-content: space-between; align-items: baseline; gap: 6px; }
        .cv-edu-degree { font-weight: 600; font-size: 9pt; line-height: 1.3; }
        .cv-edu-school { font-size: 8.2pt; color: #555; line-height: 1.35; margin-top: 1px; }
        .cv-edu-date { font-size: 8pt; color: #777; font-style: italic; white-space: nowrap; }

        /* ===== COMPÉTENCES ===== */
        .cv-skills-block { margin-bottom: 7px; }
        .cv-skills-block:last-child { margin-bottom: 0; }
        .cv-skills-col-title { font-weight: 600; font-size: 8.7pt; margin-bottom: 4px; }
        .cv-tags { display: flex; flex-wrap: wrap; gap: 3px 4px; }
        .cv-tag {
          border: 0.8px solid #ccc;
          border-radius: 99px;
          padding: 1px 7px;
          font-size: 7.8pt;
          color: #333;
          white-space: nowrap;
          line-height: 1.35;
        }

        /* ===== PROJETS ===== */
        .cv-project { margin-bottom: 6px; }
        .cv-project:last-child { margin-bottom: 0; }
        .cv-project-header { display: flex; justify-content: space-between; align-items: baseline; gap: 6px; }
        .cv-project-title { font-weight: 600; font-size: 8.8pt; }
        .cv-project-type { font-size: 8pt; color: #777; font-style: italic; white-space: nowrap; }
        .cv-project-desc { font-size: 8.3pt; color: #444; margin-top: 1px; line-height: 1.4; }

        /* ===== LANGUES + INTÉRÊTS ===== */
        .cv-langs { display: flex; flex-direction: column; gap: 3px; }
        .cv-lang { font-size: 8.7pt; display: flex; justify-content: space-between; gap: 6px; }
        .cv-lang strong { font-weight: 600; }
        .cv-lang em { font-style: normal; color: #777; font-size: 8.3pt; }

        .cv-interests { display: flex; flex-direction: column; gap: 3px; font-size: 8.5pt; color: #333; }

        /* ===== BOUTON IMPRIMER ===== */
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
        {/* ===== HEADER ===== */}
        <div className="cv-name">Ahmadou Moustapha Tounkara</div>
        <div className="cv-title">Maître Artisan · Finition Luxe</div>
        <div className="cv-contact">
          <span>Dakar / Sénégal</span>
          <a href="mailto:Lartiska2@gmail.com">Lartiska2@gmail.com</a>
          <span>+221 78 544 63 63</span>
          <a href="https://wa.me/221785446363" target="_blank" rel="noreferrer">wa.me/221785446363</a>
          <span>Instagram · Facebook · TikTok : LARTISKA</span>
        </div>
        <hr className="cv-divider" />

        <div className="cv-body">
          {/* ===== COLONNE GAUCHE ===== */}
          <div>
            <div className="cv-section">
              <div className="cv-section-title">Formation</div>
              <div className="cv-edu-item">
                <div className="cv-edu-row">
                  <div className="cv-edu-degree">Licence en Infographie</div>
                  <div className="cv-edu-date">En cours</div>
                </div>
                <div className="cv-edu-school">Université Numérique du Sénégal — Design visuel, création numérique &amp; communication graphique</div>
              </div>
              <div className="cv-edu-item">
                <div className="cv-edu-row">
                  <div className="cv-edu-degree">Baccalauréat Scientifique</div>
                  <div className="cv-edu-date">2018</div>
                </div>
                <div className="cv-edu-school">Lycée Demba Diop</div>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Langues</div>
              <div className="cv-langs">
                <span className="cv-lang"><strong>Français</strong><em>Excellent</em></span>
                <span className="cv-lang"><strong>Wolof</strong><em>Excellent</em></span>
                <span className="cv-lang"><strong>Anglais</strong><em>Intermédiaire</em></span>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Centres d'intérêt</div>
              <div className="cv-interests">
                <span>🎨 Art &amp; Création</span>
                <span>🏠 Design intérieur</span>
                <span>📸 Réseaux sociaux &amp; contenu visuel</span>
                <span>🚀 Entrepreneuriat</span>
                <span>✨ Innovation artistique</span>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Expérience</div>
              <p className="cv-text">
                Savoir-faire développé à travers des projets artistiques concrets et des réalisations
                décoratives variées. Perfectionnement continu des techniques, de la créativité et du sens
                du détail pour offrir des résultats uniques à chaque client.
              </p>
            </div>
          </div>

          {/* ===== COLONNE DROITE ===== */}
          <div>
            <div className="cv-section">
              <div className="cv-section-title">Profil</div>
              <p className="cv-text">
                Artiste peintre sénégalais et fondateur de LARTISKA, spécialisée dans la peinture
                décorative, les créations murales artistiques, le carrelage design et le plafonnage
                moderne. Passionné par l'art, les couleurs et l'innovation visuelle, je transforme les
                espaces en véritables œuvres d'art à travers des concepts modernes, élégants et uniques.
                Créatif et ambitieux, j'accompagne particuliers, entreprises et professionnels dans la
                réalisation de projets décoratifs alliant esthétique, qualité et originalité.
              </p>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Compétences</div>

              <div className="cv-skills-block">
                <div className="cv-skills-col-title">🎨 Art &amp; Décoration</div>
                <div className="cv-tags">
                  <span className="cv-tag">Peinture décorative</span>
                  <span className="cv-tag">Décoration murale artistique</span>
                  <span className="cv-tag">Effets modernes</span>
                  <span className="cv-tag">Design intérieur</span>
                  <span className="cv-tag">Finitions haut de gamme</span>
                </div>
              </div>

              <div className="cv-skills-block">
                <div className="cv-skills-col-title">🧱 Aménagement &amp; Travaux</div>
                <div className="cv-tags">
                  <span className="cv-tag">Carrelage design</span>
                  <span className="cv-tag">Plafonnage moderne</span>
                  <span className="cv-tag">Pose &amp; finitions</span>
                  <span className="cv-tag">Rénovation d'espaces</span>
                  <span className="cv-tag">Aménagement intérieur</span>
                </div>
              </div>

              <div className="cv-skills-block">
                <div className="cv-skills-col-title">✨ Créatif &amp; Design</div>
                <div className="cv-tags">
                  <span className="cv-tag">Harmonie des couleurs</span>
                  <span className="cv-tag">Concepts artistiques</span>
                  <span className="cv-tag">Identité visuelle</span>
                  <span className="cv-tag">Design moderne</span>
                  <span className="cv-tag">Innovation visuelle</span>
                  <span className="cv-tag">Infographie</span>
                </div>
              </div>

              <div className="cv-skills-block">
                <div className="cv-skills-col-title">📱 Communication &amp; Digital</div>
                <div className="cv-tags">
                  <span className="cv-tag">Communication visuelle</span>
                  <span className="cv-tag">Instagram</span>
                  <span className="cv-tag">Facebook</span>
                  <span className="cv-tag">TikTok</span>
                  <span className="cv-tag">Relation client</span>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Projets &amp; Réalisations</div>

              <div className="cv-project">
                <div className="cv-project-header">
                  <span className="cv-project-title">LARTISKA — Art &amp; Décoration Moderne</span>
                  <span className="cv-project-type">Fondateur</span>
                </div>
                <p className="cv-project-desc">
                  Décoration murale artistique, peinture moderne, carrelage design et plafonnage
                  esthétique. Accompagnement des clients dans la transformation de leurs espaces à
                  travers des créations uniques et élégantes.
                </p>
              </div>

              <div className="cv-project">
                <div className="cv-project-header">
                  <span className="cv-project-title">Réalisations artistiques sur-mesure</span>
                  <span className="cv-project-type">Récurrent</span>
                </div>
                <p className="cv-project-desc">
                  Décorations murales personnalisées · Transformations d'intérieurs · Concepts modernes ·
                  Espaces résidentiels et professionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
