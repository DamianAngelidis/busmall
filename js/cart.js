/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var tbody = document.getElementsByTagName('tbody')[0];
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartKey')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbody.innerHTML = ''; 
console.log('I am in clear cart.');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  console.log('I am in show cart.');
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'X';
    tdEl.setAttribute("name", i);
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = cart.items[i].quantity;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = cart.items[i].product;
    trEl.appendChild(tdEl);
    tbody.appendChild(trEl);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var name = event.target.getAttribute('name');
  name = parseInt(name);
  cart.removeItem(name);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
