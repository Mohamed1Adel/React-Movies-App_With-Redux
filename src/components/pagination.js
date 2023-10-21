import axios from "axios";
import React ,{useState,useEffect}from "react";

import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getpages } from "../redux/actions/movieAction";

function PaginationComponent() {

  const [pageCount, setPageCount] = useState(0);


      const dispatch = useDispatch();
      const pages = useSelector((state) => state.pageCount);
      useEffect(() => {
        // getAllMovies();
        setPageCount(pages);
      }, []);



  const getPageMovies = async (page) => {

    dispatch(getpages(page))
  };




  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    getPageMovies(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default PaginationComponent;
