export const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

export const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};