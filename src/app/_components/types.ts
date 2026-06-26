export type Product = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  front: string;
  back: string;
  accent: string;
  soft: string;
  fruit: string;
  notes: string[];
};

export type CmpVal = true | false | "partial";

export type IngredientCard = {
  label: string;
  title: string;
  copy: string;
};

export type WhyItem = {
  title: string;
  copy: string;
  icon: string;
};

export type CompareDrink = {
  name: string;
  highlight: boolean;
  values: CmpVal[];
};

export type NavLink = {
  href: string;
  label: string;
  id: string;
};
