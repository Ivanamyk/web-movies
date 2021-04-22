import React, { FC } from "react";
import { Header, Footer, Main } from "./components";

const Layout: FC = ({ children }) => {

    return (
        <>
            <div className="contenedor">
                <Header />
                <Main>
                    {children}
                </Main>
                <Footer />
            </div>
        </>
    );
};

export { Layout };