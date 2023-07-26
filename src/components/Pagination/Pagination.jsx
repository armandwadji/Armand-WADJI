import React from "react";

const Pagination = ( { pagination, setPagination, setMouse } ) => {
    
  const nextPage = () => {
    setMouse(false);
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  return (
    <div className='pagination-container'>
      <button
        className={`pagination-change pagination-decrease hover ${ pagination.page === 1 ? "disabled" : "" }`}
        onClick={_ => pagination.page > 1 && setPagination((prev) => ({ ...prev, page: prev.page - 1 }))}>
        &lt;
      </button>
      <span className='pagination-count'>
        {pagination.page} / {pagination.pageCount}
      </span>
      <button 
        className={`pagination-change pagination-increase hover ${ pagination.pageCount === pagination.page ? "disabled" : ""}`}
        onClick={(_) => pagination.pageCount > pagination.page && nextPage()}> 
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
