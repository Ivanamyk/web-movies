import React, { FC } from "react";
import "./main.css"

const Main: FC = ({ children }) => {
    return (
        <div className="main-pg">
            {children}
        </div>
    );
}

export { Main };