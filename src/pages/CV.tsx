const loadHtml2Pdf = () => {
  return new Promise<any>((resolve, reject) => {
    if ((window as any).html2pdf) {
      resolve((window as any).html2pdf);
      return;
    }

    const existing = document.getElementById("html2pdf-script") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve((window as any).html2pdf), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "html2pdf-script";
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.async = true;
    script.onload = () => resolve((window as any).html2pdf);
    script.onerror = () => reject(new Error("Impossible de charger html2pdf.js"));
    document.head.appendChild(script);
  });
};

const handleDownload = async () => {
  const element = document.querySelector(".cv-page") as HTMLElement | null;
  if (!element) return;

  const holder = document.createElement("div");
  holder.className = "pdf-holder";

  const clone = element.cloneNode(true) as HTMLElement;
  clone.classList.add("cv-export");
  holder.appendChild(clone);
  document.body.appendChild(holder);

  try {
    const html2pdf = await loadHtml2Pdf();

    if ("fonts" in document) {
      await (document as any).fonts.ready;
    }

    await new Promise((resolve) => requestAnimationFrame(resolve));

    await html2pdf()
      .set({
        margin: 0,
        filename: "CV-Ahmadou-Moustapha-Tounkara.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          scrollX: 0,
          scrollY: 0,
          x: 0,
          y: 0,
          windowWidth: 794,
          windowHeight: 1123,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          compress: true,
        },
        pagebreak: { mode: ["css", "legacy"] },
      })
      .from(clone)
      .save();
  } finally {
    holder.remove();
  }
};

