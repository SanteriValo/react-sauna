import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, onChangePage, pageCount }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={pageCount}
      forcePage={Math.max(currentPage - 1, 0)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
