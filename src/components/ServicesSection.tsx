import { motion } from "framer-motion";
import { Scissors, Baby, TestTube, Stethoscope, Heart, Wind } from "lucide-react";

const services = [
  { icon: Scissors, title: "सभी प्रकार के ऑपरेशन", desc: "अनुभवी सर्जनों द्वारा सुरक्षित और सफल ऑपरेशन" },
  { icon: Baby, title: "नवजात एवं शिशु उपचार", desc: "बच्चों के लिए विशेष देखभाल और उपचार सुविधा" },
  { icon: TestTube, title: "सभी प्रकार के खून जांच", desc: "आधुनिक लैब में सटीक और तेज़ जांच रिपोर्ट" },
  { icon: Stethoscope, title: "सर्जरी एवं मेडिसिन", desc: "हर बीमारी के लिए विशेषज्ञ इलाज उपलब्ध" },
  { icon: Heart, title: "सभी रोगों का इलाज", desc: "सामान्य से लेकर गंभीर रोगों का विशेषज्ञ उपचार" },
  { icon: Wind, title: "ऑक्सीजन, मॉनिटर, नेबुलाइजर", desc: "अत्याधुनिक ICU और क्रिटिकल केयर उपकरण" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <h2 className="section-heading">उपलब्ध सुविधाएं</h2>
      <div className="section-underline" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-xl transition-all group cursor-default"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <s.icon className="w-8 h-8 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
