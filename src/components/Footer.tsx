import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-[#0f172a] text-white">
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">J.P. Seva Sadan</h3>
              <p className="text-xs text-white/50 uppercase tracking-wider">
                Samastipur
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-base mb-6">Contact Info</h4>

          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-[2px] shrink-0" />
              <p className="text-sm text-white/70 leading-relaxed">
                बेलवन चौक, कोरबद्धा हाई स्कूल के नजदीक, उजियारपुर रोड, समस्तीपुर
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-[2px] shrink-0" />
              <div className="text-sm text-white/70">
                <a href="tel:9798701014" className="block hover:text-primary transition">
                  9798701014
                </a>
                <a href="tel:6204954262" className="block hover:text-primary transition">
                  6204954262
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-[2px] shrink-0" />
              <a
                href="mailto:sadanjpseva@gmail.com"
                className="text-sm text-white/70 hover:text-primary transition"
              >
                sadanjpseva@gmail.com
              </a>
            </div>

            {/* TIME */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-[2px] shrink-0" />
              <p className="text-sm text-white/70">
                24 घंटे, 7 दिन
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/40">
          © 2026 J.P. Seva Sadan. All rights reserved.
        </p>
        <p className="text-xs text-white/40">
          Designed with ❤️ for better healthcare
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;