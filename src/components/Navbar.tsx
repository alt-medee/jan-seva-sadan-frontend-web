import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "होम", href: "#" },
  { label: "हमारे बारे में", href: "#about" },
  { label: "सुविधाएं", href: "#services" },
  { label: "डॉक्टर", href: "#doctors" },
  { label: "विभाग", href: "#specialities" },
  { label: "संपर्क", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
<a href="#" className="flex items-center gap-3 shrink-0">
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg  flex items-center justify-center overflow-hidden">
<img src={logo} alt="Logo" />
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

        {/* Desktop Nav */}
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

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9798701014"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9798701014"
              className="block py-3 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-semibold text-center mt-3"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
