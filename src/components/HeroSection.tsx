import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import interiorImage from "@/assets/hospital-interior.jpg";

const slides = [
  {
    image: heroImage,
    title: "कम खर्च, अत्याधुनिक सुविधा",
    subtitle: "एवं बेहतर स्वास्थ्य के लिए पधारें…",
    desc: "24 घंटा इमरजेंसी सेवा उपलब्ध • समस्तीपुर",
  },
  {
    image: interiorImage,
    title: "अनुभवी डॉक्टर,",
    subtitle: "आधुनिक उपकरण",
    desc: "सभी प्रकार के रोगों का विशेषज्ञ इलाज",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[420px] md:h-[560px] lg:h-[600px] overflow-hidden bg-foreground">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="J.P. Seva Sadan"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background/80 leading-tight mb-1">
            {slides[current].title}
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-background leading-tight mb-6">
            {slides[current].subtitle}
          </h2>
          <p className="text-background/70 text-base md:text-lg mb-8">
            {slides[current].desc}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:9798701014"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all text-sm md:text-base"
            >
              📞 अपॉइंटमेंट बुक करें
            </a>
            <a
              href="https://wa.me/919798701014"
              className="bg-background/20 backdrop-blur-sm text-background border border-background/30 px-7 py-3.5 rounded-lg font-semibold hover:bg-background/30 transition-all text-sm md:text-base"
            >
              💬 WhatsApp करें
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm text-background flex items-center justify-center hover:bg-background/40 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm text-background flex items-center justify-center hover:bg-background/40 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-background/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
