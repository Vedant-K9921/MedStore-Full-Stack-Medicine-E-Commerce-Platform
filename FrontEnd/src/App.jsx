import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect, useState }
  from "react";

import ProtectedRoute
  from "./components/ProtectedRoute";

import AdminLayout
  from "./layouts/AdminLayout";

import AdminRoute
  from "./components/AdminRoute";

import CustomerLayout
  from "./layouts/CustomerLayout";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Login from "./pages/Login";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

function App() {

  const [isAuthenticated,
    setIsAuthenticated] =
      useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    }

  }, []);

  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={
                setIsAuthenticated
              }
            />
          }
        />

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={
            <AdminRoute>

              <AdminLayout>

                <Home />

              </AdminLayout>

            </AdminRoute>
          }
        />

        <Route
          path="/admin/medicines"
          element={
            <ProtectedRoute>

              <AdminLayout>

                <Medicines />

              </AdminLayout>

            </ProtectedRoute>
          }
        />

        {/* Customer Routes */}

        <Route
          path="/shop"
          element={
            <CustomerLayout>

              <Store />

            </CustomerLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <CustomerLayout>

              <Cart />

            </CustomerLayout>
          }
        />

        {/* Default Redirect */}

        <Route
          path="*"
          element={
            <Navigate to="/shop" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;