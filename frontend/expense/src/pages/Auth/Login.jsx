import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { validateEmail, validPassword } from "../../utils/helper";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error on input change
    setErrors({ ...errors, [name]: "" });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format. Please enter a valid email.";
    }

    if (!validPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    console.log("formData", formData);
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please enter your details to log in
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full py-1.5 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
              }`}
              required
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full py-1.5 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"
              }`}
              required
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? <Link to="/signup" className="text-purple-600">Register</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
