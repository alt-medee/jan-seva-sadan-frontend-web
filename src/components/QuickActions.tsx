import { CalendarCheck, Phone, Siren, UserSearch } from "lucide-react";

const actions = [
  { icon: CalendarCheck, label: "Book Appointment", href: "#appointment", highlight: true },
  { icon: Phone, label: "Call Now", href: "tel:9798701014" },
  { icon: Siren, label: "Emergency", href: "tel:9798701014" },
  { icon: UserSearch, label: "Find Doctor", href: "#doctors" },
];

const QuickActions = () => (
  <div className="bg-background shadow-xl border-b border-border relative z-10">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4">
      {actions.map((a, i) => (
        <a
          key={i}
          href={a.href}
          className={`flex items-center justify-center gap-3 py-5 px-4 text-sm font-semibold transition-all border-r border-border last:border-r-0 hover:bg-primary hover:text-primary-foreground group ${
            a.highlight
              ? "bg-primary text-primary-foreground"
              : "text-foreground"
          }`}
        >
          <a.icon className={`w-6 h-6 ${a.highlight ? "" : "text-primary group-hover:text-primary-foreground"}`} />
          <span>{a.label}</span>
        </a>
      ))}
    </div>
  </div>
);

export default QuickActions;
