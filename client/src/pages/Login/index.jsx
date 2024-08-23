import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <form className="p-3 rounded bg-slate-50 shadow-md w-[700px]">
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Email
        </label>
        <input
          type="text"
          className="border border-slate-300 rounded p-2"
          placeholder="Type your email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="text-sm">
          Password
        </label>
        <input
          type="password"
          className="border border-slate-300 rounded p-2"
          placeholder="Type your password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-600 text-white rounded p-2">Sign in</button>
        <Link to="/sign-up" className="text-sm">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
