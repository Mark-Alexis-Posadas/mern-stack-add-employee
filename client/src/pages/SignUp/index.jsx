import React from "react";

export default function SignUp() {
  return (
    <form className="p-3 rounded bg-slate-50 shadow-md w-[700px]">
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
        />
      </div>

      <button className="bg-blue-600 text-white rounded p-2">Sign up</button>
    </form>
  );
}
