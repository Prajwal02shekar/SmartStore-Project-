
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart)
    let cartItems = document.getElementById('cart-items')
    console.log(cartItems)

    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price
        return `
        <div class="cart-items">
            <img src=${item.image} height="150px" width="150px" alt="">
            <h3>${item.name}</h3>
            <button onclick="remmoveItem(${index})">Remove Item</button>
        </div>
        `
    }).join('')

    document.getElementById('total').innerText = `Total Bills ₹${total}/-`

}
displayCartItems()


function remmoveItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart)
    cart.splice(item, 1);
    localStorage.setItem('cart', JSON.stringify(cart))
    displayCartItems();
}

function clearCart() {
    let ans = confirm("Are u sure u want clear all items");
    if (ans) {
        localStorage.setItem('cart', JSON.stringify([]))
        displayCartItems();
    }
}

function checkout() {
    alert("Thank Your For Shopping with us .Visit Again!!❤️")
    localStorage.setItem('cart', JSON.stringify([]))
    window.location.href='../HomePage.html'

}