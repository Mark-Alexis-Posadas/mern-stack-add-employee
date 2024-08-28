import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faPlusCircle, faSun } from "@fortawesome/free-solid-svg-icons";

import TableHeader from "../components/Table";
import Modal from "../components/Modal";
import ConfirmationModal from "../components/Modal/ConfirmModal";

const initialInputValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
};

export default function AddEmployee() {
  const [isToggleModal, setIsToggleModal] = useState(false);
  const [isToggleTheme, setIstoggleTheme] = useState(false);
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleToggleTheme = () => {
    setIstoggleTheme(!isToggleTheme);
    document.body.classList.toggle("dark");
  };
  const handleCancelModal = () => {
    setIsToggleModal(false);
  };

  const handleInputValuesChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5 md:p-10 bg-slate-50 dark:bg-black min-h-screen overflow-hidden">
      <div className="flex items-center justify-between">
        <button
          className="dark:text-gray-400 p-2 rounded bg-blue-600 text-white dark:bg-gray-800 mb-5 flex items-center gap-3"
          onClick={() => setIsToggleModal(true)}
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
              <TableHeader />
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {isToggleModal && (
        <Modal
          handleCancelModal={handleCancelModal}
          handleSubmit={handleSubmit}
          handleInputValuesChange={handleInputValuesChange}
          value={inputValues}
        />
      )}

      {/* <ConfirmationModal /> */}
    </div>
  );
}
