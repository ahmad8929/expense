import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { validateEmail, validPassword } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import { Toaster, toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [errors, setErrors] = useState({ fullName: "", email: "", password: "" });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {updateUser} = useContext(UserContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };  

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation checks
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format. Please enter a valid email address.";
    }

    if (!validPassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    // If errors exist, update state and stop signup
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    console.log("Signup Data", formData);

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData);
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }

    setLoading(false);
  };

  return (
    <AuthLayout>
        <Toaster position="top-center" richColors /> 
      <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Sign up to start tracking your expenses</p>
        
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full py-1.5 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.fullName ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"}`}
              required
            />
            {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full py-1.5 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"}`}
              required
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full py-1.5 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-purple-500"}`}
              required
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-purple-600">Log In</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
