import { motion } from "framer-motion";
import hospitalInterior from "@/assets/hospital-interior.jpg";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "मरीज़ देखे" },
  { icon: Award, value: "15+", label: "वर्षों का अनुभव" },
  { icon: Clock, value: "24/7", label: "सेवा उपलब्ध" },
  { icon: Heart, value: "100%", label: "समर्पण" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="section-heading">हमारे बारे में</h2>
      <div className="section-underline" />

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={hospitalInterior}
            alt="J.P. Seva Sadan Hospital"
            className="rounded-2xl shadow-2xl w-full object-cover h-[350px]"
            loading="lazy"
            width={1920}
            height={800}
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-xl hidden md:block">
            <p className="text-3xl font-extrabold">15+</p>
            <p className="text-sm font-medium opacity-90">वर्षों का अनुभव</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Welcome to J.P. Seva Sadan</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
            समस्तीपुर का विश्वसनीय अस्पताल
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            जे. पी. सेवा सदन समस्तीपुर का एक विश्वसनीय अस्पताल है, जहाँ कम खर्च में बेहतर इलाज उपलब्ध है।
            यहाँ अनुभवी डॉक्टरों द्वारा सभी प्रकार के रोगों का इलाज आधुनिक उपकरणों के साथ किया जाता है।
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            हमारा लक्ष्य है हर मरीज़ को किफायती दर पर उच्चतम गुणवत्ता वाली स्वास्थ्य सेवा प्रदान करना।
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg leading-tight">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
