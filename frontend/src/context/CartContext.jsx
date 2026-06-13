import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] =
    useState([]);

  // Add to cart
  const addToCart = (medicine) => {

    const existingItem =
      cartItems.find(
        (item) => item.id === medicine.id
      );

    if (existingItem) {

      const updatedCart =
        cartItems.map((item) =>

          item.id === medicine.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...medicine,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove item
  const removeFromCart = (id) => {

    const updatedCart =
      cartItems.filter(
        (item) => item.id !== id
      );

    setCartItems(updatedCart);
  };

  // Increase quantity
  const increaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    setCartItems(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      ).filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  // Total price
  const getTotalPrice = () => {

    return cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};