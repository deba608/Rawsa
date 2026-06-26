import type { Product, IngredientCard, CompareDrink, WhyItem, NavLink } from "./types";

export const ORDER_WHATSAPP = "918018353597";

export const navLinks: NavLink[] = [
  { href: "#flavours", label: "Flavours", id: "flavours" },
  { href: "#why", label: "Why Rawsa", id: "why" },
  { href: "#compare", label: "Compare", id: "compare" },
  { href: "#ingredients", label: "Ingredients", id: "ingredients" },
  { href: "#login", label: "Sign In", id: "login" },
];

export const sectionIds = ["hero", "flavours", "why", "compare", "ingredients", "story", "distributor"];

export const products: Product[] = [
  {
    id: "mango",
    name: "Mango",
    shortName: "Mango",
    tagline: "Golden, pulpy and sun-rich",
    front: "/rawsa-designs/cropped/Mango.png",
    back: "/rawsa-designs/cropped/MangoBack.png",
    accent: "#f59e0b",
    soft: "#fff4c8",
    fruit: "Alphonso-style fruit richness",
    notes: ["Higher pulp feel", "No added sugar", "No added colour"],
  },
  {
    id: "orange",
    name: "Orange",
    shortName: "Orange",
    tagline: "Bright citrus with clean refreshment",
    front: "/rawsa-designs/cropped/Orange.png",
    back: "/rawsa-designs/cropped/OrangeBack.png",
    accent: "#f97316",
    soft: "#ffedd5",
    fruit: "Juicy citrus brightness",
    notes: ["Zesty flavour", "Light refreshment", "Fruit-forward taste"],
  },
  {
    id: "pink-guava",
    name: "Pink Guava",
    shortName: "Guava",
    tagline: "Tropical, floral and smooth",
    front: "/rawsa-designs/cropped/PinkGuava.png",
    back: "/rawsa-designs/cropped/PinkGuavaBack.png",
    accent: "#ec4899",
    soft: "#fce7f3",
    fruit: "Pink guava pulp character",
    notes: ["Tropical aroma", "Smooth mouthfeel", "Modern fruit drink"],
  },
  {
    id: "sweet-tamarinda",
    name: "Sweet Tamarinda",
    shortName: "Tamarinda",
    tagline: "Indian tang with a sweet finish",
    front: "/rawsa-designs/cropped/SweetTamarinda.png",
    back: "/rawsa-designs/cropped/SweetTamarindaBack.png",
    accent: "#b45309",
    soft: "#fef3c7",
    fruit: "Heritage tamarind flavour",
    notes: ["Tangy profile", "Indian taste memory", "Balanced finish"],
  },
  {
    id: "appyrush",
    name: "AppyRush",
    shortName: "AppyRush",
    tagline: "Crisp apple energy",
    front: "/rawsa-designs/cropped/AppyRush.png",
    back: "/rawsa-designs/cropped/AppyRush%20Back.png",
    accent: "#dc2626",
    soft: "#fee2e2",
    fruit: "Apple-led refreshment",
    notes: ["Crisp taste", "Lively sip", "Shelf-ready design"],
  },
];

export const ingredientCards: IngredientCard[] = [
  {
    label: "Fruit Pulp",
    title: "More body in every sip",
    copy: "Rawsa is built around a fuller fruit experience, giving each flavour a richer, more satisfying mouthfeel.",
  },
  {
    label: "Herbal Touch",
    title: "Botanical inspiration",
    copy: "Ashwagandha, brahmi and Indian herbal ideas guide the wellness tone without turning the drink into medicine.",
  },
  {
    label: "Modern Choice",
    title: "Refreshment with restraint",
    copy: "No added colour and no artificial sweetener messaging stays close to the packaging and keeps the promise clear.",
  },
];

export const compareFeatures = [
  "Higher Pulp Feel",
  "No Added Sugar",
  "No Added Colour",
  "No Artificial Sweetener",
  "Herbal Inspiration",
  "Lower Calorie Direction",
  "Real Fruit Character",
];

export const compareDrinks: CompareDrink[] = [
  { name: "Rawsa", highlight: true, values: [true, true, true, true, true, true, true] },
  { name: "Regular Juice", highlight: false, values: ["partial", false, false, false, false, false, "partial"] },
  { name: "Energy Drinks", highlight: false, values: [false, false, false, "partial", false, "partial", false] },
  { name: "Carbonated Soda", highlight: false, values: [false, false, false, false, false, false, false] },
];

export const whyItems: WhyItem[] = [
  {
    title: "Higher Pulp Feel",
    copy: "Fuller fruit texture and a richer sip experience than ordinary thin refreshers.",
    icon: "drop",
  },
  {
    title: "No Added Sugar",
    copy: "A front-label promise that makes the range feel lighter, clearer and easier to trust.",
    icon: "leaf",
  },
  {
    title: "No Added Colour",
    copy: "A clean, direct packaging promise that helps Rawsa feel honest on the shelf.",
    icon: "eye",
  },
  {
    title: "No Artificial Sweetener",
    copy: "Sweetness positioning stays clear, modern and aligned with the bottle design.",
    icon: "shield",
  },
  {
    title: "Lower-Calorie Direction",
    copy: "A lighter refreshment idea for everyday moments and wellness-aware consumers.",
    icon: "spark",
  },
  {
    title: "Herbal Inspiration",
    copy: "Ashwagandha, brahmi and botanical thinking add a differentiated Indian wellness layer.",
    icon: "herb",
  },
];
