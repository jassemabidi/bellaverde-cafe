import breakfastImg from "@/assets/menu-breakfast.jpg";
import dessertsImg from "@/assets/menu-desserts.jpg";
import juicesImg from "@/assets/menu-juices.jpg";
import mojitosImg from "@/assets/menu-mojitos.jpg";

export type MenuItem = {
  name: string;
  description?: string;
  /** Price in Tunisian dinars */
  price: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "petit-dejeuner",
    title: "Formules Petit Déjeuner",
    subtitle: "Pour bien commencer la journée",
    image: breakfastImg,
    items: [
      {
        name: "Petit Déjeuner Express",
        description: "Café au choix, jus frais, viennoiserie, eau (0,5l)",
        price: 11,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Douceurs maison",
    image: dessertsImg,
    items: [
      {
        name: "Fondant Chocolat Pistache",
        description: "Fondant au chocolat et pistache",
        price: 10,
      },
      { name: "Tiramisu", description: "Mascarpone, chocolat", price: 6.5 },
      { name: "Cheesecake", description: "Fromage, biscuit", price: 6.5 },
    ],
  },
  {
    id: "jus",
    title: "Les Jus",
    subtitle: "Pressés et mixés minute",
    image: juicesImg,
    items: [
      { name: "Jus de Citronnade aux Amandes", description: "Citronnade, amandes", price: 9 },
      { name: "Jus de Kiwi Banane", description: "Cocktail de kiwi, banane", price: 12 },
      { name: "Jus de Banane", price: 9 },
      { name: "Jus de Mangue Banane", description: "Cocktail de mangue, banane", price: 11.5 },
      { name: "Jus de Datte Banane", description: "Cocktail de datte, banane", price: 12 },
      { name: "Jus de Fraise Banane", description: "Cocktail de fraise, banane", price: 10.5 },
      {
        name: "Jus de Datte Banane Fruits Secs",
        description: "Datte, banane, fruits secs",
        price: 14,
      },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    subtitle: "Onctueux et vitaminés",
    items: [
      {
        name: "Smoothie Exotique",
        description: "Ananas, noix de coco, menthe fraîche, kiwi",
        price: 14.5,
      },
      { name: "Smoothie Kiwi Banane", description: "Kiwi, banane", price: 13 },
    ],
  },
  {
    id: "mojitos",
    title: "Mojitos",
    subtitle: "Frais, pétillants, sans alcool",
    image: mojitosImg,
    items: [
      {
        name: "Mojito Fraise",
        description: "Menthe, sirop de fraise, boisson gazeuse",
        price: 11,
      },
      { name: "Mojito Virgin", description: "Menthe, boisson gazeuse", price: 10 },
      { name: "Mojito Bleu", description: "Menthe, sirop bleu, boisson gazeuse", price: 11 },
      {
        name: "Mojito Énergétique",
        description: "Menthe, boisson énergisante Shark, glaçons",
        price: 15.5,
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    subtitle: "Softs bien frais",
    items: [
      { name: "Coca-Cola Classique (24cl)", description: "Canette, boisson gazeuse", price: 3.5 },
      { name: "Fanta Orange (24cl)", description: "Canette, boisson gazeuse", price: 3.5 },
    ],
  },
];

/** Tunisian format: 6.500 DT */
export function formatPrice(price: number) {
  return `${price.toFixed(3)} DT`;
}
