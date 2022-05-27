
import PropTypes from 'prop-types';

const usePagination = (data, itemsPerPage) => {

  return {
    currentPage, getCurrentData, setCurrentPage, pageCount,
  };
};

usePagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default usePagination;
