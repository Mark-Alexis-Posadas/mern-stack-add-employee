export const Pagination = ({
  handleNext,
  handlePrev,
  handleNextLast,
  handlePrevLast,
  totalPages,
  itemsPerPage,
  employee,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div>
      <div className="mt-10 flex items-center justify-between">
        <span>
          Show 1 to {itemsPerPage} of {employee.length} entries
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevLast}
            className={`${
              currentPage === 1
                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed dark:text-gray-400"
                : "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
            } border border-slate-300 dark:border-gray-700 p-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === 1}
          >
            Prev Last
          </button>

          <button
            onClick={handlePrev}
            className={`${
              currentPage === 1
                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed dark:text-gray-400"
                : "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
            } border border-slate-300 dark:border-gray-700 p-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${
                currentPage === index + 1
                  ? "bg-blue-500 text-white dark:bg-blue-600 dark:text-white"
                  : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
              } 
    border border-slate-300 dark:border-gray-700 
    p-2 rounded w-10 h-10 mt-10 transition-colors duration-300 ease-in-out
    ${
      currentPage === index + 1
        ? "shadow-md transform scale-105"
        : "transform scale-100"
    }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            className={`${
              currentPage === totalPages
                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed dark:text-gray-400"
                : "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
            } border border-slate-300 dark:border-gray-700 p-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          <button
            onClick={handleNextLast}
            className={`${
              currentPage === totalPages
                ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed dark:text-gray-400"
                : "bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
            } border border-slate-300 dark:border-gray-700 p-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === totalPages}
          >
            Next Last
          </button>
        </div>
      </div>
    </div>
  );
};
