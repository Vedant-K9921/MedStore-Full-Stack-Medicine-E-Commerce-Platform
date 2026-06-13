import { Link } from "react-router-dom";

function CustomerLayout({ children }) {

  return (
    <div>

      {/* Top Navigation */}

      <div
        style={{
          height: "70px",
          backgroundColor: "#1976d2",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 30px",
        }}
      >

        <h2>MedStore</h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >

          <Link
            to="/shop"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Shop
          </Link>

          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Cart
          </Link>

          <Link
            to="/login"
            style={{
              backgroundColor: "white",
              color: "#1976d2",
              padding: "8px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Admin Login
          </Link>

        </div>

      </div>

      {/* Customer Content */}

      <div
        style={{
          padding: "30px",
        }}
      >

        {children}

      </div>

    </div>
  );
}

export default CustomerLayout;