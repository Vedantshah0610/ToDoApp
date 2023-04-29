import React, {
    Dispatch,
    memo,
    SetStateAction,
    useContext,
    useState,
} from "react";
import "./Modal.css";
import deleteIcon from "./img/deleteIcon.png";
import { ArrSetContext } from "../Main/Main";
import { v4 as uuid } from "uuid";
import { Task } from "../../Constants";
import { NameContext } from "../../App";
import {
    objArrInterface,
    ModalPropType,
    ArrSetContextInterface,
    NameContextInterface,
    TodoFunctionProps,
    DoingFunctionProps,
    DoneFunctionProps,
} from "../../type";
const loadToDO = (
    text: string,
    setToDoArr: Dispatch<SetStateAction<Array<objArrInterface>>>
) => {
    const unique_id: string = uuid();
    const id: string = unique_id.slice(0, 8);
    setToDoArr(
        (prevArray) =>
            [
                ...prevArray,
                {
                    text: text,
                    index: id,
                    key: id,
                },
            ] as objArrInterface[]
    );
};
const loadDoing = (
    text: string,
    setDoingArr: Dispatch<SetStateAction<Array<objArrInterface>>>
) => {
    const unique_id = uuid();
    const id = unique_id.slice(0, 8);
    setDoingArr(
        (prevArray) =>
            [
                ...prevArray,
                {
                    text: text,
                    index: id,
                    key: id,
                },
            ] as objArrInterface[]
    );
};
const loadDone = (
    text: string,
    setDoneArr: Dispatch<SetStateAction<Array<objArrInterface>>>
) => {
    const unique_id = uuid();
    const id = unique_id.slice(0, 8);
    setDoneArr(
        (prevArray) =>
            [
                ...prevArray,
                {
                    text: text,
                    index: id,
                    key: id,
                },
            ] as objArrInterface[]
    );
};

function UnMemoizedTodo({
    text,
    index,
    setToDoArr,
    setDoingArr,
    setDoneArr,
}: TodoFunctionProps): JSX.Element {
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    const handleDelete = (event: any): void => {
        const Parindex: string = event.target.parentElement.parentElement.id;
        let index: string = Parindex.slice(9, Parindex.length);
        setToDoArr((toDoArr) =>
            toDoArr.filter((item) => {
                return item.index !== index;
            })
        );
    };
    const handleDoing = (event: any): void => {
        const Parindex: string = event.target.parentElement.parentElement.id;
        let index: string = Parindex.slice(9, Parindex.length);
        setToDoArr((toDoArr) =>
            toDoArr.filter((item) => {
                return item.index !== index;
            })
        );
        loadDoing(
            event.target.parentElement.parentElement.firstChild.textContent,
            setDoingArr
        );
    };

    const handleDone = (event: any): void => {
        const Parindex: string = event.target.parentElement.parentElement.id;
        let index: string = Parindex.slice(9, Parindex.length);
        setToDoArr((toDoArr) =>
            toDoArr.filter((item) => {
                return item.index !== index;
            })
        );
        loadDone(
            event.target.parentElement.parentElement.firstChild.textContent,
            setDoneArr
        );
    };
    return (
        <div
            className="toDoChild taskChild"
            id={`toDoChild${index}`}
            data-testid={`toDoChild${index}`}
        >
            <div className="toDoChildMain displayFlex taskMainChild">
                <div className="mainContentToDo mainContentTask">{text}</div>
                <img
                    src={deleteIcon}
                    className="deleteToDoChild deleteIcon"
                    alt="deleteIcon"
                    onClick={handleDelete}
                />
            </div>
            <div className="buttonTodo">
                <button
                    className={`toDoChildDoing buttonMain ${
                        darkTheme && "darkBlackColorTheme"
                    }`}
                    onClick={handleDoing}
                >
                    {Task.DOING.toUpperCase()}
                </button>
                <button
                    className={`toDoChildDone buttonMain ${
                        darkTheme && "darkBlackColorTheme"
                    }`}
                    onClick={handleDone}
                >
                    {Task.DONE.toUpperCase()}
                </button>
            </div>
        </div>
    );
}
const Todo: React.MemoExoticComponent<
    ({
        text,
        index,
        setToDoArr,
        setDoingArr,
        setDoneArr,
    }: TodoFunctionProps) => JSX.Element
