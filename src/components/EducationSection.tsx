import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  { school: "Université Numérique du Sénégal", degree: "Licence en Infographie — Design visuel, création numérique & communication graphique", dates: "En cours" },
  { school: "Lycée Demba Diop", degree: "Baccalauréat Scientifique", dates: "2018" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="bg-bg py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-xs text-muted uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-stroke inline-block" />Formation
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight mb-12 md:mb-16">
          Parcours <span className="font-serif-i italic text-muted">académique</span>.
        </motion.h2>

        <div className="flex flex-col">
          {education.map((e, i) => (
            <motion.div key={e.school + e.degree} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="grid grid-cols-12 gap-4 py-6 md:py-8 border-t border-stroke last:border-b group hover:bg-surface/40 transition-colors px-4 -mx-4 rounded-2xl">
              <p className="col-span-12 md:col-span-3 text-muted text-sm tracking-wider">{e.dates}</p>
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-white text-xl md:text-2xl tracking-tight mb-1 group-hover:text-white transition-colors">{e.school}</h3>
                <p className="text-muted text-sm md:text-base">{e.degree}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
