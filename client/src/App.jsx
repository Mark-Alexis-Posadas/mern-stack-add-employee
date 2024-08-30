import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const [isTogglePassword, setIsTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setIsTogglePassword(!isTogglePassword);
  };
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path="/login" element={<Login />} />
        <Route
          path="/sign-up"
          element={
            <SignUp
              isTogglePassword={isTogglePassword}
              handleTogglePassword={handleTogglePassword}
            />
          }
        />
      </Route>

      <Route path="/" element={<EmployeeLayout />}>
        <Route index element={<AddEmployee />} />
      </Route>
    </Routes>
  );
};

export default App;
