import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Design", "Build", "Inspire"];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const duration = 2700;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * 100);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => onComplete(), 400);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Top-left label */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-8 left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.p>

      {/* Center rotating word */}
      <div className="flex items-center justify-center h-24">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif-i italic text-white/80 select-none"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <div className="absolute bottom-10 right-10">
        <span className="text-6xl md:text-8xl lg:text-9xl font-serif-i text-white tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full accent-gradient origin-left"
          style={{
            scaleX: count / 100,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
