import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "क्या यहाँ सभी प्रकार के रोगों का इलाज किया जाता है?",
    a: "हाँ, जे. पी. सेवा सदन में सामान्य से लेकर कई प्रकार की बीमारियों का इलाज अनुभवी डॉक्टरों द्वारा किया जाता है।",
  },
  {
    q: "क्या इलाज किफायती दरों पर उपलब्ध है?",
    a: "जी हाँ, हमारा उद्देश्य कम खर्च में बेहतर इलाज प्रदान करना है, ताकि हर वर्ग के लोग आसानी से इलाज करा सकें।",
  },
  {
    q: "क्या यहाँ दवाइयों पर छूट मिलती है?",
    a: "हाँ, हमारे अस्पताल में मरीजों को दवाइयों पर विशेष डिस्काउंट दिया जाता है।",
  },
  {
    q: "क्या अस्पताल में आधुनिक सुविधाएँ उपलब्ध हैं?",
    a: "जी हाँ, हम आधुनिक उपकरणों और तकनीक के साथ इलाज की सुविधा प्रदान करते हैं।",
  },
  {
    q: "क्या यहाँ इमरजेंसी सेवाएँ उपलब्ध हैं?",
    a: "हाँ, मरीजों की जरूरत को ध्यान में रखते हुए इमरजेंसी सेवाएँ भी उपलब्ध हैं।",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-heading">❓ अक्सर पूछे जाने वाले प्रश्न</h2>
        <div className="section-underline" />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"
                  }`}
              >
                <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
