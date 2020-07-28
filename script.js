/* Add any JavaScript you need to this file. */
var productsDiv;
window.addEventListener("load", loadJavaScript, false);

function loadJavaScript() {

  loadProducts();
}

var loadProducts = () => {
  console.log(products[0])
  productsDiv = document.getElementById("products");
  products.forEach((product) => createCards(product))
}

var createCards = (product) => {
  console.log(products[0])
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.src = `images/${product.id}.png`;
  img.alt = product.description;
  img.style = "width:100%"

  var h2 = document.createElement("h2");
  var h2Node = document.createTextNode(product.name);
  h2.appendChild(h2Node);

  var divInfo = document.createElement("div");
  divInfo.className = "cardInfo";

  var pInfo1 = document.createElement("p");
  var p1Node = document.createTextNode(product.description);
  pInfo1.appendChild(p1Node);
  divInfo.appendChild(pInfo1);

  var pInfo2 = document.createElement("p");
  pInfo1.className = "info";
  var p2Node = document.createTextNode(`Weigth: ${product.weigth}lbs`);
  pInfo2.appendChild(p2Node);
  pInfo2.className = "info";
  divInfo.appendChild(pInfo2);

  var pPrice = document.createElement("p");
  var priceNode = document.createTextNode("CAD ");
  pPrice.appendChild(priceNode);
  var spamPrice = document.createElement("spam");
  spamPrice.id = "price";
  var price2Node = document.createTextNode(`$${product.price}`);
  spamPrice.appendChild(price2Node);
  pPrice.appendChild(spamPrice);

  var pAdd = document.createElement("p");
  var button = document.createElement("button");
  var addNode = document.createTextNode("Add to cart")
  button.appendChild(addNode);
  pAdd.appendChild(button);

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(divInfo);
  card.appendChild(pPrice);
  card.appendChild(pAdd);

  productsDiv.appendChild(card)
}

{/* <div class="card"> XX
  <img src="images/1.png" alt="Beyond Burger" style="width:100%"> XXSS
    <h2>Beyond Burger</h2> XXSS
    <div id="cardInfo"> XXSS
      <p class="info">Plant-based Patties.</p> XXSS
      <p class="info">Weight 226 g</p> XXSS
    </div>
    <p>CAD$<spam id="price">10.90</spam> XXSS
    </p>
    <p><button>Add to cart</button></p> XX
</div> */}
