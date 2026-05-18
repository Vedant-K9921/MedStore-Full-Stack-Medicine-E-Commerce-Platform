import { useCart }
  from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();

  return (
    <div>

      <h1 style={{ marginBottom: "20px" }}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <p>Cart is empty</p>

      ) : (

        <div>

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="medicine-card"
              style={{
                marginBottom: "20px",
              }}
            >

              <h3>{item.name}</h3>

              <p>
                Price: ₹{item.price}
              </p>

              <p>
                Quantity: {item.quantity}
              </p>

              <div
                style={{
                  marginTop: "10px",
                }}
              >

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  className="edit-btn"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="edit-btn"
                >
                  -
                </button>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="delete-btn"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <h2>
            Total: ₹{getTotalPrice()}
          </h2>

        </div>
      )}

    </div>
  );
}

export default Cart;