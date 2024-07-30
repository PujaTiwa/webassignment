document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('addToCart');
    const cartItemsContainer = document.getElementById('cartItems');
    const checkoutForm = document.getElementById('checkoutForm');
    const confirmationSection = document.getElementById('confirmation');
    const checkoutSection = document.getElementById('checkout');
    const cartSection = document.getElementById('cart');
  
    let cart = [];
  
    addToCartButton.addEventListener('click', () => {
      const quantity = parseInt(document.getElementById('quantity').value);
      const item = { name: 'Customizable Notebook', quantity };
  
      cart.push(item);
      updateCartDisplay();
    });
  
    checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault();
      cart = [];
      updateCartDisplay();
      checkoutSection.style.display = 'none';
      confirmationSection.style.display = 'block';
    });
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = '';
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      } else {
        cart.forEach((item, index) => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
            <p>${item.name} (Quantity: ${item.quantity})</p>
            <button onclick="removeFromCart(${index})" class="btn">Remove</button>
          `;
          cartItemsContainer.appendChild(cartItem);
        });
      }
    }
  
    window.removeFromCart = (index) => {
      cart.splice(index, 1);
      updateCartDisplay();
    };
  
    // Hide confirmation section initially
    confirmationSection.style.display = 'none';
  });
  