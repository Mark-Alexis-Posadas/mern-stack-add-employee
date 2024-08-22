import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/signup", {
        firstName,
        middleName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      navigate("/login");
      setValues("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="p-3 rounded bg-slate-50 shadow-md w-[700px]"
      onSubmit={handleFormSubmit}
    >
      <h1 className="font-bold text-2xl mb-3">Sign Up</h1>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          First Name
        </label>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          placeholder="first name"
          id="first_name"
          name="firstName"
          value={values.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Middle Name
        </label>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          placeholder="middle name"
          id="middle_name"
          name="middleName"
          value={values.middleName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Last Name
        </label>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          placeholder="last name"
          id="last_name"
          name="lastName"
          value={values.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Email
        </label>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          placeholder="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Password
        </label>
        <input
          type="password"
          className="border border-slate-300 rounded p-2"
          placeholder="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          autoComplete="on"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Confirm Password
        </label>
        <input
          type="password"
          className="border border-slate-300 rounded p-2"
          placeholder="password"
          id="confirm_password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleInputChange}
          autoComplete="on"
        />
      </div>

      <button className="bg-blue-600 text-white rounded p-2" type="submit">
        Sign up
      </button>
    </form>
  );
}
