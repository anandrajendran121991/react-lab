export type Product = {
  id: number;
  name: string;
  description: string;
  url: string;
  price: number;
};

export type CardProps = {
  product: Product;
  inCart: boolean;
  addToCart: (id: number) => void;
};

export interface CartProps {
  cart: { id: number; name: string; price: number; url: string }[];
  onClose: () => void;
  onRemove: (id: number) => void;
}
