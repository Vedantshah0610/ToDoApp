import React, { memo, useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./Mainpageheader.css";
import { ArrSetContext } from "../Main/Main";
import { date, map, monthNames, dateHour } from "../../Constants";
import { NameContext } from "../../App";
import { NameContextInterface, ArrSetContextInterface } from "../../type";
function UnMemoizedMainpageheader(): JSX.Element {
    // *modal
    const [modalOn, setModalOn] = useState<boolean>(false);
    const showModalOverlay = () => {
        setModalOn(true);
    };
    // *date
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    const [currDate, setCurrDate] = useState<string>("6th october");
    useEffect(() => {
        if (date.getDate() % 10 === 1) {
            setCurrDate(
                map.get(date.getDay()) +
                    "  " +
                    date.getDate() +
                    "st " +
                    monthNames[date.getMonth()] +
                    "," +
                    date.getFullYear()
            );
        } else if (date.getDate() % 10 === 2) {
            setCurrDate(
                map.get(date.getDay()) +
                    "  " +
                    date.getDate() +
                    "nd " +
                    monthNames[date.getMonth()] +
                    "," +
                    date.getFullYear()
            );
        } else if (date.getDate() % 10 === 3) {
            setCurrDate(
                map.get(date.getDay()) +
                    "  " +
                    date.getDate() +
                    "rd " +
                    monthNames[date.getMonth()] +
                    "," +
                    date.getFullYear()
            );
        } else {
            setCurrDate(
                map.get(date.getDay()) +
                    "  " +
                    date.getDate() +
                    "th " +
                    monthNames[date.getMonth()] +
                    "," +
                    date.getFullYear()
            );
        }
    }, [currDate]);
    let { fname, lname } = useContext(ArrSetContext) as ArrSetContextInterface;
    return (
        <div
            className={`introduction displayFlex ${
                darkTheme && "darkLightGreyTheme"
            }`}
        >
            <div className="greeting" id="greeting">
                {dateHour < 12
                    ? "Good Morning"
                    : dateHour < 16
                    ? "Good Afternoon"
                    : dateHour < 22
                    ? "Good Evening"
                    : "Good Night"}
                , {fname} {lname}
            </div>
            <button
                className={`addTask ${darkTheme && "darkBlackTheme"}`}
                onClick={showModalOverlay}
            >
                Add Task
            </button>
            {modalOn && <Modal setModalOn={setModalOn} />}
            <div className="date">{currDate}</div>
        </div>
    );
}
const Mainpageheader: React.MemoExoticComponent<() => JSX.Element> = memo(
    UnMemoizedMainpageheader
);
export default Mainpageheader;
