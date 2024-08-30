import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import Eye from "../../components/Eye";
import { useShowEye } from "../../hooks/useShowEye";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { isToggle } = useToggle();
  const { isShowEye, setIsShowEye } = useShowEye();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    if (e.target.value.length > 0) {
      setIsShowEye(true);
      return;
    }
    setIsShowEye(false);
  };
  return (
    <form
      className="p-3 rounded bg-slate-50 shadow-md w-[700px]"
      onSubmit={handleSubmit}
    >
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
      <div className="flex flex-col mb-3 relative">
        {isShowEye && <Eye />}
        <label htmlFor="" className="text-sm">
          Password
        </label>
        <input
          type={isToggle ? "text" : "password"}
          className="border border-slate-300 rounded p-2"
          placeholder="Type your password"
          value={passwordValue}
          onChange={handlePasswordChange}
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
