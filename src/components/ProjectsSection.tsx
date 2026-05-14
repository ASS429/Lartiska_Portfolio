import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories, projects } from "@/data/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" ref={ref} className="bg-bg py-28 md:py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(137,170,204,0.04)_0%,_transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.header initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12 md:mb-14">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-stroke inline-block" />Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl text-white tracking-tight leading-[1.05]">
            Quelques <span className="font-serif-i italic text-muted">œuvres</span>
            <br />à travers l'Afrique de l'Ouest.
          </h2>
          <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed font-medium">
            Sélection de réalisations LARTISKA — fresques, plafonds, mosaïques, sols en résine époxy, design d'intérieur.
            Cliquez sur un projet pour découvrir la galerie complète.
          </p>
        </motion.header>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={
              "px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 " +
              (active === "all"
                ? "border-white/40 bg-white/10 text-white"
                : "border-stroke text-muted hover:text-white hover:border-white/30")
            }
          >
            Tout
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(c.slug)}
              className={
                "px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 " +
                (active === c.slug
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-stroke text-muted hover:text-white hover:border-white/30")
              }
            >
              {c.name}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <div className="bg-surface border border-stroke rounded-3xl p-12 text-center">
            <p className="font-serif-i italic text-2xl mb-3 text-white">Bientôt</p>
            <p className="text-muted max-w-md mx-auto">
              D'autres réalisations seront publiées prochainement. Suivez LARTISKA sur Instagram pour
              les dernières créations.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((p, i) => {
              const categoryName = categories.find((c) => c.slug === p.category)?.name;
              return (
                <motion.div key={p.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.08 * (i + 1) }}>
                  <Link
                    to={`/portfolio/${p.slug}`}
                    className="group block bg-surface border border-stroke rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-300"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-bg relative">
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-bg/80 backdrop-blur border border-stroke rounded-full p-2 opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </div>
                    <div className="p-5 border-t border-stroke">
                      <p className="text-xs uppercase tracking-widest text-white/65 font-semibold">{categoryName}</p>
                      <h3 className="font-serif-i italic text-xl md:text-2xl mt-2 leading-snug text-white">{p.title}</h3>
                      <p className="text-white/70 text-sm mt-1 font-medium">{p.city}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
