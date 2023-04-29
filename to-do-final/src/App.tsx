import "./App.css";
import React, { useMemo } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import { NameContextInterface } from "./type";
export const NameContext = React.createContext<NameContextInterface | null>({
    fname: "Vedant",
    lname: "Shah",
    setFname: (arg) => {},
    setLname: (arg) => {},
    darkTheme: true,
    setDarkTheme: (arg) => {},
});

function App(): JSX.Element {
    const [fname, setFname] = useState<string>("Vedant");
    const [lname, setLname] = useState<string>("Shah");
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    useEffect(() => {
        const fnameInitial: string = JSON.parse(
            localStorage.getItem("Fname") as string
        );
        setFname(fnameInitial);
        const lnameInitial: string = JSON.parse(
            localStorage.getItem("Lname") as string
        );
        setLname(lnameInitial);
        const darkThemeInitial: boolean = JSON.parse(
            localStorage.getItem("darkTheme") as string
        );
        setDarkTheme(darkThemeInitial);
    }, []);
    useEffect(() => {
        localStorage.setItem("Fname", JSON.stringify(fname));
    }, [fname]);
    useEffect(() => {
        localStorage.setItem("Lname", JSON.stringify(lname));
    }, [lname]);
    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    }, [darkTheme]);

    const contextValue: NameContextInterface = useMemo(
        () => ({ fname, lname, setFname, setLname, darkTheme, setDarkTheme }),
        [fname, lname, setFname, setLname, darkTheme, setDarkTheme]
    );
    return (
        <div className="App">
            <NameContext.Provider value={contextValue}>
                <Header />
                <Main />
            </NameContext.Provider>
        </div>
    );
}

export default App;
