import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function View({ viewEmployee, setIsView, setEditId }) {
  return (
    <div className="flex items-center justify-center fixed w-full top-0 left-0 min-h-screen bg-[rgba(0,0,0,0.4)]">
      <ul className="w-full max-w-[600px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform">
        <button
          className="bg-red-600 text-white rounded-full p-2 ml-auto mb-4 w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-105"
          onClick={() => {
            setIsView(false), setEditId(null);
          }}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">First Name:</b>
          <span className="text-sm text-gray-700">
            {viewEmployee.firstName}
          </span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Middle Name:</b>
          <span className="text-sm text-gray-700">
            {viewEmployee.middleName}
          </span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Last Name:</b>
          <span className="text-sm text-gray-700">{viewEmployee.lastName}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Email:</b>
          <span className="text-sm text-gray-700">{viewEmployee.email}</span>
        </li>
      </ul>
    </div>
  );
}
