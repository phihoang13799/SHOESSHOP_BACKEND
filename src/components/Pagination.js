import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  
  }

  return (
    <div  className="col-md-5 offset-10">
      <ul  className='pagination col-12'>
        {pageNumbers.map(number => (
          <li  key={number} className='page-item'>
            <a style={{color: 'black !important', cursor: 'pointer'}}  onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
