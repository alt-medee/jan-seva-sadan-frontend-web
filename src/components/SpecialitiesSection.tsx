import { motion } from "framer-motion";
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

const SpecialitiesSection = () => (
  <section id="specialities" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <h2 className="section-heading">Specialities</h2>
      <div className="section-underline" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
        {specialities.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center group cursor-default"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
              <s.icon className="w-7 h-7 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <p className="text-sm font-semibold text-card-foreground">{s.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialitiesSection;
