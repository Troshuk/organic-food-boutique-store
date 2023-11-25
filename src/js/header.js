import Cart from "./services/Cart";
function updateCartItemCount() {
document.getElementById('cartitemcount').textContent = Cart.getCount();
}
updateCartItemCount();