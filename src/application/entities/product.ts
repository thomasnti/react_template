export type ProductTitle = string;
export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: Price;
  toppings: Ingredient[]; // υλικά
};

export function totalPrice(products: Product[]): Price {
  return products.reduce((total, { price }) => total + price, 0);
}

export const ingredients: Record<Ingredient, string> = {
  chocolate: 'Chocolate',
  cocoa: 'Cocoa Powder',
  cherry: 'Cherry',
  marshmallow: 'Marshmallow',
  peanuts: 'Peanut Butter',
};
