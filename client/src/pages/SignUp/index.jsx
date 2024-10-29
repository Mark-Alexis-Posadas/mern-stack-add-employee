import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eye from "../../components/Eye";

export default function SignUp() {
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

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        } else if (values.firstName.length > 15) {
          errors.firstName = "Must be 15 characters or less";
        }
        if (!values.middleName) {
          errors.middleName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Required";
        }

        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords must match";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await axios.post("http://localhost:4000/auth/sign-up", values);
          navigate("/login");
          setValues(initialValues);
        } catch (error) {
          console.log(error);
        } finally {
          setSubmitting(false);
        }
      }}
      className="min-h-screen w-full bg-gray-100 flex items-center justify-center"
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
      }) => (
        <form
          className="bg-white shadow-lg rounded-lg p-8 w-[400px]"
          onSubmit={handleSubmit}
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
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John"
              className={`${
                errors.firstName ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm">{errors.firstName}</div>
            )}
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
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="A."
              className={`${
                errors.middleName ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.middleName && (
              <div className="text-red-500 text-sm">{errors.middleName}</div>
            )}
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
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Doe"
              className={`${
                errors.lastName ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.lastName && (
              <div className="text-red-500 text-sm">{errors.lastName}</div>
            )}
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
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="john.doe@example.com"
              className={`${
                errors.email ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
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
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              className={`${
                errors.password ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              autoComplete="on"
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
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
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              className={`${
                errors.confirmPassword ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              autoComplete="on"
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-200"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
        </form>
      )}
    </Formik>
  );
}
