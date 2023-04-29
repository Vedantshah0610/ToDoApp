import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header/Header";
import { act } from "react-dom/test-utils";
// import { act } from "@testing-library/react";
import React from "react";
import { NameContext } from "../../App";
let fname = "Cristiano";
let lname = "Ronaldo";
let darkTheme = false;
test("for checking name form functioning", async () => {
    render(
        <NameContext.Provider
            value={{ fname: fname, lname: lname, darkTheme: darkTheme }}
        >
            <Header />
        </NameContext.Provider>
    );
    let profileChange = screen.getByTestId("profile-id");
    await userEvent.click(profileChange);
    let getInitials = (first, last) => {
        return first[0] + last[0];
    };
    let firstName = screen.getByRole("textbox", {
        name: /firstname/i,
    });
    let lastName = screen.getByRole("textbox", {
        name: /lastname/i,
    });
    fireEvent.change(firstName, { target: { value: fname } });
    fireEvent.change(lastName, { target: { value: lname } });
    let Initials = screen.getByTestId("firstlast-id");
    expect(Initials.innerHTML).toBe(getInitials(fname, lname));
});
test("default theme on toggle", async () => {
    render(
        <NameContext.Provider
            value={{ fname: fname, lname: fname, darkTheme: darkTheme }}
        >
            <Header />
        </NameContext.Provider>
    );
    //const changeThemeToggle = screen.getByRole("switch");
    const header = screen.getByTestId("header-testid");
    expect(header).not.toHaveClass("darkBlackImageTheme");
    //fireEvent.change(changeThemeToggle, { target: { checked: true } });
});
test("black theme on toggle", async () => {
    render(
        <NameContext.Provider
            value={{ fname: fname, lname: fname, darkTheme: !darkTheme }}
        >
            <Header />
        </NameContext.Provider>
    );
    //const changeThemeToggle = screen.getByRole("switch");
    const header = screen.getByTestId("header-testid");
    expect(header).toHaveClass("darkBlackImageTheme");
});
