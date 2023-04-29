import React, { useContext, memo } from "react";
import "./Mainpagebody.css";
import { Todo, Doing, Done } from "../Modal/Modal";
import { ArrContext } from "../Main/Main";
import { Task } from "../../Constants";
import { NameContext } from "../../App";
import { NameContextInterface, ArrContextInterface } from "../../type";
function UnMemoizedMainpagebody(): JSX.Element {
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    const { toDoArr, doingArr, doneArr, setToDoArr, setDoingArr, setDoneArr } =
        useContext(ArrContext) as ArrContextInterface;
    const listItemsToDo: Array<JSX.Element> = toDoArr?.map((item) => {
        return (
            <Todo
                text={item.text}
                index={item.index}
                key={item.index}
                setToDoArr={setToDoArr}
                setDoingArr={setDoingArr}
                setDoneArr={setDoneArr}
            />
        );
    });
    const listItemsDoing: Array<JSX.Element> = doingArr?.map((item) => {
        return (
            <Doing
                text={item.text}
                index={item.index}
                key={item.index}
                setDoingArr={setDoingArr}
                setDoneArr={setDoneArr}
            />
        );
    });
    const listItemsDone: Array<JSX.Element> = doneArr?.map((item) => {
        return (
            <Done
                text={item.text}
                index={item.index}
                key={item.index}
                setDoneArr={setDoneArr}
            />
        );
    });
    return (
        <div className="mainTask displayFlex">
            <div
                className={`toDo backgroundGrey greyBox displayFlexColumnAlign ${
                    darkTheme && "darkLightGreyTheme"
                }`}
            >
                <p>
                    {Task.TODO.slice(0, 2).toUpperCase() + " "}
                    {Task.TODO.slice(2).toUpperCase()}
                </p>
                <div className="task toDoTask displayFlexColumnAlign">
                    {listItemsToDo}
                </div>
            </div>
            <div
                className={`doing backgroundGrey greyBox displayFlexColumnAlign ${
                    darkTheme && "darkLightGreyTheme"
                }`}
            >
                <p>{Task.DOING.toUpperCase()}</p>
                <div className="task doingTask displayFlexColumnAlign">
                    {listItemsDoing}
                </div>
            </div>
            <div
                className={`taskDone backgroundGrey greyBox displayFlexColumnAlign ${
                    darkTheme && "darkLightGreyTheme"
                }`}
            >
                <p>{Task.DONE.toUpperCase()}</p>
                <div className="task doneTask displayFlexColumnAlign">
                    {listItemsDone}
                </div>
            </div>
        </div>
    );
}
const Mainpagebody: React.MemoExoticComponent<() => JSX.Element> = memo(
    UnMemoizedMainpagebody
);
export default Mainpagebody;
