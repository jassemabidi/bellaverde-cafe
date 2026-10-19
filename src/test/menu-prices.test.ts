import { describe, expect, it } from "vitest";

import { formatPrice, menu } from "@/lib/menu-data";

function priceOf(name: string) {
  return menu.flatMap((c) => c.items).find((i) => i.name === name)?.price;
}

describe("Bella Verde menu prices", () => {
  it("Petit Déjeuner Express costs 11 DT", () => {
    expect(priceOf("Petit Déjeuner Express")).toBe(11);
  });

  it("Mojito Énergétique costs 15.5 DT", () => {
    expect(priceOf("Mojito Énergétique")).toBe(15.5);
  });

  it("Tiramisu costs 6.5 DT", () => {
    expect(priceOf("Tiramisu")).toBe(6.5);
  });

  it("formats prices the Tunisian way with three decimals", () => {
    expect(formatPrice(6.5)).toBe("6.500 DT");
  });
});
