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
const { content } = document.querySelector('template');

/**
 * Render based on the value of `maxPrice`
 * @param {number} maxPrice
 */
function render(maxPrice) {
  const filteredCatalog = maxPrice
    ? catalog.filter(({ price }) => price.slice(1) < maxPrice)
    : // If there is no `maxPrice` `filteredCatalog` will be the same as `catalog`
      catalog;

  tbody.innerHTML = '';

  filteredCatalog.forEach(({ name, price }) => {
    const newRow = content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = name;
    tds[1].innerText = price;

    tbody.appendChild(newRow);
  });
}

render();

document
  .querySelector('input')
  .addEventListener('input', ({ target: { value } }) => {
    render(Number(value));
  });
