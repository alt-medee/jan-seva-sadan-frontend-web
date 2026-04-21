import { Phone } from "lucide-react";
import logo from "../assets/logo_updated.jpeg";

const navLinks = [
  { label: "होम", href: "#" },
  { label: "हमारे बारे में", href: "#about" },
  { label: "सुविधाएं", href: "#services" },
  { label: "डॉक्टर", href: "#doctors" },
  { label: "विभाग", href: "#specialities" },
  { label: "संपर्क", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">

        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-base md:text-lg font-bold text-primary leading-tight tracking-tight">
              J.P. Seva Sadan
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-wider uppercase">
              Samastipur
            </p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a
            href="tel:9798701014"
            className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 md:px-5 py-2 text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;