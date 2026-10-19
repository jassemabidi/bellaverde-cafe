import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Leaf, Coffee, Flower2 } from "lucide-react";

import interior from "@/assets/bella-verde-interior.jpg.asset.json";
import logo from "@/assets/bella-verde-logo.jpg.asset.json";
import mojitosImg from "@/assets/menu-mojitos.jpg";
import dessertsImg from "@/assets/menu-desserts.jpg";
import juicesImg from "@/assets/menu-juices.jpg";
import { site } from "@/lib/site-info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bella Verde · Salon de thé à El Mourouj" },
      {
        name: "description",
        content:
          "Un jardin suspendu au cœur d'El Mourouj : jus frais, mojitos, smoothies et desserts maison. Ouvert jusqu'à 2h.",
      },
      { property: "og:title", content: "Bella Verde · Salon de thé à El Mourouj" },
      {
        property: "og:description",
        content: "Jus frais, mojitos, smoothies et desserts maison dans un décor fleuri.",
      },
    ],
  }),
  component: Index,
});

const reviews = [
  { name: "Wiwi", text: "Joliment décoré, très bonne cuisine et serveurs agréables." },
  { name: "nesrine hamroun", text: "Cadre très agréable, personnel sympathique, je recommande vivement." },
  { name: "Yessyne Mar", text: "Très bonne expérience. Cuisine 5/5, service 5/5." },
];

const highlights = [
  { img: juicesImg, title: "Jus & Smoothies", text: "Fruits frais mixés minute" },
  { img: mojitosImg, title: "Mojitos", text: "Fraise, bleu, virgin…" },
  { img: dessertsImg, title: "Desserts", text: "Tiramisu, cheesecake, fondant" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src={interior.url}
          alt="La salle de Bella Verde avec son plafond végétal et son arche fleurie"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-end px-5 pb-20 text-center text-forest-foreground">
          <p className="eyebrow animate-rise text-gold-soft">Salon de thé · El Mourouj</p>
          <h1 className="animate-rise mt-4 font-script text-7xl leading-[0.9] md:text-9xl [animation-delay:120ms]">
            Bella Verde
          </h1>
          <p className="animate-rise mt-6 max-w-lg font-display text-xl italic md:text-2xl [animation-delay:240ms]">
            Un jardin suspendu pour vos pauses gourmandes, du matin jusqu'à 2h.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:360ms]">
            <Link
              to="/menu"
              className="rounded-full bg-gold px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-forest transition-colors hover:bg-gold-soft"
            >
              Voir la carte
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-forest-foreground/60 px-8 py-3.5 text-sm tracking-[0.2em] uppercase transition-colors hover:bg-forest-foreground/10"
            >
              Nous trouver
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
          <div className="mx-auto w-full max-w-sm">
            <img
              src={logo.url}
              alt="Logo Bella Verde salon de thé"
              loading="lazy"
              className="aspect-square w-full rounded-full object-cover shadow-soft ring-gold"
            />
          </div>
          <div>
            <p className="eyebrow">Bienvenue</p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Fleurs, verdure <em className="text-primary">&amp;</em> douceurs
            </h2>
            <div className="gold-rule my-7 w-32" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sous un plafond de fougères et de lumières tressées, Bella Verde vous accueille pour un
              café, un jus pressé ou un mojito bien frais. Sur place ou à emporter, toujours avec le
              sourire.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: Leaf, label: "Décor végétal" },
                { icon: Coffee, label: "Sur place & à emporter" },
                { icon: Flower2, label: "Desserts maison" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs tracking-wide text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">À la carte</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Nos incontournables</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <Link
              key={h.title}
              to="/menu"
              className="group overflow-hidden rounded-2xl bg-card shadow-soft ring-gold"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={h.img}
                  alt={h.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-primary-foreground transition-colors hover:bg-forest"
          >
            Toute la carte
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="text-center">
            <p className="eyebrow">Avis Google</p>
            <div className="mt-4 flex items-center justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl">5,0 · 16 avis</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-card p-8 shadow-soft">
                <blockquote className="font-display text-xl italic leading-relaxed text-foreground">
                  « {r.text} »
                </blockquote>
                <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="font-script text-6xl text-primary">À très vite</p>
        <p className="mt-4 text-lg text-muted-foreground">{site.address}</p>
        <p className="text-muted-foreground">{site.hours}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={site.phoneHref}
            className="rounded-full bg-primary px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-primary-foreground transition-colors hover:bg-forest"
          >
            Appeler · {site.phoneDisplay}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-primary transition-colors hover:bg-secondary"
          >
            Instagram
          </a>
        </div>
      </section>
    </>
  );
}
