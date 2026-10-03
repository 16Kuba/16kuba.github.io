let flipped = false;
let quantity = 1;
let cart = 0;

const productPrice = 28;


// =========================
// BOOK FLIP
// =========================

function flipPage() {

    const page = document.getElementById("page");

    if (!page) {
        return;
    }

    flipped = !flipped;

    if (flipped) {
        page.classList.add("flipped");
    } else {
        page.classList.remove("flipped");
    }

    updatePageIndicator();
}


function nextPage() {

    if (!flipped) {
        flipPage();
    }

}


function previousPage() {

    if (flipped) {
        flipPage();
    }

}


function updatePageIndicator() {

    const indicator = document.getElementById("pageIndicator");

    if (!indicator) {
        return;
    }

    if (flipped) {
        indicator.textContent = "Page 05 / 34";
    } else {
        indicator.textContent = "Page 04 / 34";
    }

}


// =========================
// QUANTITY
// =========================

function increaseQuantity() {

    quantity++;

    const quantityElement = document.getElementById("quantity");

    if (quantityElement) {
        quantityElement.textContent = quantity;
    }

    updatePrice();
}


function decreaseQuantity() {

    if (quantity > 1) {

        quantity--;

        const quantityElement = document.getElementById("quantity");

        if (quantityElement) {
            quantityElement.textContent = quantity;
        }

        updatePrice();
    }

}


function updatePrice() {

    const total = quantity * productPrice;

    const priceElement = document.getElementById("price");
    const cartButton = document.querySelector(".add-cart");

    if (priceElement) {
        priceElement.textContent = total.toFixed(2);
    }

    if (cartButton) {
        cartButton.textContent =
            "ADD TO BAG — £" + total.toFixed(2);
    }

}


// =========================
// COLOUR
// =========================

function selectColour(button, colour) {

    const colourButtons = document.querySelectorAll(".colour");

    colourButtons.forEach(function(item) {
        item.classList.remove("active");
    });

    button.classList.add("active");

    const selectedColour =
        document.getElementById("selectedColour");

    if (selectedColour) {
        selectedColour.textContent = colour;
    }

}


// =========================
// ADD TO BAG
// =========================

function addToCart() {

    cart += quantity;

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart;
    }

    const button =
        document.querySelector(".add-cart");

    if (!button) {
        return;
    }

    button.textContent = "✓ ADDED TO BAG";

    button.style.background = "#2563eb";

    setTimeout(function() {

        updatePrice();

        button.style.background = "#111827";

    }, 1200);

}


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }

}


// =========================
// INITIALISE
// =========================

document.addEventListener("DOMContentLoaded", function() {

    const page = document.getElementById("page");

    if (page) {

        page.addEventListener("click", function() {
            flipPage();
        });

    }

    updatePrice();
    updatePageIndicator();

});