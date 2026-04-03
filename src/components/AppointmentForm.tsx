import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const AppointmentForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `नमस्कार, मैं ${form.name}। मुझे अपॉइंटमेंट चाहिए।\nदिनांक: ${form.date}\nसंदेश: ${form.message}`;
    window.open(`https://wa.me/919798701014?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="appointment" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">अपॉइंटमेंट बुक करें</h2>
        <div className="section-underline" />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              आज ही अपना अपॉइंटमेंट बुक करें
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              फॉर्म भरें या सीधे कॉल/WhatsApp करें। हमारी टीम आपसे जल्द से जल्द संपर्क करेगी।
            </p>
            <div className="space-y-3">
              <a href="tel:9798701014" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                📞 <span className="font-medium">9798701014</span>
              </a>
              <a href="tel:9955746966" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                📞 <span className="font-medium">9955746966</span>
              </a>
              <a href="https://wa.me/919798701014" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                💬 <span className="font-medium">WhatsApp पर संपर्क करें</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">नाम *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="अपना नाम लिखें"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">फोन नंबर *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="मोबाइल नंबर"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">दिनांक</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">संदेश</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                placeholder="अपनी समस्या बताएं..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Send className="w-4 h-4" />
              WhatsApp पर भेजें
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
