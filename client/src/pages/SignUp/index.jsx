import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eye from "../../components/Eye";
import { Input } from "../../components/Input/Input";

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
      validate={(values) => {}}
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

          <Field
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John"
            component={Input}
            className={`${
              errors.firstName ? "border-red-500" : "border-gray-300 "
            } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          <ErrorMessage name="firstName" />

          <Field
            label="Middle Name"
            type="text"
            id="middleName"
            name="middleName"
            value={values.middleName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="A."
            component={Input}
            className={`${
              errors.middleName ? "border-red-500" : "border-gray-300 "
            } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          <ErrorMessage name="middleName" />

          <Field
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Doe"
            component={Input}
            className={`${
              errors.lastName ? "border-red-500" : "border-gray-300 "
            } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          <ErrorMessage name="lastName" />

          <Field
            label="Email"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="johndoe@gmail.com"
            component={Input}
            className={`${
              errors.email ? "border-red-500" : "border-gray-300 "
            } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          <ErrorMessage name="email" />

          <div className="mb-4 relative">
            {values.password.length > 0 && (
              <Eye
                isToggle={isPasswordVisible}
                handleToggle={handlePasswordToggle}
              />
            )}

            <Field
              label="Password"
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="johndoe@gmail.com"
              component={Input}
              className={`${
                errors.password ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            <ErrorMessage name="password" />
          </div>
          <div className="mb-6 relative">
            {values.confirmPassword.length > 0 && (
              <Eye
                isToggle={isConfirmPasswordVisible}
                handleToggle={handleConfirmPasswordToggle}
              />
            )}

            <Field
              label="Confirm Password"
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="johndoe@gmail.com"
              component={Input}
              className={`${
                errors.confirmPassword ? "border-red-500" : "border-gray-300 "
              } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            <ErrorMessage name="confirmPassword" />
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
