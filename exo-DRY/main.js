const products = [
  { name: 'Clavier gaming', price: 79, inStock: true, onSale: false },
  { name: 'Souris sans fil', price: 49, inStock: true, onSale: true },
  { name: 'Écran 27"', price: 249, inStock: false, onSale: true },
  { name: 'Casque audio', price: 129, inStock: true, onSale: false }
];

const listEl = document.querySelector('#products-list');
const emptyStateEl = document.querySelector('#empty-state');

const showAllBtn = document.querySelector('#show-all-btn');
const inStockBtn = document.querySelector('#in-stock-btn');
const onSaleBtn = document.querySelector('#on-sale-btn');

function renderProducts(filtered, emptyMessage) {
  listEl.innerHTML = '';

  if (filtered.length === 0) {
    emptyStateEl.textContent = emptyMessage;
    emptyStateEl.style.display = 'block';
    return;
  } else {
    emptyStateEl.style.display = 'none';
  }

  filtered.forEach(function (product) {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Prix : ${product.price} €</p>
    `;
    listEl.appendChild(li);
  });
}

function showAll() {
  renderProducts(products, 'aucun produit a afficher');
}

function showInStock() {
  const filtered = products.filter(function (p) {
    return p.inStock;
  });
  renderProducts(filtered, 'Aucun produit en stock.');
}

function showOnSale() {
  const filtered = products.filter(function (p) {
    return p.onSale;
  });
  renderProducts(filtered, 'Aucun produit en promotion.');
}

showAllBtn.addEventListener('click', showAll);
inStockBtn.addEventListener('click', showInStock);
onSaleBtn.addEventListener('click', showOnSale);
