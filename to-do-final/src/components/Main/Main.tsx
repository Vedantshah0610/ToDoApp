import React, { useState, useEffect, useMemo, memo, useContext } from "react";
import Mainpagebody from "../Mainpagebody/Mainpagebody";
import Mainpageheader from "../Mainpageheader/Mainpageheader";
import Title from "../Title/Title";
import "./Main.css";
import { NameContext } from "../../App";
import {
    objArrInterface,
    ArrContextInterface,
    ArrSetContextInterface,
    NameContextInterface,
} from "../../type";
export const ArrSetContext = React.createContext<ArrSetContextInterface | null>(
    null
);
export const ArrContext = React.createContext<ArrContextInterface | null>(null);
function UnMemoizedMain(): JSX.Element {
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    const { fname, lname } = useContext(NameContext) as NameContextInterface;
    const [toDoArr, setToDoArr] = useState<Array<objArrInterface>>([
        { text: "", index: "", id: "" },
    ]);
    const [doingArr, setDoingArr] = useState<Array<objArrInterface>>([
        { text: "", index: "", id: "" },
    ]);
    const [doneArr, setDoneArr] = useState<Array<objArrInterface>>([
        { text: "", index: "", id: "" },
    ]);
    useEffect(() => {
        const toDoArrInitial: Array<objArrInterface> = JSON.parse(
            localStorage.getItem("toDoArr") as string
        ) as Array<objArrInterface>;
        setToDoArr(toDoArrInitial);
        const doingArrInitial: Array<objArrInterface> = JSON.parse(
            localStorage.getItem("doingArr") as string
        ) as Array<objArrInterface>;
        setDoingArr(doingArrInitial);
        const doneArrInitial: Array<objArrInterface> = JSON.parse(
            localStorage.getItem("doneArr") as string
        ) as Array<objArrInterface>;
        setDoneArr(doneArrInitial);
    }, []);
    useEffect(() => {
        localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
    }, [toDoArr]);
    useEffect(() => {
        localStorage.setItem("doingArr", JSON.stringify(doingArr));
    }, [doingArr]);
    useEffect(() => {
        localStorage.setItem("doneArr", JSON.stringify(doneArr));
    }, [doneArr]);
    const contextSetValue: ArrSetContextInterface = useMemo(
        () => ({
            setToDoArr,
            setDoingArr,
            setDoneArr,
            fname,
            lname,
        }),
        [setToDoArr, setDoingArr, setDoneArr, fname, lname]
    );
    const contextValue: ArrContextInterface = useMemo(
        () => ({
            toDoArr,
            doingArr,
            doneArr,
            setToDoArr,
            setDoingArr,
            setDoneArr,
        }),
        [toDoArr, doingArr, doneArr, setToDoArr, setDoingArr, setDoneArr]
    );
    return (
        <div className="Main">
            <Title />
            <div
                className={`mainPage ${darkTheme && "darkBlackGradientTheme"}`}
            >
                <ArrSetContext.Provider value={contextSetValue}>
                    <Mainpageheader />
                </ArrSetContext.Provider>
                <ArrContext.Provider value={contextValue}>
                    <Mainpagebody />
                </ArrContext.Provider>
            </div>
        </div>
    );
}
const Main: React.MemoExoticComponent<() => JSX.Element> = memo(UnMemoizedMain);
export default Main;
