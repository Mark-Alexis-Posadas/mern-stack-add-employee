import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Eye from "../../components/Eye";
import { Input } from "../../components/Input/Input";
import { Error } from "../../components/Error/Error";

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name can be at most 50 characters")
    .required("First name is required"),

  middleName: Yup.string()
    .matches(/^[A-Za-z]*$/, "Middle name can only contain letters")
    .min(2, "Middle name must be at least 2 characters")
    .max(50, "Middle name can be at most 50 characters")
    .notRequired(), // Middle name is optional

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name can be at most 50 characters")
    .required("Last name is required"),

  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match") // Ensure it matches the password
    .required("Confirm Password is required"),
});

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
      validationSchema={Schema}
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
          <ErrorMessage component={Error} name="firstName" />
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

          <ErrorMessage component={Error} name="middleName" />
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
          <ErrorMessage component={Error} name="lastName" />
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
          <ErrorMessage component={Error} name="email" />
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

          <div className="mb-4 relative">
            {values.password.length > 0 && (
              <Eye
                isToggle={isPasswordVisible}
                handleToggle={handlePasswordToggle}
              />
            )}

            <Field
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
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
            <ErrorMessage component={Error} name="password" />
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
              type={isPasswordVisible ? "text" : "password"}
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
            <ErrorMessage component={Error} name="confirmPassword" />
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
