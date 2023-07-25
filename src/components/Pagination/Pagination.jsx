import React, { useEffect, useState } from 'react';
import Mouse from '../Mouse';

const Pagination = ( { pagination, setPagination } ) => {
    const [ show, setShow ] = useState( false );
    const nextPage = () => {
        setShow( false );
        setPagination( prev => ( { ...prev, page: prev.page + 1 } ) );
    };

    useEffect(() => {
        setTimeout(() => {
            setShow( true );
        }, 500);
    }, [show]);
    
    return (
        <div className='pagination-container'>
            {show && <Mouse/>}
            <button
                className={ `pagination-change pagination-decrease ${pagination.page === 1 ? 'disabled' : ''}` }
                onClick={ _ =>  pagination.page > 1 && setPagination( prev => ( { ...prev, page: prev.page - 1 } ) ) }
            >
                &lt;
            </button>
            <span className='pagination-count'>{ pagination.page } / { pagination.pageCount  }</span>
            <button
                className={ `pagination-change pagination-increase ${pagination.pageCount === pagination.page ? 'disabled' : ''}` }
                onClick={ _ => pagination.pageCount > pagination.page && nextPage()  }
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
