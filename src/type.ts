export type CartType = {
  cart: {
    title: string;
    price: number;
    quantity: number;
  }[];
  getTotalQuantity: any;
  getTotalPrice: () => number;
};

export type CartItem = {
  title: string;
  price: number;
  quantity: number;
};