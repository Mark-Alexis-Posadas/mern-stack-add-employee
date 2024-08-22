import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/" element={<EmployeeLayout />}>
        <Route index element={<AddEmployee />} />
      </Route>
    </Routes>
  );
};

export default App;
