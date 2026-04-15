import { motion } from "framer-motion";
import { useState , useEffect} from "react";
import {
  Stethoscope, Baby, TestTube, Scissors, Heart, Wind,
  Syringe, Eye, Bone, Brain, Pill, ShieldCheck,
} from "lucide-react";

const specialities = [
  { icon: Scissors, title: "General Surgery" },
  { icon: Baby, title: "Child Care" },
  { icon: TestTube, title: "Pathology" },
  { icon: Stethoscope, title: "Medicine" },
  { icon: Syringe, title: "Emergency Care" },
  { icon: Heart, title: "Cardiac Care" },
  { icon: Bone, title: "Orthopaedics" },
  { icon: Eye, title: "Eye Care" },
  { icon: Brain, title: "Neuro Sciences" },
  { icon: Pill, title: "Internal Medicine" },
  { icon: Wind, title: "Pulmonology" },
  { icon: ShieldCheck, title: "Critical Care" },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const SpecialitiesSection = () => {
  const [current, setCurrent] = useState(0);
  const grouped = chunkArray(specialities, 4);
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % grouped.length);
  }, 3000); // 👉 3 sec (change speed here)

  return () => clearInterval(timer);
}, [grouped.length]);

  return (
    <section id="specialities" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <h2 className="section-heading">Specialities</h2>
        <div className="section-underline" />

        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
          {specialities.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <p className="text-sm font-semibold">{s.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-6 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.4 }}
          >
            {grouped.map((group, index) => (
              <div key={index} className="min-w-full grid grid-cols-2 gap-4 px-2">
                {group.map((s, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-4 border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-2">
                      <s.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <p className="text-xs font-semibold">{s.title}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-4 gap-2">
            {grouped.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialitiesSection;