/* Add any JavaScript you need to this file. */
var productsDiv = document.createElement("div");
var main;
var next;
var back;
productsDiv.id = "products";
window.addEventListener("load", loadJavaScript, false);

var index = 0;
var total = 0;
var maxNumberOfProduts = 8;
 var next

function loadJavaScript() {
  var burger = document.getElementById("burgers")
  next = document.getElementById("menu_next");
  back = document.getElementById("menu_back");
  main = document.getElementById("main")
  next.addEventListener("click", nextProducts);
  back.addEventListener("click", backProducts);
  index = 0;
  resetProductsDiv();
  createProductsDiv();
  loadProducts();
}

function nextProducts(){
  if(index < products.length){  
    resetProductsDiv();
    createProductsDiv();
    loadProducts();
  }else {
    next.style = "color: lightgrey";
  }
}

function backProducts(){
  if(index > maxNumberOfProduts){  
    index -= (maxNumberOfProduts*2);
    resetProductsDiv();
    createProductsDiv();
    loadProducts();
    next.style = "color: #596157";
  } else {
    back.style = "color: lightgrey";
  }
}

function createProductsDiv() {
  main.insertBefore(productsDiv, main.firstChild);
}

function resetProductsDiv() {
  total = 0;
  var elem = document.querySelector("#products");
  if (elem && document.getElementById("main")) {
    document.getElementById("main").removeChild(document.querySelector("#products"));
    productsDiv = document.createElement("products");
    productsDiv.id = "products";
    back.style = "color: #596157";
  } 
}

var loadProducts = () => {
  productsDiv = document.getElementById("products");
  console.log("Index eh" + index)
  for (; index < products.length && total < maxNumberOfProduts; index++) {
    total++;
    console.log("Index eh" + index)
    createCards(products[index]);
  }

 // products.forEach((product) => createCards(product))
}

var loadBurger = () => {
  productsDiv = document.getElementById("products")
}

var createCards = (product) => {
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
  var p2Node = document.createTextNode(`Weight: ${product.weigth}g`);
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
