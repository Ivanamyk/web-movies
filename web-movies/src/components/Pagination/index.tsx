import React, { FC, useEffect, useState } from 'react'
import { movie } from './../../api/movies'
import ReactPaginate from 'react-paginate'

const Pagination: FC = () => {
    const [pageNumber, setPageNumber] = useState(0);

    const moviesPerPage = 10;
    const pagesVisited = pageNumber * moviesPerPage;

    const displayMovies = () => {

    }

    return (
        <div>

        </div>
    )
}
export { Pagination }