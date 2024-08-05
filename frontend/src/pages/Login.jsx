import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    try {
      const response = await axios.post(
        "https://portfolio-assignment-backend.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("email", email);
      localStorage.setItem("token", response.data.token);
      toast.success("loggedIn successfully");
      // Redirect or update UI as needed
      navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed";
      toast.error("Error: " + errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="py-48 min-h-screen section-container flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="section-heading text-center pb-6">Login!</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 ease-in-out"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 ease-in-out"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
