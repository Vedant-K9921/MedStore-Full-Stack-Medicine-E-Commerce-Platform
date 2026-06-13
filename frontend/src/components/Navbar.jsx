function Navbar() {

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="navbar">

      <span>
        Medicine Store Admin Panel
      </span>

      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 14px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;