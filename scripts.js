import { catalog, filterByInStock, filterByMaxPrice, search } from './lib.js';

const tbody = document.querySelector('tbody');
const { content } = document.querySelector('template');

/**
 * Render based on the value of `maxPrice`
 * @param {number} maxPrice
 */
function render(products) {
  tbody.innerHTML = '';

  products.forEach(({ name, price }) => {
    const newRow = content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = name;
    tds[1].innerText = price;

    tbody.appendChild(newRow);
  });
}

render(catalog);

document
  .querySelector('#max-price')
  .addEventListener('input', ({ target: { value } }) => {
    // Filter out the catalog and pass in the filteredProducts
    render(filterByMaxPrice(catalog, value));
  });

document
  .querySelector('#in-stock-only')
  .addEventListener('change', ({ target: { checked } }) => {
    if (checked) {
      render(filterByInStock(catalog));
    } else {
      render(catalog);
    }
  });

document
  .querySelector('#search')
  .addEventListener('input', ({ target: { value } }) => {
    // Filter out the catalog and pass in the filteredProducts
    render(search(catalog, value));
  });

document.querySelector('button').addEventListener('click', () => {
  const totalValue = catalog.reduce(
    (total, { price }) => total + Number(price.slice(1)),
    0,
  );

  console.log(totalValue);
});
