import { Navigate }
  from "react-router-dom";

function AdminRoute({ children }) {

  const token =
    localStorage.getItem("token");

  const role =
    localStorage.getItem("role");

  if (!token || role !== "ADMIN") {

    return <Navigate to="/shop" />;
  }

  return children;
}

export default AdminRoute;