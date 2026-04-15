import { MapPin, Phone, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Main Footer */}
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h3 className="text-lg font-bold">J.P. Seva Sadan</h3>
              <p className="text-xs opacity-50 uppercase tracking-wider">
                Samastipur
              </p>
            </div>
          </div>

        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-base mb-5">Contact Info</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
              <p className="text-sm opacity-60">
                बेलवन चौक, कोरबद्धा हाई स्कूल के नजदीक, उजियारपुर रोड, समस्तीपुर
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 text-primary shrink-0" />
              <div className="text-sm opacity-60">
                <p>9798701014</p>
                <p>6204954262</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-1 text-primary shrink-0" />
              <p className="text-sm opacity-60">24 घंटे, 7 दिन</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-background/10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs opacity-40">
          © 2026 J.P. Seva Sadan. All rights reserved.
        </p>
        <p className="text-xs opacity-40">
          Designed with ❤️ for better healthcare
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;