import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <>
    <motion.a
      href="https://wa.me/919798701014"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-primary-foreground items-center justify-center shadow-xl hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>

    <motion.a
      href="tel:9798701014"
      className="hidden md:flex fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-xl hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  </>
);

export default FloatingButtons;