> = memo(UnMemoizedTodo);
function UnMemoizedDoing({
    text,
    index,
    setDoingArr,
    setDoneArr,
}: DoingFunctionProps): JSX.Element {
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    const handleDelete = (event: any): void => {
        const Parindex: string = event.target.parentElement.parentElement.id;
        let index: string = Parindex.slice(10, Parindex.length);
        setDoingArr((doingArr) =>
            doingArr.filter((item) => {
                return item.index !== index;
            })
        );
    };
    const handleDone = (event: any): void => {
        const Parindex: string = event.target.parentElement.parentElement.id;
        let index: string = Parindex.slice(10, Parindex.length);
        setDoingArr((doingArr) =>
            doingArr.filter((item) => {
                return item.index !== index;
            })
        );
        loadDone(
            event.target.parentElement.parentElement.firstChild.textContent,
            setDoneArr
        );
    };
    return (
        <div className="doingChild taskChild" id={`doingChild${index}`}>
            <div className="doingChildMain displayFlex taskMainChild">
                <div className="mainContentDoing mainContentTask">{text}</div>
                <img
                    src={deleteIcon}
                    className="deleteDoingChild deleteIcon"
                    alt="deleteIcon"
                    onClick={handleDelete}
                />
            </div>
            <div className="buttonDoing">
                <button
                    className={`doingChildDone buttonMain ${
                        darkTheme && "darkBlackColorTheme"
                    }`}
                    onClick={handleDone}
                >
                    {Task.DONE.toUpperCase()}
                </button>
            </div>
        </div>
    );
}
const Doing: React.MemoExoticComponent<
    ({
        text,
        index,
        setDoingArr,
        setDoneArr,
    }: DoingFunctionProps) => JSX.Element
> = memo(UnMemoizedDoing);

function UnMemoizedDone({
    text,
    index,
    setDoneArr,
}: DoneFunctionProps): JSX.Element {
    const handleDelete = (event: any): void => {
        const Parindex: string = event.target.parentElement.parentElement.id;
        let index: string = Parindex.slice(9, Parindex.length);
        setDoneArr((doneArr) =>
            doneArr.filter((item) => {
                return item.index !== index;
            })
        );
    };
    return (
        <div className="doneChild taskChild" id={`doneChild${index}`}>
            <div className="doneChildMain displayFlex taskMainChild">
                <div className="mainContentDone mainContentTask">{text}</div>
                <img
                    src={deleteIcon}
                    className="deleteDoneChild deleteIcon"
                    onClick={handleDelete}
                    alt="deleteIcon"
                />
            </div>
        </div>
    );
}
const Done: React.MemoExoticComponent<
    ({ text, index, setDoneArr }: DoneFunctionProps) => JSX.Element
> = memo(UnMemoizedDone);

function UnMemoizedModal({ setModalOn }: ModalPropType): JSX.Element {
    const { setToDoArr, setDoingArr, setDoneArr } = useContext(
        ArrSetContext
    ) as ArrSetContextInterface;
    const hideModalOverlay = (): void => {
        setModalOn(false);
    };
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedInput, setSelectedInput] = useState<string>(Task.TODO);
    const handleChangeInputValue = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputValue(event.target.value);
    };
    const handleRadioChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSelectedInput(event.target.value);
    };
    const getSetValues = (): void => {
        if (selectedInput === Task.TODO) {
            loadToDO(inputValue, setToDoArr);
        } else if (selectedInput === Task.DOING) {
            loadDoing(inputValue, setDoingArr);
        } else {
            loadDone(inputValue, setDoneArr);
        }
        hideModalOverlay();
    };
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    return (
        <div className="modalOverlay">
            <div
                className={`modal displayFlexColumn ${
                    darkTheme && "darkBlackGradientTheme"
                }`}
            >
                <div className="modal-header">Add Task</div>
                <div className="modal-content">
                    <form>
                        <label htmlFor="taskDetail"> Task: </label>
                        <input
                            type="text"
                            name="taskDetail"
                            id="taskDetail"
                            placeholder="Meeting at 4"
                            value={inputValue}
                            onChange={handleChangeInputValue}
                        />
                        <br />
                        <br />
                        <label> Add task to which category: </label>
                        <br />
                        <input
                            type="radio"
                            id={Task.TODO}
                            className="category"
                            name="category"
                            value={Task.TODO}
                            checked={selectedInput === Task.TODO}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor={Task.TODO}>
                            {Task.TODO.charAt(0).toUpperCase()}
                            {Task.TODO.slice(1, 2)}-{Task.TODO.slice(2, 4)}
                        </label>
                        <br />
                        <input
                            type="radio"
                            id={Task.DOING}
                            className="category"
                            name="category"
                            value={Task.DOING}
                            checked={selectedInput === Task.DOING}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor={Task.DOING}>
                            {Task.DOING.charAt(0).toUpperCase()}
                            {Task.DOING.slice(1)}
                        </label>
                        <br />
                        <input
                            type="radio"
                            id={Task.DONE}
                            className="category"
                            name="category"
                            value={Task.DONE}
                            checked={selectedInput === Task.DONE}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor={Task.DONE}>
                            {Task.DONE.charAt(0).toUpperCase()}
                            {Task.DONE.slice(1)}
                        </label>
                    </form>
                </div>

                <div className="modal-footer">
                    <button className="closeModal" onClick={hideModalOverlay}>
                        Close
                    </button>
                    <button className="submitModal" onClick={getSetValues}>
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
}
const Modal: React.MemoExoticComponent<
    ({ setModalOn }: ModalPropType) => JSX.Element
> = memo(UnMemoizedModal);
export default Modal;
export { Todo, Doing, Done };
