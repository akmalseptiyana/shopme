export type ProductItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: { rate: number; count: number };
};
