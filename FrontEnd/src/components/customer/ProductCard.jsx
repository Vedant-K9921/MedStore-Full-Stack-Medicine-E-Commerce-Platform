import { useCart }
  from "../../context/CartContext";

function ProductCard({ medicine }) {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img
        src={medicine.imageUrl}
        alt={medicine.name}
        className="product-image"
      />

      <div className="product-content">

        <h3>{medicine.name}</h3>

        <p>{medicine.description}</p>

        <h2>₹{medicine.price}</h2>

        <button
          className="cart-btn"
          onClick={() =>
            addToCart(medicine)
          }
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;