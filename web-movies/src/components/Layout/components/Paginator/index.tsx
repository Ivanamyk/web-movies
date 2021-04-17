import React, { FC, useState, useEffect } from 'react'
import { movie } from '../../../../api/movies'
import { GetMoviesResponse } from '../../../../api/movies'
import { Pagination } from 'react-bootstrap'


const Paginator: FC = () => {

    const [moviesData, setMoviesData] = useState<GetMoviesResponse>();
    const [totalPages, setTotalPages] = useState<number>()
    const [page, setPage] = useState(1);
    const [startPage, setStartPage] = useState<number>(1)
    const [endPage, setEndPage] = useState<number>(1)


    useEffect(() => {
        movie.getPopularData()
            .then((response) => {
                setMoviesData(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    useEffect(() => {
        setStartPage(() => {
            return page > 0 ? page : 1
        })

        setEndPage(() => {
            return page < (totalPages!) ? page + 5 : totalPages!
        })
    }, [page, totalPages])


    const [arrayItems, setArrayItems] = useState<number[]>([]);

    useEffect(() => {
        let myPagesArray: number[] = []
        if (totalPages) {
            for (let number = 1; number <= totalPages; number++) {
                myPagesArray.push(number);
            }
            setArrayItems(myPagesArray)
        }

    }, [totalPages]);

    useEffect(() => {
        if (arrayItems) {
            for (let page of arrayItems) {
                movie.getPopular(page).then((response) => {
                    console.log(response)
                })
            }
        }

    }, []);

    let pagesArray = []
    for (let pag of arrayItems) {
        pagesArray.push(<Pagination.Item>{pag}</Pagination.Item>)
    }

    return (
        <div className='paginator-container'>
            {console.log(Array(moviesData?.total_pages))}
            <Pagination>
                <Pagination.Prev onClick={() => setPage(page - 1)}>{'< Prev'}</Pagination.Prev>

                <Pagination.Ellipsis onClick={() => setPage(startPage - (page - 1))} />

                {Array.from(Array(totalPages).keys()).slice(startPage, endPage).map((index) => {
                    return <Pagination.Item onClick={() => setPage(page)}>{index}</Pagination.Item>
                })}
                <Pagination.Ellipsis onClick={() => setPage(page + 5)} />
                <Pagination.Item onClick={() => setPage(totalPages!)}>{totalPages}</Pagination.Item>
                <Pagination.Next onClick={() => setPage(page + 1)}>{'Next >'}</Pagination.Next>
            </Pagination>
        </div>
    )
}

export { Paginator };