import { Phone, Siren, UserSearch } from "lucide-react";

const actions = [
  { icon: Phone, label: "Call Now", href: "tel:9798701014" },
  { icon: Siren, label: "Emergency", href: "tel:6204954262" },
  { icon: UserSearch, label: "Find Doctor", href: "#doctors" },
];

const QuickActions = () => (
  <div className="bg-background shadow-xl border-b border-border relative z-10">
    
    {/* 🔥 3 columns everywhere */}
    <div className="container mx-auto grid grid-cols-3">
      
      {actions.map((a, i) => (
        <a
          key={i}
          href={a.href}
          className="flex flex-col items-center justify-center gap-1 py-4 px-2 text-xs font-semibold transition-all border-r border-border last:border-r-0 hover:bg-primary hover:text-primary-foreground group text-foreground"
        >
          <a.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
          <span className="text-center leading-tight">{a.label}</span>
        </a>
      ))}

    </div>
  </div>
);

export default QuickActions;