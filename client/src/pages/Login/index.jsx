import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Eye from "../../components/Eye";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPasswordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: emailValue,
        password: passwordValue,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      setError("Invalid credentials or server error.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordToggle = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <form
      className="p-3 rounded bg-slate-50 shadow-md w-[700px]"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <div className="flex flex-col mb-3">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-slate-300 rounded p-2"
          placeholder="Type your email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3 relative">
        {passwordValue.length > 0 && (
          <Eye
            handleToggle={handlePasswordToggle}
            isToggle={isPasswordVisibility}
          />
        )}
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          autoComplete="current-password"
          type={isPasswordVisibility ? "text" : "password"}
          id="password"
          className="border border-slate-300 rounded p-2"
          placeholder="Type your password"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2"
          disabled={loading} // Disable button when loading
        >
          <Link to="/" className="text-sm">
            {loading ? "Signing in..." : "Sign in"}
          </Link>
        </button>
        <Link to="/sign-up" className="text-sm">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
