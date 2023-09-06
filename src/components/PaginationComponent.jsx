import React from 'react';

function PaginationComponent({ currentPage, totalPages, nextPage, prevPage }) {
    return (
        <div>
            {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
            <span>Page {currentPage} of {totalPages}</span>
            {currentPage < totalPages && <button onClick={nextPage}>Next</button>}
        </div>
    );
}

export default PaginationComponent;
