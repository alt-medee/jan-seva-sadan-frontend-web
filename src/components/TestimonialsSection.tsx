import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "राजेश कुमार",
    text: "जे. पी. सेवा सदन में मेरा ऑपरेशन बहुत अच्छे से हुआ। डॉक्टर बहुत अनुभवी हैं और स्टाफ बहुत सहयोगी है। खर्च भी बहुत कम आया।",
    rating: 5,
  },
  {
    name: "सुनीता देवी",
    text: "मेरे बच्चे का इलाज यहाँ हुआ। डॉक्टरों ने बहुत अच्छी देखभाल की। 24 घंटे सेवा उपलब्ध होने से बहुत सुविधा हुई।",
    rating: 5,
  },
  {
    name: "अमित शर्मा",
    text: "समस्तीपुर में इतना अच्छा अस्पताल मिलना मुश्किल है। जे. पी. सेवा सदन ने मेरे परिवार की बहुत मदद की। धन्यवाद!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-heading">मरीज़ों के अनुभव</h2>
        <div className="section-underline" />

        <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg min-h-[250px]">
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center relative z-10"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-bold text-foreground text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">Patient</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-border"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
