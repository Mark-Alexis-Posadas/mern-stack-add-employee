import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faPlusCircle, faSun } from "@fortawesome/free-solid-svg-icons";

import Modal from "../components/Modal";
import ConfirmationModal from "../components/Modal/ConfirmModal";
import EmployeeItem from "../components/EmployeeItem";

const initialInputValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
};

export default function AddEmployee() {
  const [employee, setEmployee] = useState([]);
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [isToggleModal, setIsToggleModal] = useState(false);
  const [isToggleTheme, setIstoggleTheme] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isExists, setIsExists] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleInputValuesChange = (e) => {
    const { name, value } = e.target;

    const exists = employee.some(
      (item) => item.firstName.toLowerCase() === value.toLowerCase()
    );

    setIsExists(exists);

    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch all employees
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/employee/get-all-employee"
        );
        setEmployee(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEmployee();
  }, []);

  const handleToggleTheme = () => {
    setIstoggleTheme(!isToggleTheme);
    document.body.classList.toggle("dark");
  };

  const handleCancelModal = () => {
    setEditId(null);
    setIsToggleModal(false);
    setIsEditing(false);
    setInputValues(initialInputValues);
  };

  const handleAddEmployee = () => {
    setIsToggleModal(true);
    setIsEditing(false);
    setInputValues(initialInputValues);
  };

  const handleDeleteEmployee = (id, index) => {
    setDeleteIndex(index);
    setIsDelete(true);
    setEditId(id);
  };

  const handleProceedDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/employee/delete-employee/${editId}`
      );

      setEmployee((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== editId)
      );

      setIsDelete(false);
      setEditId(null);
      setDeleteIndex(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCancelDelete = () => {
    setIsDelete(false);
    setEditId(null);
    setDeleteIndex(null);
  };

  const handleEditEmployee = async (id) => {
    try {
      setIsToggleModal(true);
      setIsEditing(true);
      setEditId(id);
      // Fetch employee data for editing
      const response = await axios.get(
        `http://localhost:4000/api/employee/get-single-employee/${id}`
      );

      // Update input values with fetched data
      setInputValues(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const employeeData = {
        firstName: inputValues.firstName,
        middleName: inputValues.middleName,
        lastName: inputValues.lastName,
        email: inputValues.email,
      };

      if (isEditing) {
        // Update employee if editing
        const response = await axios.put(
          `http://localhost:4000/api/employee/update-employee/${inputValues._id}`,
          employeeData
        );

        setEmployee((prevEmployees) =>
          prevEmployees.map((emp) =>
            emp._id === response.data._id ? response.data : emp
          )
        );
      } else {
        // Add new employee
        const response = await axios.post(
          "http://localhost:4000/api/employee/create-new-employee",
          employeeData
        );

        setEmployee((prevEmployee) => [...prevEmployee, response.data]);
      }
      setEditId(null);
      setIsToggleModal(false); // Close modal
      setInputValues(initialInputValues); // Clear inputs
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-5 md:p-10 bg-slate-50 dark:bg-black min-h-screen overflow-hidden">
      <div className="flex items-center justify-between">
        <button
          className="dark:text-gray-400 p-2 rounded bg-blue-600 text-white dark:bg-gray-800 mb-5 flex items-center gap-3"
          onClick={handleAddEmployee}
        >
          Add employee
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button onClick={handleToggleTheme}>
          <FontAwesomeIcon
            className="text-yellow-400 text-2xl cursor-pointer"
            icon={isToggleTheme ? faSun : faMoon}
          />
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                first name
              </th>
              <th scope="col" className="px-6 py-3">
                middle name
              </th>
              <th scope="col" className="px-6 py-3">
                last name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item, index) => (
              <EmployeeItem
                editId={editId}
                isDelete={isDelete}
                item={item}
                key={uuidv4()}
                handleEditEmployee={handleEditEmployee}
                handleDeleteEmployee={handleDeleteEmployee}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isToggleModal && (
        <Modal
          handleCancelModal={handleCancelModal}
          handleSubmit={handleSubmit}
          handleInputValuesChange={handleInputValuesChange}
          value={inputValues}
          isEditing={isEditing}
          isExists={isExists}
          inputValues={inputValues}
        />
      )}
      {isDelete && (
        <ConfirmationModal
          handleProceedDelete={handleProceedDelete}
          handleCancelDelete={handleCancelDelete}
          employeeToDelete={employee[deleteIndex].firstName}
        />
      )}
    </div>
  );
}
