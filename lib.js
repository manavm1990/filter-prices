export const catalog = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

export const filterByMaxPrice = (products, maxPrice) =>
  products.filter(({ price }) => price.slice(1) < Number(maxPrice));

export const search = (products, searchTerm) =>
  products.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

export const filterByInStock = products =>
  products.filter(({ stocked }) => stocked);
