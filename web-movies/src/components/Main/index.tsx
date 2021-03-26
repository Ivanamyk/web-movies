import React, { FC } from "react";
import { Carrousel, List } from './components'
import "./main.css";

const Main: FC = () => {
    return (
        <>
            <main className='main-pg'>
                <Carrousel />
                <List />
            </main>
        </>
    );
};

export { Main };