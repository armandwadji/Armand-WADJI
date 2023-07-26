import React from "react";

const Pagination = ( { pagination, setPortfolio } ) => {
    
  const { page, pageCount } = pagination;
  
  return (
    <div className='pagination-container'>
      <button
        className={`pagination-change pagination-decrease hover ${ page === 1 ? "disabled" : "" }`}
        onClick={ _ => page > 1 && setPortfolio( prev => ({ ...prev, pagination: ( { ...prev.pagination, page : prev.pagination.page - 1 } )}))}>
        &lt;
      </button>
      <span className='pagination-count'> {page} / {pageCount} </span>
      <button 
        className={`pagination-change pagination-increase hover ${ pagination.pageCount === pagination.page ? "disabled" : ""}`}
        onClick={ _ => pageCount > page && setPortfolio( prev => ( { ...prev, pagination: ( { ...prev.pagination, page : prev.pagination.page + 1 } ) } ) ) }> 
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
