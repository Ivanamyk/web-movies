import React, { ChangeEvent, useState } from "react"
import { api } from '../../api/api';
import { MovieType } from '../../types';
import { Form } from 'react-bootstrap'
import { Header, Footer } from '../../components/Layout/components'
import * as Icon from 'react-bootstrap-icons'
import './search.css'

const Search: React.FC = () => {
    const [query, setQuery] = useState("")

    const getSearch = async (query: string): Promise<MovieType[]> => {
        const { data } = await api.get('search/movie?query=' + query)
        console.log(data.results)
        return data.results;
    };

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
        getSearch(query);
        console.log(e.target.value)
    }
    return (
        <>
            <Header />
            <div className="main-pg">
                <Form className='container col-6 search-group'>
                    <Form.Group controlId="formBasicEmail">
                        <h4 className='title-search'>Buscar Peliculas</h4>
                        <Form.Control className='search-bar' type="text" />
                    </Form.Group>
                </Form>
                {/* <form>
                    <input type="text" name="buscador" className="" id="buscador" value={query} onChange={onChange} placeholder="Buscar"></input>
                </form> */}
            </div>
            <Footer />
        </>
    )
}
export { Search }