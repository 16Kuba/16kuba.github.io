let cart = 0;

function addToCart() {
    cart++;

    document.getElementById("cartCount").textContent = cart;
}


function toggleMenu() {
    document
        .getElementById("navLinks")
        .classList
        .toggle("active");
}


function subscribe(event) {
    event.preventDefault();

    const email = event.target.querySelector("input").value;

    alert(
        "Thanks for joining Paperly! " + email
    );

    event.target.reset();
}