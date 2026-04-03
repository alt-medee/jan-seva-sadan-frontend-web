import { motion } from "framer-motion";
import { Wind, Monitor, TestTube, BedDouble, Syringe, Thermometer } from "lucide-react";

const facilities = [
  { icon: BedDouble, title: "ICU सुविधा", desc: "अत्याधुनिक ICU यूनिट" },
  { icon: Wind, title: "ऑक्सीजन सप्लाई", desc: "24 घंटे ऑक्सीजन उपलब्ध" },
  { icon: Monitor, title: "पेशेंट मॉनिटर", desc: "रियल-टाइम हेल्थ मॉनिटरिंग" },
  { icon: TestTube, title: "पैथोलॉजी लैब", desc: "आधुनिक जांच सुविधा" },
  { icon: Syringe, title: "इंजेक्शन रूम", desc: "स्वच्छ और सुरक्षित" },
  { icon: Thermometer, title: "नेबुलाइजर", desc: "श्वसन रोग उपचार" },
];

const FacilitiesSection = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary-foreground">
        हमारी सुविधाएं
      </h2>
      <div className="w-16 h-1 bg-primary-foreground/40 mx-auto rounded-full mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {facilities.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
              <f.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-0.5">{f.title}</h3>
              <p className="text-sm opacity-75">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
