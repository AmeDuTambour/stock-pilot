export type Product = {
  id: string;
  name: string;
  banner: string | null;
  categoryId: string;
  codeIdentifier: string;
  description: string;
  images: string[];
  isFeatured: boolean;
  isPublished: boolean;
  price: string;
  slug: string;
  stock: number;
  blockedQuantity: number;
  createdAt: string;
  updatedAt: string;
};
