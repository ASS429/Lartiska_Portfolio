import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="bg-bg py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-xs text-muted uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-stroke inline-block" />Expérience
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight mb-12 md:mb-16">
          Créer, apprendre <span className="font-serif-i italic text-muted">et évoluer</span>.
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface border border-stroke rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #89AACC40, transparent)" }} />
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Je développe mon savoir-faire à travers des{" "}
            <span className="font-serif-i italic text-white">réalisations concrètes</span> et des
            projets artistiques variés, en perfectionnant continuellement mes techniques, ma{" "}
            <span className="font-serif-i italic text-white">créativité</span> et mon sens du
            détail afin d'offrir des résultats uniques et professionnels à chaque client. 🎨✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
