import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, FileText, ArrowRight, Globe } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const ROLES = ["Artiste peintre", "Décorateur", "Créatif", "Entrepreneur"];
const NAV_LINKS = [
  { label: "Accueil", href: "#" },
  { label: "Projets", href: "#projects" },
  { label: "CV", href: "/cv" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Accueil");
  const [roleIndex, setRoleIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const animateOpacity = (el: HTMLVideoElement, to: number, duration = 500) => {
    const from = parseFloat(el.style.opacity || "0");
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      el.style.opacity = String(from + (to - from) * t);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.style.opacity = "0";
    const onCanPlay = () => { v.play().catch(() => {}); animateOpacity(v, 1, 600); };
    const onTimeUpdate = () => { if (v.duration && v.duration - v.currentTime <= 0.55) animateOpacity(v, 0, 500); };
    const onEnded = () => { v.style.opacity = "0"; setTimeout(() => { v.currentTime = 0; v.play().catch(() => {}); animateOpacity(v, 1, 500); }, 100); };
    v.addEventListener("canplay", onCanPlay, { once: true });
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", onEnded);
    return () => { v.removeEventListener("timeupdate", onTimeUpdate); v.removeEventListener("ended", onEnded); };
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const initGsap = async () => {
      try {
        const { gsap } = await import("gsap");
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".name-reveal", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 }, 0.1);
        tl.fromTo(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.12 }, 0.35);
      } catch (e) { console.warn("GSAP not available", e); }
    };
    initGsap();
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="bg-bg min-h-screen">
        {/* HERO */}
        <section className="min-h-screen overflow-hidden relative flex flex-col">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover object-bottom"
            muted autoPlay playsInline preload="auto"
            src="/LARTISKA.mp4"
            style={{ opacity: 0 }}
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

          {/* Floating pill navbar */}
          <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
            <div className={"inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300" + (scrolled ? " shadow-lg shadow-black/30" : "")}>
              {/* Logo ring */}
              <div className="relative group cursor-pointer">
                <div className="w-9 h-9 rounded-full p-[2px] transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #89AACC 0%, #4E85BF 100%)" }}>
                  <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
                    <span className="font-serif-i italic text-[13px] text-white/90">AT</span>
                  </div>
                </div>
              </div>

              <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setActiveNav(link.label)}
                  className={"text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 " +
                    (activeNav === link.label ? "text-white bg-stroke/50" : "text-muted hover:text-white hover:bg-stroke/50")}>
                  {link.label}
                </a>
              ))}

              <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

              <a href="mailto:contact@lartiska.com" className="relative group rounded-full text-xs sm:text-sm overflow-hidden">
                <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }} aria-hidden />
                <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-3 py-1.5 text-white">
                  Dire bonjour ↗
                </span>
              </a>
            </div>
          </nav>

          {/* Hero content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center gap-6 mt-16">
            <p className="blur-in text-xs text-muted uppercase tracking-[0.3em]" style={{ opacity: 0 }}>
              LARTISKA · COLLECTION '26
            </p>

            <h1 className="name-reveal text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif-i italic leading-[0.9] tracking-tight text-white" style={{ opacity: 0 }}>
              Ahmadou Tounkara
            </h1>

            <p className="blur-in text-sm md:text-base text-white/60" style={{ opacity: 0 }}>
              Un{" "}
              <AnimatePresence mode="wait">
                <motion.span key={roleIndex} className="font-serif-i italic text-white inline-block"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              {" "}basé à Dakar, Sénégal.
            </p>

            <p className="blur-in text-sm md:text-base text-white/50 max-w-md" style={{ opacity: 0 }}>
              Fondateur de LARTISKA. Je transforme les espaces en œuvres d'art à travers
              la peinture décorative, le carrelage design et le plafonnage moderne.
            </p>

            <div className="blur-in inline-flex gap-4 flex-wrap justify-center" style={{ opacity: 0 }}>
              <a href="#projects" className="group relative rounded-full text-sm px-7 py-3.5 bg-white text-black font-medium transition-all duration-300 hover:scale-105 hover:bg-bg hover:text-white overflow-hidden">
                <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }} aria-hidden />
                <span className="relative z-10 flex items-center gap-2">Voir mes réalisations <ArrowRight size={14} /></span>
              </a>
              <a href="/cv" target="_blank" rel="noopener noreferrer" className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-white font-medium transition-all duration-300 hover:scale-105 hover:border-transparent overflow-hidden">
                <span className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }} aria-hidden />
                <span className="relative z-10 flex items-center gap-2"><FileText size={14} /> Mon CV</span>
              </a>
            </div>

            <div className="blur-in flex items-center gap-3 mt-2" style={{ opacity: 0 }}>
              <a href="mailto:contact@lartiska.com" className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors" aria-label="Email"><Mail size={16} /></a>
              <a href="https://wa.me/221785446363" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors" aria-label="WhatsApp"><WhatsAppIcon size={16} /></a>
              <a href="#about" className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors" aria-label="À propos"><Globe size={16} /></a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="relative z-10 flex flex-col items-center pb-10 gap-2">
            <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
            <div className="w-px h-10 bg-stroke relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/2 accent-gradient animate-scroll-down" />
            </div>
          </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <PersonalSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
