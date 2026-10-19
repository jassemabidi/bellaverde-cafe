import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

import { site } from "@/lib/site-info";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-script text-5xl text-gold-soft">{site.name}</p>
          <p className="eyebrow mt-2">{site.tagline}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
            Un jardin suspendu au cœur d'El Mourouj — jus frais, mojitos et douceurs maison.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="eyebrow">Infos</p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {site.address}
          </p>
          <a href={site.phoneHref} className="flex items-center gap-3 hover:text-gold-soft">
            <Phone className="h-4 w-4 text-gold" /> {site.phoneDisplay}
          </a>
          <p className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-gold" /> {site.hours}
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="eyebrow">Suivez-nous</p>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 transition-colors hover:bg-gold hover:text-forest"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 transition-colors hover:bg-gold hover:text-forest"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-col gap-2 pt-2 opacity-80">
            <Link to="/menu" className="hover:text-gold-soft">
              Voir la carte
            </Link>
            <Link to="/contact" className="hover:text-gold-soft">
              Nous trouver
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10 py-5 text-center text-xs tracking-widest uppercase opacity-60">
        © {new Date().getFullYear()} Bella Verde · Salon de thé
      </div>
    </footer>
  );
}
