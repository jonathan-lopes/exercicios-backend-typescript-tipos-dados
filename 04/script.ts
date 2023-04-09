type Product = {
  product: string;
  batch: number;
  year: number;
  quantity: number;
};

const products: Product[] = [
  {
    product: "CPU Dual Core 3.0GHZ",
    batch: 321,
    year: 2022,
    quantity: 5,
  },
  {
    product: "Mouse",
    batch: 568,
    year: 2020,
    quantity: 12,
  },
  {
    product: "keyboard",
    batch: 741,
    year: 2023,
    quantity: 3,
  },
];

function generateTags(products: Product[]) {
  const tags = products.map(
    (product) =>
      `${product.batch}-${product.year}-${String(product.quantity).padStart(
        3,
        "0"
      )}`
  );

  return tags;
}

console.log(generateTags(products));
