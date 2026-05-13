import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/arfang-portrait.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-bg pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(137,170,204,0.04)_0%,_transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-xs text-muted uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-stroke inline-block" />À propos
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight mb-12">
          Transformer les espaces en <span className="font-serif-i italic text-white/60">véritables œuvres d'art</span> à travers
          des créations <span className="font-serif-i italic text-white/60">modernes</span> et uniques.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-2">
            <div className="liquid-glass rounded-3xl p-2 overflow-hidden">
              <img src={portrait} alt="Portrait de Ahmadou Moustapha Tounkara"
                className="w-full h-auto rounded-2xl object-cover aspect-[4/5]" loading="lazy" />
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 text-white/85 text-base md:text-lg leading-relaxed font-medium">
            Artiste peintre sénégalais et fondateur de{" "}
            <span className="font-serif-i italic text-white">LARTISKA</span>, une entreprise
            spécialisée dans la peinture décorative, les décorations murales artistiques, le
            carrelage design et le plafonnage moderne. Passionné par l'art, les couleurs et
            l'esthétique, je mets ma créativité et mon savoir-faire au service de la transformation
            des espaces afin de créer des environnements élégants, originaux et inspirants.
            J'accompagne particuliers, entreprises et professionnels dans des projets décoratifs
            qui allient modernité, qualité et identité visuelle forte. Mon objectif : faire de
            LARTISKA une référence de l'art décoratif moderne au Sénégal et en Afrique. 🎨✨
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
