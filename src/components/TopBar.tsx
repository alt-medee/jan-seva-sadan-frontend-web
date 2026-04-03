import { Phone, AlertCircle, MessageCircle } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground py-2 px-4 text-sm">
    <div className="container mx-auto flex items-center justify-between flex-wrap gap-2">
      <div className="flex items-center gap-5">
        <a href="tel:9798701014" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone className="w-3.5 h-3.5" />
          <span>9798701014</span>
        </a>
        <span className="opacity-40">|</span>
        <a href="tel:9955746966" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone className="w-3.5 h-3.5" />
          <span>9955746966</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="tel:9798701014" className="flex items-center gap-1.5 font-semibold">
          <AlertCircle className="w-4 h-4 text-emergency" />
          <span>Emergency: 9798701014</span>
        </a>
        <span className="opacity-40 hidden sm:inline">|</span>
        <a
          href="https://wa.me/919798701014"
          className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
