var sum = 0;
var shippingSum = 0;
// import myStorage from './script'
// import products from './products'

window.onload = () => {
  var clearCart = document.getElementById('clearCart');
  var cartIsEmpty = document.getElementById('cartIsEmpty');
  var table = document.getElementById('cartTable');
  var cartButtons = document.getElementById('cartButtons');
  clearCart.addEventListener('click', () => {
    myStorage.clear();
    clearCart.style.display = 'none';
    cartButtons.style.display = 'none';
    table.style.display = 'none';
    sum = 0;
    cartIsEmpty.style.display = 'block';
  });

  if (!myStorage.getItem('Cart')) {
    clearCart.style.display = 'none';
    cartButtons.style.display = 'none';
    table.style.display = 'none';
  } else {
    cartIsEmpty.style.display = 'none';
  }

  var tBody = document.getElementById('tBody');
  var tfoot = document.getElementById('tFoot');
  var cartItems = [];
  if (cartItems) {
    cartItems = myStorage.getItem('Cart').split(',');
    var cartQuantity = [];
    cartItems.forEach(item => {
      if (!cartQuantity[item]) cartQuantity[item] = 0;
      cartQuantity[item]++;
    });
    var idPrinted = [];

    for (let i = 0; i < cartItems.length - 1; i++) {
      if (!idPrinted[cartItems[i]]) {
        var tr = document.createElement('tr');
        var thId = document.createElement('th');
        var idNode = document.createTextNode(cartItems[i]);
        thId.appendChild(idNode);

        var thName = document.createElement('th');
        var nameNode = document.createTextNode(products[cartItems[i] - 1].name);
        thName.appendChild(nameNode);

        var thQty = document.createElement('th');
        var qtyNode = document.createTextNode(cartQuantity[cartItems[i]]);
        thQty.appendChild(qtyNode);
        var thPrice = document.createElement('th');
        var priceNode = document.createTextNode(products[cartItems[i] - 1].price.toFixed(2));
        thPrice.appendChild(priceNode);

        var thTotalLocal = document.createElement('th');

        var totalNodeLocal = document.createTextNode(
          (products[cartItems[i] - 1].price * cartQuantity[cartItems[i]]).toFixed(2)
        );
        sum += products[cartItems[i] - 1].price * cartQuantity[cartItems[i]];
        shippingSum +=
          products[cartItems[i] - 1].weight * cartQuantity[cartItems[i]] * 0.005 - 0.001;

        thTotalLocal.appendChild(totalNodeLocal);
        tr.style.backgroundColor = 'white';
        tr.appendChild(thId);
        tr.appendChild(thName);
        tr.appendChild(thQty);
        tr.appendChild(thPrice);
        tr.appendChild(thTotalLocal);
        tBody.appendChild(tr);
        idPrinted[cartItems[i]] = true;
      }
    }
    sum += shippingSum;
    var trFoot = document.createElement('tr');
    trFoot.className = 'tFooter';
    var trFootShipping = document.createElement('tr');
    trFootShipping.className = 'tFooter';
    var thShipping = document.createElement('th');
    var shippingNodeText = document.createTextNode('Shipping Fees (weight)');
    thShipping.appendChild(shippingNodeText);
    thShipping.style.textAlign = 'right';
    thShipping.style.paddingRight = '3%';
    thShipping.colSpan = 4;
    var thShippingValue = document.createElement('th');
    var shippingNode = document.createTextNode((shippingSum * 1).toFixed(2));
    thShippingValue.appendChild(shippingNode);
    trFootShipping.appendChild(thShipping);
    trFootShipping.appendChild(thShippingValue);

    var thTotal = document.createElement('th');
    thTotal.colSpan = 4;

    var totalNode = document.createTextNode('Total CAD$');
    thTotal.appendChild(totalNode);
    thTotal.style.textAlign = 'right';
    thTotal.style.paddingRight = '6%';
    var thTotalValue = document.createElement('th');
    var valueNode = document.createTextNode((sum * 1).toFixed(2));
    thTotalValue.appendChild(valueNode);

    trFoot.appendChild(thTotal);
    trFoot.appendChild(thTotalValue);
    tfoot.appendChild(trFootShipping);
    tfoot.appendChild(trFoot);
  }
};
