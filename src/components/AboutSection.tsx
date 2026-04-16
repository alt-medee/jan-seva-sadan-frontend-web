import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import slider1 from "@/assets/slider1.jpeg";
import slider2 from "@/assets/slider2.jpeg";
import { CheckCircle } from "lucide-react";

const features = [
  "कम खर्च में उच्च गुणवत्ता वाला इलाज",
  "अनुभवी और विशेषज्ञ डॉक्टरों की टीम",
  "आधुनिक चिकित्सा उपकरण और सुविधाएँ",
  "दवाइयों पर विशेष छूट (Discount)",
  "मरीजों की संपूर्ण देखभाल और मार्गदर्शन",
  "ग्रामीण क्षेत्र के लिए सुलभ और भरोसेमंद सेवा",
];

const AboutSection = () => {
  const images = [slider1, slider2];
  const [current, setCurrent] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl font-bold mb-6 text-center">
          🏥 जे. पी. सेवा सदन – Gawpur और Korbadha Patali का विश्वसनीय अस्पताल
        </h2>

        <div className="mb-10 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Gawpur और Korbadha Patali क्षेत्र में स्थित जे. पी. सेवा सदन एक भरोसेमंद और प्रतिष्ठित अस्पताल है,
            जो ग्रामीण क्षेत्र के लोगों को गुणवत्तापूर्ण स्वास्थ्य सेवाएँ प्रदान करने के लिए समर्पित है।
            हमारा अस्पताल विशेष रूप से उन मरीजों के लिए एक बेहतर विकल्प है, जो कम खर्च में उच्च स्तर का इलाज चाहते हैं।
          </p>

          <p>
            ग्रामीण क्षेत्र में अक्सर अच्छी चिकित्सा सुविधाओं की कमी होती है, लेकिन जे. पी. सेवा सदन इस कमी को दूर करने का निरंतर प्रयास कर रहा है।
            यहाँ अनुभवी और कुशल डॉक्टरों की टीम द्वारा सभी प्रकार की सामान्य एवं जटिल बीमारियों का उपचार आधुनिक तकनीक और उपकरणों की सहायता से किया जाता है।
          </p>

          <p>
            हमारा मुख्य उद्देश्य है कि हर व्यक्ति, चाहे वह किसी भी आर्थिक स्थिति से हो,
            उसे समय पर और उचित इलाज मिल सके। इसी कारण हम अपनी सेवाओं को किफायती बनाए रखते हैं,
            ताकि कोई भी मरीज इलाज से वंचित न रहे।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* SLIDER */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl shadow-xl w-full h-[350px] overflow-hidden"
          >
            <div className="relative w-full h-full">
              {/* BLUR BACKGROUND */}
              <img
                src={images[current]}
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
              />

              {/* MAIN IMAGE */}
              <img
                src={images[current]}
                className="relative w-full h-full object-contain"
              />
            </div>

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              इसके साथ ही, हम दवाइयों पर विशेष छूट (Discount) भी प्रदान करते हैं,
              जिससे मरीजों पर आर्थिक बोझ कम हो सके।
            </p>

            <p className="text-muted-foreground leading-relaxed">
              जे. पी. सेवा सदन में मरीजों को न केवल इलाज, बल्कि सही मार्गदर्शन और पूरी सहायता भी दी जाती है।
              हम मरीजों और उनके परिवारों को बीमारी के बारे में सही जानकारी देते हैं।
            </p>

            <div className="bg-secondary rounded-xl p-5 mt-4">
              <p className="font-semibold mb-3">🌟 हमारी विशेषताएँ:</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;