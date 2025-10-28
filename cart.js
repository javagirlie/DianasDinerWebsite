let cart = JSON.parse(localStorage.getItem("cart")) || {};

// const Product = {
//             name: '',
//             price: 0,
//             quantity: 0,
//             category: ''
//         };

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartCountElement = document.getElementById("cart-count");
    if (!cartCountElement) return;
    let totalItems = 0;
    for (let product in cart) {
            totalItems += cart[product].quantity;
    }
    cartCountElement.textContent = totalItems;
}

function addToCart(productName, productPrice) {
    if(cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            name: productName,
            quantity: 1,
            price: productPrice,
            totalPrice: productPrice
        };
    }
    saveCart();
    updateCartDisplay();
}

function clearCart() {
    cart = {};
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function restartCart() {
    clearCart();
    displayOrderPage();
}


function displayOrderPage() {
    const namesDiv = document.getElementById("names");
    const quantitiesDiv = document.getElementById("quantities");
    const pricesDiv = document.getElementById("prices");
    const totalDiv = document.getElementById("total");

    //if these elements dont exist, exit
    if(!namesDiv || !quantitiesDiv || !pricesDiv || !totalDiv) return;

    namesDiv.innerHTML = "";
    quantitiesDiv.innerHTML = "";
    pricesDiv.innerHTML = "";

    let grandTotal = 0;
    for (let key in cart) {
        const item = cart[key];

        const nameEl = document.createElement("p");
        nameEl.textContent = item.name;
        namesDiv.appendChild(nameEl);

        const quantityEl = document.createElement("p");
        quantityEl.textContent = item.quantity;
        quantitiesDiv.appendChild(quantityEl);

        const priceEl = document.createElement("p");
        priceEl.textContent = `$${item.totalPrice.toFixed(2)}`;
        pricesDiv.appendChild(priceEl);

        grandTotal += item.totalPrice;
    }
    
totalDiv.textContent = `$${grandTotal.toFixed(2)}`;
}
//run once when the page loads 
document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();
    displayOrderPage();
});

