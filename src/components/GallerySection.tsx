import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import heroImage from "@/assets/hero-hospital.jpg";
import interiorImage from "@/assets/hospital-interior.jpg";

const images = [
  { src: heroImage, label: "अस्पताल भवन" },
  { src: interiorImage, label: "अस्पताल कॉरिडोर" },
  { src: gallery1, label: "ICU यूनिट" },
  { src: gallery2, label: "रिसेप्शन" },
  { src: gallery3, label: "पैथोलॉजी लैब" },
  { src: gallery4, label: "पेशेंट रूम" },
];

const GallerySection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <h2 className="section-heading">फोटो गैलरी</h2>
      <div className="section-underline" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
              <p className="text-background font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {img.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
