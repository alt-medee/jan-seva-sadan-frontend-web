import { motion } from "framer-motion";
import { UserCheck, IndianRupee, Cpu, Clock, ShieldCheck, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: UserCheck, title: "अनुभवी डॉक्टर", desc: "15+ वर्षों का अनुभव प्राप्त विशेषज्ञ चिकित्सक" },
  { icon: IndianRupee, title: "किफायती इलाज", desc: "कम खर्च में उच्च गुणवत्ता वाला उपचार" },
  { icon: Cpu, title: "आधुनिक मशीनें", desc: "नवीनतम चिकित्सा उपकरण और तकनीक" },
  { icon: Clock, title: "24x7 सेवा", desc: "दिन-रात इमरजेंसी सेवा उपलब्ध" },
  { icon: ShieldCheck, title: "सुरक्षित वातावरण", desc: "स्वच्छ और सुरक्षित अस्पताल परिसर" },
  { icon: HeartHandshake, title: "मरीज़ पहले", desc: "मरीजों की सेवा हमारी प्राथमिकता" },
];

const WhyChooseSection = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="section-heading">हम क्यों चुनें?</h2>
      <div className="section-underline" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
