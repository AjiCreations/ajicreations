// Array to store cart items
let cart = [];

// Load cart from localStorage (if any)
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

// Handle "Add to Cart" button click
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        const image = button.getAttribute("data-image");

        const item = { name, price, image };
        cart.push(item);

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});

// Load cart items on cart page
if (document.getElementById("cart-list")) {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    // Clear existing cart items
    cartList.innerHTML = "";

    // Add each item in the cart to the list
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(listItem);

        total += item.price;
    });

    // Update total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Checkout functionality (Redirect to thank you page or clear cart)
const checkoutButton = document.getElementById("checkout-button");
if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
        // For demo, clear cart and redirect
        localStorage.removeItem("cart");
        alert("Thank you for your purchase!");
        window.location.href = "index.html";
    });
}
