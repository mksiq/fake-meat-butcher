var sum =0;

window.onload = () => {
    var clearCart = document.getElementById("clearCart");
    var cartIsEmpty = document.getElementById("cartIsEmpty")
    var table = document.getElementById("cartTable")
    var cartButtons = document.getElementById("cartButtons")
    clearCart.addEventListener("click", () => {
        myStorage.clear();
        clearCart.style = "display: none";
        cartButtons.style = "display: none";
        table.style = "display: none";
        sum = 0;
        cartIsEmpty.style = "display: block";
    });

    
    if(!myStorage.getItem("Cart")){
        clearCart.style = "display: none";
        cartButtons.style = "display: none";
        table.style = "display: none";
    } else {
        cartIsEmpty.style = "display: none";
    }
    
    var tBody = document.getElementById("tBody");
    var tfoot = document.getElementById("tFoot");
    var cartItems = [];
    cartItems = myStorage.getItem('Cart').split(',');

    for(let i = 0; i < cartItems.length - 1; i++){
        var tr = document.createElement("tr");
        var thId = document.createElement("th");
        var idNode = document.createTextNode(cartItems[i]);
        thId.appendChild(idNode);

        var thName = document.createElement("th");
        var nameNode = document.createTextNode(products[cartItems[i]].name);
        thName.appendChild(nameNode);

        var thQty = document.createElement("th");
        var qtyNode = document.createTextNode("1");
        thQty.appendChild(qtyNode);

        var thPrice = document.createElement("th");
        var priceNode = document.createTextNode((products[cartItems[i]].price).toFixed(2));
        thPrice.appendChild(priceNode);

        var thTotal = document.createElement("th");
    
        var totalNode = document.createTextNode((products[cartItems[i]].price * 1).toFixed(2));
        sum+=(products[cartItems[i]].price * 1);
        console.log(sum)
        thTotal.appendChild(totalNode);
        
        tr.appendChild(thId);
        tr.appendChild(thName);
        tr.appendChild(thQty);
        tr.appendChild(thPrice);
        tr.appendChild(thTotal);
        tBody.appendChild(tr);
        

        console.log(cartItems[i]);
    }
    var trFoot = document.createElement("tr");
    var thTotal = document.createElement("th");
    thTotal.colSpan="4";
    var totalNode = document.createTextNode("Total");
    thTotal.appendChild(totalNode)
    var thTotalValue = document.createElement("th");
    var valueNode = document.createTextNode((sum*1).toFixed(2));
    thTotalValue.appendChild(valueNode)

    trFoot.appendChild(thTotal);
    trFoot.appendChild(thTotalValue);

    tfoot.appendChild(trFoot)

    


    // <div class="cart">
    //   <p id="cartIsEmpty">No items Yet</p>
    //   <p><button id="clearCart">Clear Cart</button></p>

}