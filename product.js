let flipped = false;
let quantity = 1;
let cart = 0;

const productPrice = 28;


/* =========================
   BOOK FLIP
========================= */

function flipPage() {
    const page = document.getElementById("page");

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

    if (flipped) {
        indicator.textContent = "Page 05 / 34";
    } else {
        indicator.textContent = "Page 04 / 34";
    }
}


/* =========================
   QUANTITY
========================= */

function increaseQuantity() {
    quantity++;

    document.getElementById("quantity").textContent = quantity;

    updatePrice();
}


function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;

        document.getElementById("quantity").textContent = quantity;

        updatePrice();
    }
}


function updatePrice() {
    const total = quantity * productPrice;

    document.getElementById("price").textContent =
        total.toFixed(2);

    document.querySelector(".add-cart").textContent =
        "ADD TO BAG — £" + total.toFixed(2);
}


/* =========================
   COLOUR
========================= */

function selectColour(button, colour) {

    document
        .querySelectorAll(".colour")
        .forEach(item => {
            item.classList.remove("active");
        });

    button.classList.add("active");

    document.getElementById("selectedColour").textContent =
        colour;
}


/* =========================
   ADD TO BAG
========================= */

function addToCart() {

    cart += quantity;

    document.getElementById("cartCount").textContent = cart;

    const button = document.querySelector(".add-cart");

    button.textContent = "✓ ADDED TO BAG";

    button.style.background = "#2563eb";

    setTimeout(() => {

        updatePrice();

        button.style.background = "#111827";

    }, 1200);
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList
        .toggle("active");
}


/* =========================
   INITIALISE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("page");

    if (page) {
        page.addEventListener("click", flipPage);
    }

});