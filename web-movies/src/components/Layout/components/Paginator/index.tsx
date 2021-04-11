import React, { FC, useState, useEffect } from 'react'
import { movie } from '../../../../api/movies'
import { Pagination } from 'react-bootstrap'
import { MovieType } from '../../../../types'

const Paginator: FC = () => {
    const [moviesData, setMoviesData] = useState<MovieType[]>();
    const [totalPages, setTotalPages] = useState<number>()

    useEffect(() => {
        movie.getTopRated(3)
            .then((response) => {
                setMoviesData(response.results)
                setTotalPages(response.total_pages)
                console.log(response.results)
            })
    }, []);
    const sum = 2 + 2
    console.log(sum)
    console.log(moviesData)

    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        let myPagesArray: number[] = []
        if (totalPages) {
            for (let number = 1; number <= totalPages; number++) {
                myPagesArray.push(number);
            }
            setItems(myPagesArray)
        }

    }, [totalPages]);

    console.log(items)

    useEffect(() => {
        if (items) {
            for (let page of items) {
                movie.getTopRated(page).then((response) => {
                    console.log(response)
                })
            }
        }

    }, [items]);

    let pagesArray = []
    for (let ob of items) {
        pagesArray.push(<Pagination.Item>{ob}</Pagination.Item>)
    }

    return (
        <div className='container'>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination>{pagesArray}</Pagination>
                <Pagination.Ellipsis />
                <Pagination.Item>{moviesData}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </div>
    )
}

export { Paginator };