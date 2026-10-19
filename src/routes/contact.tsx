import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone, Wallet } from "lucide-react";

import { site } from "@/lib/site-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Nous trouver · Bella Verde El Mourouj" },
      {
        name: "description",
        content:
          "Bella Verde, Résidence Tawhida, El Mourouj 2074. Ouvert jusqu'à 2h. Appelez le 24 660 653.",
      },
      { property: "og:title", content: "Nous trouver · Bella Verde El Mourouj" },
      {
        property: "og:description",
        content: "Adresse, horaires et contact du salon de thé Bella Verde.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const rows = [
    { icon: MapPin, label: "Adresse", value: site.address, href: site.mapsLink },
    { icon: Phone, label: "Téléphone", value: site.phoneDisplay, href: site.phoneHref },
    { icon: Clock, label: "Horaires", value: site.hours },
    { icon: Wallet, label: "Budget", value: site.priceRange },
  ];

  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-4xl px-5 pt-20 pb-12 text-center">
        <p className="eyebrow">El Mourouj</p>
        <h1 className="mt-2 font-script text-7xl text-primary md:text-8xl">Nous trouver</h1>
        <div className="gold-rule mx-auto my-6 w-40" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 md:grid-cols-[1fr_1.4fr]">
        <div className="rounded-2xl bg-card p-8 shadow-soft ring-gold">
          <ul className="space-y-7">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="eyebrow">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="mt-1 block font-display text-xl hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 font-display text-xl">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="gold-rule my-8" />

          <p className="eyebrow">Réseaux</p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-2xl shadow-soft ring-gold">
          <iframe
            title="Carte Bella Verde"
            src={site.mapsEmbed}
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
