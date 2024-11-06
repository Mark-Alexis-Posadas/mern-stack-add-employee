export const Pagination = ({
  handleNext,
  handlePrev,
  totalPages,
  itemsPerPage,
  students,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div>
      <div className="mt-10 flex items-center justify-between">
        <span>
          Show 1 to {itemsPerPage} of {students.length} entries
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className={`${
              currentPage === 1 && "bg-gray-300 cursor-not-allowed"
            } border border-slate-300 dark:border-gray-700 p-2 rounded h-10 mt-10`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`border border-slate-300 dark:border-gray-700 p-2 rounded w-10 h-10 mt-10 ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className={`${
              currentPage === totalPages && "bg-gray-300 cursor-not-allowed"
            } border border-slate-300 dark:border-gray-700 p-2 rounded h-10 mt-10`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
