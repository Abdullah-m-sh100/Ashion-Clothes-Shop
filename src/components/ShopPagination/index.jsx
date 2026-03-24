import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./style.css";

export default function ShopPagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  return (
    <div className="pagination-container">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="pagination-arrow"
      >
        <FaAngleLeft />
        Previous
      </button>

      <div className="pagination-numbers">
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`page-number ${currentPage === pageNum ? "active" : ""}`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="pagination-arrow"
      >
        Next <FaAngleRight />
      </button>
    </div>
  );
}
