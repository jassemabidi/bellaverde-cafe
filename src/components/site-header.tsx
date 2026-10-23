import { Link } from "@tanstack/react-router";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const logo = `${import.meta.env.BASE_URL}bella-verde-logo.jpg`;
import { site } from "@/lib/site-info";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "La Carte" },
  { to: "/contact", label: "Nous trouver" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Logo Bella Verde"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-gold"
          />
          <span className="font-script text-3xl leading-none text-primary">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="rounded-full bg-primary px-5 py-2.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-forest"
          >
            Réserver
          </a>
        </nav>

        <button
          className="md:hidden text-primary"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-primary-foreground"
            >
              Appeler · {site.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
