import React, { FC } from "react";
import { Header, Footer, Paginator } from "./components";

const Layout: FC = () => {

    return (
        <>
            <div className="contenedor">
                <Header />
                {/* <Paginator /> */}
                <Footer />
            </div>
        </>
    );
};

export { Layout };