const CV = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        body { background: #eef0f3; }

        @page { size: A4; margin: 0; }

        .cv-page {
          --ink: #171717;
          --muted: #666666;
          --soft: #f5f1ea;
          --soft-2: #fbfaf8;
          --line: #ded6ca;
          --accent: #9b6a2f;
          --accent-dark: #563819;

          width: 210mm;
          height: 296.6mm;
          margin: 28px auto;
          padding: 8.5mm 9.5mm;
          overflow: hidden;
          background: #ffffff;
          color: var(--ink);
          font-family: 'Inter', Arial, sans-serif;
          font-size: 8.15pt;
          line-height: 1.32;
          box-shadow: 0 18px 55px rgba(15, 23, 42, 0.16);
          display: flex;
          flex-direction: column;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .cv-export {
          margin: 0 !important;
          box-shadow: none !important;
          width: 210mm !important;
          height: 296.6mm !important;
          padding: 8.5mm 9.5mm !important;
          overflow: hidden !important;
        }

        .pdf-holder {
          position: fixed;
          left: 0;
          top: 0;
          width: 210mm;
          height: 296.6mm;
          overflow: hidden;
          background: #ffffff;
          pointer-events: none;
          z-index: 2147483647;
        }

        @media print {
          body { background: #ffffff; }
          .no-print { display: none !important; }
          .cv-page { margin: 0; box-shadow: none; }
        }

        .print-btn {
          position: fixed;
          right: 26px;
          bottom: 26px;
          z-index: 1000;
          border: 0;
          border-radius: 999px;
          padding: 12px 22px;
          background: #171717;
          color: #ffffff;
          font-family: 'Inter', Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
        }
        .print-btn:hover { background: #2b2b2b; }

        .cv-topbar {
          height: 2.2mm;
          width: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--accent-dark), var(--accent), #d0a15b);
          margin-bottom: 5.2mm;
        }

        .cv-header {
          display: grid;
          grid-template-columns: 1fr 64mm;
          gap: 7mm;
          align-items: end;
          padding-bottom: 4.2mm;
          border-bottom: 1px solid var(--line);
        }

        .cv-name {
          margin: 0;
          color: var(--ink);
          font-size: 22.8pt;
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.85px;
        }

        .cv-title {
          margin-top: 2.3mm;
          color: var(--accent-dark);
          font-size: 8.4pt;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .cv-contact-card {
          border-left: 3px solid var(--accent);
          padding: 2.8mm 3.4mm;
          border-radius: 3.2mm;
          background: var(--soft-2);
        }

        .cv-contact {
          display: grid;
          gap: 1.1mm;
          color: #3e3e3e;
          font-size: 7.55pt;
          line-height: 1.25;
        }
        .cv-contact span,
        .cv-contact a {
          color: #3e3e3e;
          text-decoration: none;
          overflow-wrap: anywhere;
        }
        .cv-contact b {
          display: inline-block;
          min-width: 13mm;
          color: var(--accent-dark);
          font-weight: 800;
        }

        .cv-main {
          display: grid;
          grid-template-columns: 64mm 1fr;
          gap: 6.8mm;
          flex: 1;
          min-height: 0;
          padding-top: 5.2mm;
        }

        .cv-sidebar {
          border-radius: 5mm;
          background: var(--soft);
          padding: 5mm 4.2mm;
          min-height: 0;
        }

        .cv-content {
          min-height: 0;
          padding-right: 0.5mm;
        }

        .cv-section { margin-bottom: 4.2mm; }
        .cv-section.compact { margin-bottom: 3.4mm; }
        .cv-section:last-child { margin-bottom: 0; }

        .cv-section-title {
          position: relative;
          display: flex;
          align-items: center;
          gap: 2mm;
          margin-bottom: 2.4mm;
          color: var(--accent-dark);
          font-size: 8.25pt;
          font-weight: 800;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }
        .cv-section-title::before {
          content: "";
          width: 4.8mm;
          height: 1.4mm;
          border-radius: 99px;
          background: var(--accent);
          flex: 0 0 auto;
        }
        .cv-content .cv-section-title {
          padding-bottom: 1.6mm;
          border-bottom: 1px solid var(--line);
        }

        .cv-text {
          margin: 0;
          color: #2c2c2c;
          font-size: 8.1pt;
          line-height: 1.42;
          text-align: justify;
        }

        .cv-item { margin-bottom: 3mm; }
        .cv-item:last-child { margin-bottom: 0; }

        .cv-item-head {
          display: flex;
          justify-content: space-between;
          gap: 3mm;
          align-items: baseline;
        }
        .cv-item-title {
          color: var(--ink);
          font-size: 8.35pt;
          font-weight: 800;
          line-height: 1.18;
        }
        .cv-date {
          color: var(--accent-dark);
          font-size: 7.25pt;
          font-weight: 700;
          white-space: nowrap;
        }
        .cv-subtitle {
          margin-top: 0.8mm;
          color: var(--muted);
          font-size: 7.45pt;
          line-height: 1.28;
        }

        .cv-langs { display: grid; gap: 1.8mm; }
        .cv-lang {
          display: flex;
          justify-content: space-between;
          gap: 3mm;
          padding-bottom: 1.4mm;
          border-bottom: 1px dashed #d4c8b9;
          font-size: 7.85pt;
        }
        .cv-lang strong { font-weight: 800; }
        .cv-lang em { color: var(--muted); font-style: normal; }

        .cv-interests {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5mm;
          color: #343434;
          font-size: 7.65pt;
        }
        .cv-interest::before {
          content: "•";
          color: var(--accent);
          font-weight: 800;
          margin-right: 1.4mm;
        }

        .cv-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.2mm 4mm;
        }
        .cv-skill-block {
          padding: 3mm;
          border: 1px solid var(--line);
          border-radius: 3.5mm;
          background: #fffdfa;
        }
        .cv-skill-title {
          margin-bottom: 1.8mm;
          color: var(--accent-dark);
          font-size: 7.8pt;
          font-weight: 800;
        }
        .cv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1.3mm;
        }
        .cv-tag {
          display: inline-flex;
          align-items: center;
          border: 1px solid #ddd1c2;
          border-radius: 999px;
          padding: 0.55mm 1.8mm;
          background: #ffffff;
          color: #333333;
          font-size: 6.85pt;
          line-height: 1.1;
          white-space: nowrap;
        }

        .cv-project {
          margin-bottom: 3.2mm;
          padding-left: 3mm;
          border-left: 2px solid var(--accent);
        }
        .cv-project:last-child { margin-bottom: 0; }
        .cv-project-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 4mm;
          margin-bottom: 0.8mm;
        }
        .cv-project-title {
          color: var(--ink);
          font-size: 8.25pt;
          font-weight: 800;
        }
        .cv-project-type {
          color: var(--muted);
          font-size: 7.3pt;
          font-style: italic;
          white-space: nowrap;
        }
        .cv-project-desc {
          margin: 0;
          color: #3b3b3b;
          font-size: 7.85pt;
          line-height: 1.35;
        }

        .cv-highlight {
          margin-top: 3mm;
          padding: 3.2mm;
          border-radius: 3.5mm;
          background: #ffffff;
          border: 1px solid #e2d7c8;
          color: #333333;
          font-size: 7.65pt;
          line-height: 1.38;
        }
        .cv-highlight strong {
          display: block;
          margin-bottom: 1mm;
          color: var(--accent-dark);
          font-size: 7.8pt;
        }
      `}</style>

      <button className="print-btn no-print" onClick={handleDownload}>
        Télécharger en PDF
      </button>

      <main className="cv-page">
        <div className="cv-topbar" />

        <header className="cv-header">
          <div>
            <h1 className="cv-name">Ahmadou Moustapha Tounkara</h1>
            <div className="cv-title">Maître Artisan · Finition Luxe</div>
          </div>

          <div className="cv-contact-card">
            <div className="cv-contact">
              <span><b>Localité</b>Dakar / Sénégal</span>
              <a href="mailto:Lartiska2@gmail.com"><b>Email</b>Lartiska2@gmail.com</a>
              <span><b>Téléphone</b>+221 78 544 63 63</span>
              <a href="https://wa.me/221785446363" target="_blank" rel="noreferrer"><b>WhatsApp</b>wa.me/221785446363</a>
              <span><b>Réseaux</b>Instagram · Facebook · TikTok : LARTISKA</span>
            </div>
          </div>
        </header>

        <section className="cv-main">
          <aside className="cv-sidebar">
            <div className="cv-section">
              <div className="cv-section-title">Formation</div>
              <div className="cv-item">
                <div className="cv-item-head">
                  <div className="cv-item-title">Licence en Infographie</div>
                  <div className="cv-date">En cours</div>
                </div>
                <div className="cv-subtitle">Université Numérique du Sénégal — Design visuel, création numérique &amp; communication graphique</div>
              </div>
              <div className="cv-item">
                <div className="cv-item-head">
                  <div className="cv-item-title">Baccalauréat Scientifique</div>
                  <div className="cv-date">2018</div>
                </div>
                <div className="cv-subtitle">Lycée Demba Diop</div>
              </div>
            </div>

            <div className="cv-section compact">
              <div className="cv-section-title">Expérience</div>
              <p className="cv-text">
                Savoir-faire développé à travers des projets artistiques concrets et des réalisations décoratives variées. Perfectionnement continu des techniques, de la créativité et du sens du détail pour offrir des résultats uniques à chaque client.
              </p>
            </div>

            <div className="cv-section compact">
              <div className="cv-section-title">Langues</div>
              <div className="cv-langs">
                <span className="cv-lang"><strong>Français</strong><em>Excellent</em></span>
                <span className="cv-lang"><strong>Wolof</strong><em>Excellent</em></span>
                <span className="cv-lang"><strong>Anglais</strong><em>Intermédiaire</em></span>
              </div>
            </div>

            <div className="cv-section compact">
              <div className="cv-section-title">Centres d'intérêt</div>
              <div className="cv-interests">
                <span className="cv-interest">Art &amp; Création</span>
                <span className="cv-interest">Design intérieur</span>
                <span className="cv-interest">Réseaux sociaux &amp; contenu visuel</span>
                <span className="cv-interest">Entrepreneuriat</span>
                <span className="cv-interest">Innovation artistique</span>
              </div>
            </div>

            <div className="cv-highlight">
              <strong>Signature professionnelle</strong>
              Créations modernes, finitions propres, sens du détail et accompagnement personnalisé du client.
            </div>
          </aside>

          <div className="cv-content">
            <div className="cv-section">
              <div className="cv-section-title">Profil</div>
              <p className="cv-text">
                Artiste peintre sénégalais et fondateur de LARTISKA, spécialisée dans la peinture décorative, les créations murales artistiques, le carrelage design et le plafonnage moderne. Passionné par l'art, les couleurs et l'innovation visuelle, je transforme les espaces en véritables œuvres d'art à travers des concepts modernes, élégants et uniques. Créatif et ambitieux, j'accompagne particuliers, entreprises et professionnels dans la réalisation de projets décoratifs alliant esthétique, qualité et originalité.
              </p>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Compétences</div>
              <div className="cv-skills-grid">
                <div className="cv-skill-block">
                  <div className="cv-skill-title">Art &amp; Décoration</div>
                  <div className="cv-tags">
                    <span className="cv-tag">Peinture décorative</span>
                    <span className="cv-tag">Décoration murale artistique</span>
                    <span className="cv-tag">Effets modernes</span>
                    <span className="cv-tag">Design intérieur</span>
                    <span className="cv-tag">Finitions haut de gamme</span>
                  </div>
                </div>

                <div className="cv-skill-block">
                  <div className="cv-skill-title">Aménagement &amp; Travaux</div>
                  <div className="cv-tags">
                    <span className="cv-tag">Carrelage design</span>
                    <span className="cv-tag">Plafonnage moderne</span>
                    <span className="cv-tag">Pose &amp; finitions</span>
                    <span className="cv-tag">Rénovation d'espaces</span>
                    <span className="cv-tag">Aménagement intérieur</span>
                  </div>
                </div>

                <div className="cv-skill-block">
                  <div className="cv-skill-title">Créatif &amp; Design</div>
                  <div className="cv-tags">
                    <span className="cv-tag">Harmonie des couleurs</span>
                    <span className="cv-tag">Concepts artistiques</span>
                    <span className="cv-tag">Identité visuelle</span>
                    <span className="cv-tag">Design moderne</span>
                    <span className="cv-tag">Innovation visuelle</span>
                    <span className="cv-tag">Infographie</span>
                  </div>
                </div>

                <div className="cv-skill-block">
                  <div className="cv-skill-title">Communication &amp; Digital</div>
                  <div className="cv-tags">
                    <span className="cv-tag">Communication visuelle</span>
                    <span className="cv-tag">Instagram</span>
                    <span className="cv-tag">Facebook</span>
                    <span className="cv-tag">TikTok</span>
                    <span className="cv-tag">Relation client</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Projets &amp; Réalisations</div>
              <div className="cv-project">
                <div className="cv-project-head">
                  <span className="cv-project-title">LARTISKA — Art &amp; Décoration Moderne</span>
                  <span className="cv-project-type">Fondateur</span>
                </div>
                <p className="cv-project-desc">
                  Décoration murale artistique, peinture moderne, carrelage design et plafonnage esthétique. Accompagnement des clients dans la transformation de leurs espaces à travers des créations uniques et élégantes.
                </p>
              </div>

              <div className="cv-project">
                <div className="cv-project-head">
                  <span className="cv-project-title">Réalisations artistiques sur-mesure</span>
                  <span className="cv-project-type">Récurrent</span>
                </div>
                <p className="cv-project-desc">
                  Décorations murales personnalisées · Transformations d'intérieurs · Concepts modernes · Espaces résidentiels et professionnels.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CV;
