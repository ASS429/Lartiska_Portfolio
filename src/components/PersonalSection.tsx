import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, Heart, Palette, Home, Camera, Rocket, Sparkles } from "lucide-react";

const languages = [
  { name: "Français", level: "Excellent" },
  { name: "Wolof", level: "Excellent" },
  { name: "Anglais", level: "Intermédiaire" },
];

const interests = [
  { name: "Art & Création", icon: Palette },
  { name: "Design intérieur", icon: Home },
  { name: "Contenu visuel", icon: Camera },
  { name: "Entrepreneuriat", icon: Rocket },
  { name: "Innovation artistique", icon: Sparkles },
];

const PersonalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personal" ref={ref} className="bg-bg py-28 md:py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(78,133,191,0.04)_0%,_transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            Au-delà <span className="font-serif-i italic text-muted">de l'atelier</span>
          </h2>
          <p className="text-muted text-sm hidden md:block tracking-widest uppercase">Personnel</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Languages */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-surface border border-stroke rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #89AACC30, transparent)" }} />
            <div className="flex items-start justify-between mb-8">
              <div className="bg-bg border border-stroke rounded-2xl p-3">
                <Languages size={22} className="text-white" />
              </div>
              <p className="text-muted text-xs tracking-widest uppercase">Langues</p>
            </div>
            <h3 className="text-white text-xl md:text-2xl mb-6 tracking-tight">Langues parlées</h3>
            <div className="flex flex-col gap-3">
              {languages.map((l, i) => (
                <motion.div key={l.name} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center justify-between py-2 border-b border-stroke last:border-0">
                  <span className="text-white text-base md:text-lg font-medium">{l.name}</span>
                  <span className="text-white/75 text-sm tracking-wider uppercase font-semibold">{l.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-surface border border-stroke rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #4E85BF30, transparent)" }} />
            <div className="flex items-start justify-between mb-8">
              <div className="bg-bg border border-stroke rounded-2xl p-3">
                <Heart size={22} className="text-white" />
              </div>
              <p className="text-muted text-xs tracking-widest uppercase">Passions</p>
            </div>
            <h3 className="text-white text-xl md:text-2xl mb-6 tracking-tight">Centres d'intérêt</h3>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((it, i) => {
                const Icon = it.icon;
                return (
                  <motion.div key={it.name} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="bg-bg border border-stroke rounded-2xl px-4 py-3 flex items-center gap-3 hover:border-[#89AACC]/40 transition-colors">
                    <Icon size={18} className="text-white/80" />
                    <span className="text-white text-sm md:text-base font-medium">{it.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
