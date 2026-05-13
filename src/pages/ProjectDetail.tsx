import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getCategoryName, getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  useEffect(() => {
    if (lightbox === null || !project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => ((i ?? 0) - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-white flex flex-col items-center justify-center px-6 text-center gap-6">
        <p className="font-serif-i italic text-4xl md:text-5xl">Projet introuvable</p>
        <Link to="/#projects" className="rounded-full border border-stroke px-6 py-3 text-sm text-muted hover:text-white hover:border-white/30 transition-colors">
          ← Retour au portfolio
        </Link>
      </div>
    );
  }

  const categoryName = getCategoryName(project.category);

  return (
    <article className="min-h-screen bg-bg text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Portfolio
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-stroke inline-block" />
            {categoryName}
          </p>
          <h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05]">
            <span className="font-serif-i italic">{project.title}</span>
          </h1>
          <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed font-medium">{project.description}</p>
        </motion.header>

        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-12 bg-surface border border-stroke rounded-3xl overflow-hidden cursor-zoom-in"
          onClick={() => setLightbox(0)}
        >
          <img src={project.images[0]} alt={project.title} className="w-full h-auto object-cover" />
        </motion.figure>

        <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: "Ville", value: project.city },
            { label: "Matériaux", value: project.materials },
            { label: "Durée", value: project.duration },
            { label: "Livré", value: project.completed_at },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-white/20 pl-4">
              <dt className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-1">{item.label}</dt>
              <dd className="font-serif-i italic text-lg text-white">{item.value}</dd>
            </div>
          ))}
        </dl>

        {project.images.length > 1 && (
          <section className="mt-16">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-stroke inline-block" />Galerie
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <motion.button
                  key={img}
                  type="button"
                  onClick={() => setLightbox(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="group aspect-square overflow-hidden rounded-2xl bg-surface border border-stroke hover:border-white/30 transition-colors"
                >
                  <img
                    src={img}
                    alt={`${project.title} — photo ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </motion.button>
              ))}
            </div>
          </section>
        )}

        <div className="mt-20 bg-surface border border-stroke rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #89AACC40, transparent)" }} />
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">Inspiré ?</p>
          <h2 className="font-serif-i italic text-3xl md:text-4xl mb-7">Discutons de votre projet.</h2>
          <a
            href="https://wa.me/221785446363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-medium px-7 py-3.5 hover:scale-105 transition-transform"
          >
            Demander un devis <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              aria-label="Fermer"
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full border border-white/10"
            >
              <X size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => ((i ?? 0) - 1 + project.images.length) % project.images.length);
              }}
              aria-label="Précédent"
              className="absolute left-3 md:left-6 text-white/70 hover:text-white p-3 rounded-full border border-white/10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => ((i ?? 0) + 1) % project.images.length);
              }}
              aria-label="Suivant"
              className="absolute right-3 md:right-6 text-white/70 hover:text-white p-3 rounded-full border border-white/10"
            >
              <ChevronRight size={22} />
            </button>
            <motion.img
              key={lightbox}
              src={project.images[lightbox]}
              alt={`${project.title} — photo ${lightbox + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/50 tracking-widest uppercase">
              {lightbox + 1} / {project.images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProjectDetail;
