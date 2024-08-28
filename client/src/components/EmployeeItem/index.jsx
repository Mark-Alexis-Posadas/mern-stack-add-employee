import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EmployeeItem({
  item,
  handleEditEmployee,
  handleDeleteEmployee,
}) {
  return (
    <tr
      className="border-b dark:border-gray-700
     odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800"
    >
      <td className="px-6 py-4 font-bold">{item.firstName}</td>
      <td className="px-6 py-4">{item.middleName}</td>
      <td className="px-6 py-4">{item.lastName}</td>
      <td className="px-6 py-4">{item.email}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 font-medium text-blue-600 dark:text-blue-500"
            onClick={handleEditEmployee}
          >
            Edit
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button
            className="flex items-center gap-2 font-medium text-red-600 dark:text-red-500"
            onClick={() => handleDeleteEmployee(item._id)}
          >
            Delete
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </td>
    </tr>
  );
}
