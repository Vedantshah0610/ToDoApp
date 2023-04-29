import { render, screen } from "@testing-library/react";
import Main from "../Main/Main";
import { ArrContext } from "../Main/Main";
import Mainpagebody from "../Mainpagebody/Mainpagebody";
test("for checking delete", () => {
    let toDoArr = { text: "Task1", index: "", id: "" };
    render(
        <ArrContext.Provider value={{ toDoArr }}>
            <Mainpagebody />
        </ArrContext.Provider>
    );
    const todoElement = screen.getByTestId("");
    screen.debug();
});
