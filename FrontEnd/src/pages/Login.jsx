import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

function Login({ setIsAuthenticated }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await loginUser(formData);

      if (response.data.token) {

        localStorage.setItem(
          "token",
          response.data.token
        );
        localStorage.setItem(
         "role",
         "ADMIN"
        );

        setIsAuthenticated(true);

        alert("Login successful");

        navigate("/admin");

      } else {

        alert("Invalid credentials");
      }

    } catch (error) {

      console.error(error);

      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "100px auto",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
      }}
    >

      <h2 style={{ marginBottom: "20px" }}>
        Login
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;