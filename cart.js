window.onload = () => {
    var clearCart = document.getElementById("clearCart");

    clearCart.addEventListener("click", () => {
        myStorage.clear();
    });

    if(!myStorage.getItem("Cart")){
        console.log("Cart is empty!")
    }


}