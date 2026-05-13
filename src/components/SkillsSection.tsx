import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Brush, Hammer, Sparkles, Share2, Rocket } from "lucide-react";

const skills = [
  {
    icon: Brush, tag: "Art & Décoration", title: "Peinture & Décoration Artistique",
    description: "Je transforme les espaces à travers des créations artistiques modernes, des décorations murales uniques et des concepts visuels conçus pour donner du caractère et de l'élégance à chaque environnement.",
    tags: ["Peinture décorative", "Décoration murale", "Effets artistiques modernes", "Design intérieur", "Créativité visuelle", "Finitions haut de gamme"],
    wide: true,
  },
  {
    icon: Hammer, tag: "Aménagement", title: "Carrelage & Plafonnage",
    description: "Je réalise des travaux de carrelage et de plafonnage modernes avec une attention particulière portée à la précision, à l'esthétique et à la qualité des finitions.",
    tags: ["Carrelage design", "Pose moderne", "Plafonnage esthétique", "Finitions professionnelles", "Aménagement intérieur", "Rénovation d'espaces"],
    wide: false,
  },
  {
    icon: Sparkles, tag: "Créatif", title: "Design & Identité Visuelle",
    description: "J'imagine des concepts décoratifs innovants en jouant sur les couleurs, les formes et les textures afin de créer des espaces uniques et mémorables.",
    tags: ["Design artistique", "Harmonie des couleurs", "Concepts créatifs", "Style moderne", "Décoration personnalisée", "Innovation visuelle"],
    wide: false,
  },
  {
    icon: Share2, tag: "Communication", title: "Présence Digitale & Relation Client",
    description: "À travers LARTISKA, je développe une image moderne et professionnelle en utilisant les réseaux sociaux et les outils numériques pour présenter mes réalisations et accompagner mes clients.",
    tags: ["Communication visuelle", "Instagram", "Facebook", "TikTok", "Relation client", "Marketing digital"],
    wide: false,
  },
  {
    icon: Rocket, tag: "Vision", title: "Construire une référence artistique moderne",
    description: "Mon ambition est de faire de LARTISKA une référence dans l'art décoratif moderne au Sénégal et en Afrique, en proposant des créations originales, innovantes et reconnues pour leur qualité.",
    tags: ["Esprit entrepreneurial", "Vision créative", "Innovation", "Développement de marque", "Excellence artistique", "Expansion professionnelle"],
    wide: false,
  },
  {
    icon: Palette, tag: "Expérience", title: "Créer, apprendre et évoluer",
    description: "Je développe mon savoir-faire à travers des réalisations concrètes et des projets artistiques variés, en perfectionnant continuellement mes techniques, ma créativité et mon sens du détail.",
    tags: ["Projets concrets", "Techniques avancées", "Sens du détail", "Polyvalence", "Résultats uniques"],
    wide: false,
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="bg-bg py-28 md:py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(78,133,191,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            Ce que je <span className="font-serif-i italic text-muted">fais</span>
          </h2>
          <p className="text-muted text-sm hidden md:block tracking-widest uppercase">Compétences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * (i + 1) }}
                className={"bg-surface border border-stroke rounded-3xl p-8 md:p-10 hover:border-stroke/80 transition-colors" + (s.wide ? " md:col-span-2" : "")}>
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-bg border border-stroke rounded-2xl p-3">
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-muted text-xs tracking-widest uppercase">{s.tag}</p>
                </div>
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-semibold">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5 font-medium">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="border border-stroke rounded-full px-3 py-1 text-white/75 text-xs tracking-wide font-medium hover:border-[#89AACC]/50 hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
