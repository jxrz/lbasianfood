export interface Supplier {
  id: string;
  name: string;
  logo: string;
  description: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  supplier: string;
  category: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}