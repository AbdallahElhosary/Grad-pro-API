import ReactPaginate from 'react-paginate';
import "./Pagenation.css"


function Paginate({ pageCount, onPress }) {


    // Functions to Change the Page Form Pagination
    const handlePageClick = (data) => {
        onPress(data.selected + 1)
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            containerClassName={"pagination text-white justify-content-center align-items-center mt-2"}
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            nextClassName='page-item'
            previousLinkClassName={" mx-2 page-link"}
            nextLinkClassName={" mx-2 page-link"}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            activeClassName='active'
        />
    );
}
export default Paginate;