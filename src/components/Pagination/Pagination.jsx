import React from 'react';

const Pagination = ({pagination, setPagination}) => {
    console.log(pagination);
    return (
        <div className='pagination-container'>
            <button
                className={ `pagination-change pagination-decrease ${pagination.page === 1 ? 'disabled' : ''}` }
                onClick={ _ =>  pagination.page > 1 && setPagination( prev => ( { ...prev, page: prev.page-- } ) ) }
            >
                &lt;
            </button>
            <span className='pagination-count'>{ pagination.page }</span>
            <button
                className={ `pagination-change pagination-increase ${pagination.pageCount === pagination.page ? 'disabled' : ''}` }
                onClick={ _ => pagination.pageCount > pagination.page && setPagination( prev => ( { ...prev, page: prev.page++ } ) ) }
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
