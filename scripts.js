const catalog = [
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

const tbody = document.querySelector('tbody');
const template = document.querySelector('template');

/**
 * Render based on the value of `maxPrice`
 * @param {number} maxPrice
 */
function render(maxPrice) {
  const filteredCatalog = maxPrice
    ? catalog.filter(({ price }) => price.slice(1) < maxPrice)
    : catalog;

  /**
   * For each (or map) item in `filteredCatalog`,
   * clone the template contents (the `tr`)
   *
   * Grab the empty `td`s.
   *
   * Insert `name` as the `textContent` in the first,
   * and do the same for `price` in the second.
   *
   * Append the row to the `tbody`
   */
}

render();

document
  .querySelector('input')
  .addEventListener('input', ({ target: { value } }) => {
    render(Number(value));
  });
