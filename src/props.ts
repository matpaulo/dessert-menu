import { CartItem } from "./App";

export interface CardProps {
  title: string;
  description: string;
  price: number;
  src: string;
  alt: string;
  onAddToCart: (product: CartItem) => void;
  onUpdateQuantity: (productTitle: string, change: number) => void;
  getQuantity: (productTitle: string) => number;
}

export interface CardsProps {
  onAddToCart: (product: CartItem) => void;
  getQuantity: (productTitle: string) => number;
  onUpdateQuantity: (productTitle: string, change: number) => void;
}

export interface CartWithItemProps {
  cart: {
    title: string;
    price: number;
    quantity: number;
  }[];
  getTotalPrice: () => number;
}

export interface ModalProps {
  cart: {
    title: string;
    price: number;
    quantity: number;
  }[];
  getTotalPrice: () => number;
}
