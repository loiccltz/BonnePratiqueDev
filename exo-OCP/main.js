const amountInput = document.querySelector('#order-amount');
const shippingSelect = document.querySelector('#shipping-type');
const calcButton = document.querySelector('#calc-btn');
const resultEl = document.querySelector('#result');

function formatPrice(value) {
  return value.toFixed(2).replace('.', ',') + ' €';
}

const SHIPPING = {
  standard: function (amount) {
    return amount >= 50 ? 0 : 4.99;
  },
  express: function (amount) {
    return amount >= 100 ? 0 : 9.99;
  },
  pickup: function (amount) {
    return amount >= 30 ? 0 : 2.99;
  },
  // si on veut rajouter un nouveau mode de livraison, on ajoute une nouvelle fonction ici, en changeant uniquement le nom
  // de la methode de livraison et la logique de calcule
  drone: function (amount) {
  return amount >= 200 ? 0 : 14.99;
  }
};

function calculateShippingCost(type, amount) {
  const func = SHIPPING[type];
  if (func) {
    return fn(amount);
  }
  return 0;
}

calcButton.addEventListener('click', function () {
  const type = shippingSelect.value;
  const amount = Number(amountInput.value) || 0;
  const shippingCost = calculateShippingCost(type, amount);
  resultEl.textContent = 'Frais de livraison : ' + formatPrice(shippingCost);
});
