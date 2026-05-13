import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight, Instagram, Facebook } from "lucide-react";

const WhatsAppIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const TikTokIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.61a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
  </svg>
);

const socials = [
  { label: "Email", href: "mailto:Lartiska2@gmail.com", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/221785446363", icon: WhatsAppIcon },
  { label: "Instagram", href: "https://instagram.com/lartiska", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/lartiska", icon: Facebook },
  { label: "TikTok", href: "https://tiktok.com/@lartiska", icon: TikTokIcon },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const email = "Lartiska2@gmail.com";

  return (
    <section id="contact" ref={ref} className="bg-bg pt-28 md:pt-40 pb-16 md:pb-20 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(137,170,204,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-10 relative">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-xs text-muted uppercase tracking-[0.3em] flex items-center gap-3">
          <span className="w-8 h-px bg-stroke inline-block" />Contact<span className="w-8 h-px bg-stroke inline-block" />
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]">
          Transformons <span className="font-serif-i italic text-muted">votre espace</span>
          <br />ensemble.
        </motion.h2>

        <motion.a href={`mailto:${email}`} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }} whileHover={{ scale: 1.03 }}
          className="group relative bg-surface border border-stroke rounded-full pl-6 pr-2 py-2 flex items-center gap-3 overflow-hidden transition-all duration-300">
          <span className="absolute inset-[-1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }} aria-hidden />
          <span className="absolute inset-0 rounded-full bg-surface -z-0" aria-hidden />
          <Mail size={18} className="text-muted relative z-10" />
          <span className="text-white text-sm md:text-base relative z-10">{email}</span>
          <span className="bg-white rounded-full p-2.5 text-black relative z-10 group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight size={16} />
          </span>
        </motion.a>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 text-muted text-sm">
          <span>📞 +221 78 544 63 63</span>
          <span className="w-1 h-1 rounded-full bg-stroke" />
          <span>Dakar / Sénégal</span>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-16 border-t border-stroke">
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="bg-surface border border-stroke rounded-full p-2.5 text-muted hover:text-white hover:border-[#89AACC]/50 transition-all"
                  aria-label={s.label}>
                  <Icon size={15} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 bg-surface border border-stroke rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px #4ade80" }} />
            <span className="text-white/70 text-xs tracking-wider">Disponible pour des projets</span>
          </div>

          <p className="text-muted text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} LARTISKA — A. M. Tounkara
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
