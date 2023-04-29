import { Dispatch, SetStateAction } from "react";

export interface NameContextInterface {
    fname: string;
    lname: string;
    setFname: Dispatch<SetStateAction<string>>;
    setLname: Dispatch<SetStateAction<string>>;
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export interface ProfileContextInterface {
    fname: string;
    lname: string;
    setFname: Dispatch<SetStateAction<string>>;
    setLname: Dispatch<SetStateAction<string>>;
    flag: boolean;
    setFlag: Dispatch<SetStateAction<boolean>>;
}

export interface objArrInterface {
    text: string;
    index: string;
    id: string;
}
export interface ArrSetContextInterface {
    setToDoArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoingArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoneArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    fname: string;
    lname: string;
}
export interface ArrContextInterface {
    toDoArr: Array<objArrInterface>;
    doingArr: Array<objArrInterface>;
    doneArr: Array<objArrInterface>;
    setToDoArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoingArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoneArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
}
export type ModalPropType = {
    setModalOn: Dispatch<SetStateAction<boolean>>;
};

export interface TodoFunctionProps {
    text: string;
    index: string;
    setToDoArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoingArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoneArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
}

export interface DoingFunctionProps {
    text: string;
    index: string;
    setDoingArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
    setDoneArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
}

export interface DoneFunctionProps {
    text: string;
    index: string;
    setDoneArr: Dispatch<SetStateAction<Array<objArrInterface>>>;
}
