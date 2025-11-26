export interface ProductSummary {
  id: string;
  title: string;
  price: number;
  image?: string;
}

export interface Box {
  id: string;
  name: string;
  description: string;
  type: "glow" | "immunity" | "detox" | "energy";
  products: ProductSummary[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
}
