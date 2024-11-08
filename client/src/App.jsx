import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-slate-50 dark:bg-black">
      {/* <Navbar /> */}
      <Routes>
        <Route element={<AuthenticationLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route path="/" element={<EmployeeLayout />}>
          <Route index element={<AddEmployee />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
