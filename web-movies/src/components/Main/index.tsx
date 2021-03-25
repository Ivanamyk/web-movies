import React, { FC } from "react";
import { Card } from './components/Card'
import "./main.css";

const Main: FC = () => {
    return (
        <>
            <main className='main-pg'>
                <Card />
            </main>
        </>
    );
};

export { Main };