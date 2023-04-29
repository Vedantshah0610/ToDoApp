import React, { useContext } from "react";
import "./Title.css";
import { NameContext } from "../../App";
import "animate.css";
import { NameContextInterface } from "../../type";
function Title(): JSX.Element {
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    return (
        <div className={`title displayFlex ${darkTheme && "darkGreyTheme"}`}>
            <p className="animate__animated animate__flash">TO-DO LIST</p>
        </div>
    );
}

export default Title;
