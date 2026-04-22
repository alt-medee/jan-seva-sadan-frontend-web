import { MapPin, Phone, Clock, Mail, Facebook, Instagram, CalendarDays } from "lucide-react";
import logo from "../assets/logo_updated.jpeg";

const ContactRow = ({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-3 border-b border-white/[0.06] last:border-b-0">
    <div className="w-[30px] h-[30px] rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
      <Icon className="w-3.5 h-3.5 text-white/50" />
    </div>
    <div>
      <p className="text-[10px] text-white/45 uppercase tracking-wider mb-0.5">{label}</p>
      {children}
    </div>
  </div>
);

const Footer = () => (
  <>
    <footer className="bg-[#5E7C8C] text-white">
      <div className="container mx-auto px-5 md:px-12 pt-8 md:pt-12 pb-0">

        <div className="hidden md:grid md:grid-cols-[1.1fr_1px_1.4fr]">

          <div className="pb-10 pr-10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-[46px] h-[46px] rounded-[11px] bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-[17px] font-medium tracking-wide">J.P. Seva Sadan</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.14em] mt-0.5">Samastipur</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 mt-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              <span className="text-[11px] text-white/50">Open 24/7</span>
            </div>

            <div className="flex gap-2 mt-5">
              <a href="#" target="_blank" className="w-[34px] h-[34px] flex items-center justify-center rounded-lg border border-white/12 bg-white/[0.04] hover:bg-white/10 hover:border-white/25 transition-all">
                <Facebook className="w-[15px] h-[15px] text-white/50" />
              </a>
              <a href="#" target="_blank" className="w-[34px] h-[34px] flex items-center justify-center rounded-lg border border-white/12 bg-white/[0.04] hover:bg-white/10 hover:border-white/25 transition-all">
                <Instagram className="w-[15px] h-[15px] text-white/50" />
              </a>
            </div>
          </div>

          <div className="bg-white/[0.07]" />

          <div className="pb-10 pl-10">
            <p className="text-[10px] font-medium text-white/40 uppercase tracking-[0.13em] mb-[18px]">
              Contact Info
            </p>

            <div className="grid grid-cols-2">

              <div className="flex items-start gap-3 py-3 pr-5 border-b border-white/[0.06]">
                <MapPin className="w-3.5 h-3.5 text-white/50 mt-1" />
                <div>
                  <p className="text-[10px] text-white/45 uppercase mb-0.5">Address</p>
                  <p className="text-[13px] text-white/80 leading-relaxed">
                    बेलवन चौक, कोरबद्धा हाई स्कूल के नजदीक, उजियारपुर रोड, समस्तीपुर
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-3 pl-5 border-b border-white/[0.06] border-l border-white/[0.06]">
                <Phone className="w-3.5 h-3.5 text-white/50 mt-1" />
                <div>
                  <p className="text-[10px] text-white/45 uppercase mb-0.5">Phone</p>
                  <a href="tel:9798701014" className="block text-[13px] text-white/80 hover:text-white">9798701014</a>
                  <a href="tel:6204954262" className="block text-[13px] text-white/80 hover:text-white">6204954262</a>
                </div>
              </div>

              <div className="flex items-start gap-3 py-3 pr-5">
                <Mail className="w-3.5 h-3.5 text-white/50 mt-1" />
                <div>
                  <p className="text-[10px] text-white/45 uppercase mb-0.5">Email</p>
                  <a href="mailto:sadanjpseva@gmail.com" className="text-[13px] text-white/80 hover:text-white">
                    sadanjpseva@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 py-3 pl-5 border-l border-white/[0.06]">
                <Clock className="w-3.5 h-3.5 text-white/50 mt-1" />
                <div>
                  <p className="text-[10px] text-white/45 uppercase mb-0.5">Hours</p>
                  <p className="text-[13px] text-white/80">24 घंटे, 7 दिन</p>
                </div>
              </div>

            </div>
          </div>
        </div>

\        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/[0.08] mb-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-[10px] bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium">J.P. Seva Sadan</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Samastipur</p>
              </div>
            </div>
          </div>

          <p className="text-[10px] font-medium text-white/40 uppercase mb-3">Contact Info</p>

          <ContactRow icon={MapPin} label="Address">
            <p className="text-[13px] text-white/80 leading-relaxed">
              बेलवन चौक, कोरबद्धा हाई स्कूल के नजदीक, उजियारपुर रोड, समस्तीपुर
            </p>
          </ContactRow>

          <ContactRow icon={Phone} label="Phone">
            <a href="tel:9798701014" className="block text-[13px] text-white/80">9798701014</a>
            <a href="tel:6204954262" className="block text-[13px] text-white/80">6204954262</a>
          </ContactRow>

          <ContactRow icon={Mail} label="Email">
            <a href="mailto:sadanjpseva@gmail.com" className="text-[13px] text-white/80">
              sadanjpseva@gmail.com
            </a>
          </ContactRow>

          <ContactRow icon={Clock} label="Hours">
            <p className="text-[13px] text-white/80">24 घंटे, 7 दिन</p>
          </ContactRow>

          <div className="h-[64px]" />
        </div>
      </div>

      <div className="border-t border-white/[0.07] mt-6 md:mt-0">
        <div className="container mx-auto px-5 md:px-12 py-4 md:py-[18px] pb-20 md:pb-4 flex flex-col items-center gap-1 md:flex-row md:justify-between">
          <p className="text-[11px] text-white/20">© 2026 J.P. Seva Sadan. All rights reserved.</p>
          <p className="text-[11px] text-white/20">Designed with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>


    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-[#f5f7fa] border-t border-gray-200">
      <a href="tel:9798701014" className="flex-1 flex items-center justify-center gap-2 py-[15px] text-[13px] font-semibold hover:bg-[#e2e8f0] transition-all border-r border-gray-200" style={{ color: '#1d6ac9' }}>
        <Phone className="w-[15px] h-[15px]" style={{ color: '#1d6ac9' }} />
        Call Us
      </a>
      <a href="tel:6204954262" className="flex-1 flex items-center justify-center gap-2 py-[15px] text-[13px] font-semibold text-white transition-all" style={{ backgroundColor: '#1d6ac9' }}>
        <CalendarDays className="w-[15px] h-[15px] text-white" />
        Book Appointment
      </a>
    </div>
  </>
);

export default Footer;