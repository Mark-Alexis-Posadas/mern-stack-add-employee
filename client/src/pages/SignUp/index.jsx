import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eye from "../../components/Eye";

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [values, setValues] = useState(initialValues);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisibility] =
    useState(false);
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordVisibility((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/auth/sign-up", values);
      navigate("/login");
      setValues(initialValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-[400px]"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
            placeholder="John"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="middleName"
            className="block text-sm font-medium text-gray-700"
          >
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={values.middleName}
            onChange={handleInputChange}
            placeholder="A."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
            placeholder="Doe"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4 relative">
          {values.password.length > 0 && (
            <Eye
              isToggle={isPasswordVisible}
              handleToggle={handlePasswordToggle}
            />
          )}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            autoComplete="on"
          />
        </div>
        <div className="mb-6 relative">
          {values.confirmPassword.length > 0 && (
            <Eye
              isToggle={isConfirmPasswordVisible}
              handleToggle={handleConfirmPasswordToggle}
            />
          )}
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleInputChange}
            placeholder="••••••••"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            autoComplete="on"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
