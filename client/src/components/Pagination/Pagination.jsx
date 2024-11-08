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
              currentPage === 1 ? "cursor-not-allowed" : " "
            } bg-gray-300 dark:border-gray-700 px-4 py-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === 1}
          >
            Prev Last
          </button>

          <button
            onClick={handlePrev}
            className={`${
              currentPage === 1 ? "cursor-not-allowed" : " "
            } bg-gray-300 dark:border-gray-700 px-4 py-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-white dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
              } 
   dark:border-gray-700 
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
              currentPage === totalPages ? "cursor-not-allowed" : ""
            } bg-gray-300 dark:border-gray-700 px-4 py-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          <button
            onClick={handleNextLast}
            className={`${
              currentPage === totalPages ? "cursor-not-allowed" : ""
            } bg-gray-300 dark:border-gray-700 px-4 py-2 rounded h-10 mt-10 transition-colors duration-300 ease-in-out`}
            disabled={currentPage === totalPages}
          >
            Next Last
          </button>
        </div>
      </div>
    </div>
  );
};
