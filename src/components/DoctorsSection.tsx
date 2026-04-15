import { motion } from "framer-motion";
// import doctor1 from "@/assets/doctor1.jpg";
// import doctor2 from "@/assets/doctor2.jpg";
// import doctor3 from "@/assets/doctor3.jpg";
import doctor from "@/assets/doctor-dummy.jpg" 

const doctors = [
  { name: "Dr. Rajesh Kumar", speciality: "General Physician", exp: "15+ years", image: doctor },
  { name: "Dr. Sunita Devi", speciality: "Gynaecologist", exp: "12+ years", image: doctor },
  { name: "Dr. Amit Singh", speciality: "Surgeon", exp: "10+ years", image: doctor },
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="section-heading">Our Doctors</h2>
      <div className="section-underline" />
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        अनुभवी और समर्पित डॉक्टरों की टीम, जो आपकी बेहतर सेहत के लिए प्रतिबद्ध है।
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={512}
                height={640}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent h-20" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-foreground text-lg">{doc.name}</h3>
              <p className="text-primary font-medium text-sm mb-1">{doc.speciality}</p>
              <p className="text-xs text-muted-foreground">{doc.exp} experience</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
