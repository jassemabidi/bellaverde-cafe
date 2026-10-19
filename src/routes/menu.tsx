import { createFileRoute } from "@tanstack/react-router";

import { formatPrice, menu } from "@/lib/menu-data";
import { site } from "@/lib/site-info";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "La Carte · Bella Verde Salon de thé" },
      {
        name: "description",
        content:
          "La carte de Bella Verde : petit déjeuner, desserts, jus frais, smoothies, mojitos et boissons. Prix en dinars tunisiens.",
      },
      { property: "og:title", content: "La Carte · Bella Verde Salon de thé" },
      {
        property: "og:description",
        content: "Petit déjeuner, desserts, jus, smoothies et mojitos à El Mourouj.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-4xl px-5 pt-20 pb-10 text-center">
        <p className="eyebrow">Bella Verde</p>
        <h1 className="mt-2 font-script text-7xl text-primary md:text-8xl">La Carte</h1>
        <div className="gold-rule mx-auto my-6 w-40" />
        <p className="text-muted-foreground">Prix en dinars tunisiens · Sur place et à emporter</p>
      </section>

      {/* Category nav */}
      <nav className="sticky top-20 z-40 border-y border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-5 py-3">
          {menu.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="shrink-0 rounded-full border border-border px-4 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-5xl space-y-24 px-5 py-20">
        {menu.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-40 grid items-start gap-10 ${cat.image ? "md:grid-cols-[1fr_1.3fr]" : ""}`}
          >
            {cat.image && (
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full rounded-2xl object-cover shadow-soft ring-gold md:sticky md:top-40"
                />
              </div>
            )}

            <div className={cat.image ? "" : "mx-auto w-full max-w-2xl"}>
              <p className="eyebrow">{cat.subtitle}</p>
              <h2 className="mt-2 text-4xl md:text-5xl">{cat.title}</h2>
              <div className="gold-rule my-6 w-24" />
              <ul className="space-y-7">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-xl font-medium md:text-2xl">{item.name}</h3>
                      <span className="leader-dots" aria-hidden />
                      <span className="font-display text-xl whitespace-nowrap text-primary">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <p className="font-script text-5xl text-gold-soft">Envie de commander ?</p>
          <p className="mt-3 opacity-80">Appelez-nous ou retrouvez Bella Verde sur Glovo.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.phoneHref}
              className="rounded-full bg-gold px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-forest transition-colors hover:bg-gold-soft"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.glovo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-forest-foreground/50 px-8 py-3.5 text-sm tracking-[0.2em] uppercase transition-colors hover:bg-forest-foreground/10"
            >
              Commander sur Glovo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
