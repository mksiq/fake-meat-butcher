var selectList;
var errorList = "";
window.addEventListener('load', loadSelect, false);
function loadSelect() {
    var orderContact = document.getElementById("orderContact");
    orderContact.addEventListener("click", showOrderNumber);
    var questionContact = document.getElementById("questionContact");
    questionContact.addEventListener("click", hideOrderNumber);
    var commentContact = document.getElementById("commentContact");
    commentContact.addEventListener("click", hideOrderNumber);
    var clear = document.getElementById("clearButtonForm");
    clear.addEventListener("click", hideOrderNumber);
    selectList = document.getElementById('cities');
    sortedCities.forEach((city) => {
        var option = document.createElement("option");
        option.value = city;
        selectList.appendChild(option);
    });
}
function formValidation() {
    errorList = [];
    validateName();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateCategory();
    validateOrderNumber();
    validateMessage();
    if (errorList.length >= 1) {
        console.log(errorList);
        alert(errorList)
        return false;
    } else {
        return true;
    }
}
function validateName() {
    var allAlpha = true;
    var elem = document.querySelector("#fullName");
    var inputValue = elem.value.trim();
    inputValue = inputValue.toUpperCase();
    if(inputValue.length < 2){
        errorList +="Invalid Name. Too short.\n";
        elem.focus();
    } else {
        for (var i = 0; i < inputValue.length; i++) {
            // check all characters are not numbers, as we must be able to accept special chars for name
            if (!isNaN(inputValue.charAt(i))) {
                allAlpha = false;
            }
        }
        if (!allAlpha) {
            errorList +="Invalid Name. Don't use numbers.\n";
            elem.focus();
        }
    }
}
function validateAddress() {
    var elem = document.querySelector("#address");
    if (elem.value.split(" ").length < 2) {
        errorList +="Invalid Address. It must have at least two words.\n";
    }
}
function validateCity() {
    var elem = document.querySelector("#city");
    if (elem.value == "") {
        errorList +="Select a city.\n";
    }
}
function validatePostalCode() {
    var postalCode = document.contact.postal;
    var postalPattern = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
    if (!postalCode.value.match(postalPattern)) {
        errorList +="Invalid Postal Code.\n";
    }
}
function validateCategory() {
    var radio_num = document.contact.category.length;
    var checked = false;
    for (var i = 0; i < radio_num; i++) {
        if (document.contact.category[i].checked) {
            checked = true;
        }
    }
    if (!checked) {
        errorList +="Please select a category.\n";
    }
}
function validateOrderNumber() {
    var orderNumber = document.querySelector("#orderNumber");
    if(orderNumber.style.display == "inline"){
        var elem = document.querySelector("#orderNumber");
        if (elem.value.trim().length == 0) {
            errorList +="Please enter Order Number.\n";
        }
    }
}
function validateMessage() {
    var elem = document.querySelector("#message");
    if (elem.value.trim().length == 0) { // check length of textarea
        errorList +="Please enter your Message.\n";
        elem.value.value = "";
        elem.focus();
    } else if (elem.value.split(" ").length < 2) {
        errorList +="Please give more information.\n";
        elem.focus();
    }
}
function showOrderNumber() {
    var orderNumber = document.querySelector("#orderNumber");
    orderNumber.style.display = "inline";
}
function hideOrderNumber() {
    var orderNumber = document.querySelector("#orderNumber");
    if (orderNumber.style.display == "inline") {
        orderNumber.style.display = "none";
    }
}