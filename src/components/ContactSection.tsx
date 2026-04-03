import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-section-alt">
    <div className="container mx-auto max-w-6xl">
      <h2 className="section-heading">संपर्क करें</h2>
      <div className="section-underline" />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">पता</h3>
              <p className="text-sm text-muted-foreground">बेलवन चौक, उजियारपुर रोड, समस्तीपुर, बिहार</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">फोन नंबर</h3>
              <p className="text-sm text-muted-foreground">9798701014 | 9955746966</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">समय</h3>
              <p className="text-sm text-muted-foreground">24 घंटे, 7 दिन — हमेशा खुला</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
              <a href="https://wa.me/919798701014" className="text-sm text-primary hover:underline">
                +91 9798701014 पर WhatsApp करें
              </a>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] lg:h-full min-h-[350px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57357.13468028!2d85.7541!3d25.8628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed0e!2sSamastipur!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="J.P. Seva Sadan Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
