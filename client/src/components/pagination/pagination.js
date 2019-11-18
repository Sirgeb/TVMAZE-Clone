import React from 'react';
import PaginationStyles from './pagination-styles';

const Pagination = ({ handlePrevClick, handleNextClick, showNextLink, showPrevLink, loading }) => {

  return (
    <PaginationStyles>
      {
        (showPrevLink && !loading) && <span onClick={handlePrevClick}>← Prev</span>
      }
      {
        (showNextLink && !loading) && <span onClick={handleNextClick}>Next →</span>
      }
    </PaginationStyles>
  )
}

export default Pagination;
