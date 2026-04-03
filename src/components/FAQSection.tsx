import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "अस्पताल का समय क्या है?",
    a: "जे. पी. सेवा सदन 24 घंटे, सातों दिन खुला रहता है। इमरजेंसी सेवा हर समय उपलब्ध है।",
  },
  {
    q: "क्या सभी प्रकार के खून जांच उपलब्ध हैं?",
    a: "हाँ, हमारी आधुनिक पैथोलॉजी लैब में सभी प्रकार के खून जांच उपलब्ध हैं। रिपोर्ट जल्द से जल्द दी जाती है।",
  },
  {
    q: "ऑपरेशन का खर्च कितना आता है?",
    a: "हम किफायती दर पर इलाज प्रदान करते हैं। खर्च की जानकारी के लिए कृपया 9798701014 पर कॉल करें।",
  },
  {
    q: "क्या इमरजेंसी में एम्बुलेंस सेवा उपलब्ध है?",
    a: "इमरजेंसी के लिए तुरंत 9798701014 पर कॉल करें। हम जल्द से जल्द सहायता प्रदान करते हैं।",
  },
  {
    q: "क्या नवजात शिशु का इलाज होता है?",
    a: "हाँ, हमारे यहाँ नवजात एवं शिशु रोगों का विशेषज्ञ इलाज उपलब्ध है।",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-heading">अक्सर पूछे जाने वाले प्रश्न</h2>
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
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40" : "max-h-0"
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
