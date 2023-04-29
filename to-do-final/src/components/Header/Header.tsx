import React, { useState, useMemo, useContext, memo } from "react";
import toDoImg_Icon from "./img/todoImg_Icon.png";
import "animate.css";
import "./Header.css";
import { NameContext } from "../../App";
import ReactSwitch from "react-switch";
import { ProfileContextInterface, NameContextInterface } from "../../type";
const ProfileContext = React.createContext<ProfileContextInterface | null>(
    null
);
function UnMemoizedLogo(): JSX.Element {
    return (
        <div className="logo displayFlex">
            <div className="logoImg">
                <img
                    className="headerIcon animate__animated animate__rotateIn animate__infinite infinite"
                    src={toDoImg_Icon}
                    alt="Icon"
                />
            </div>
            <div className="logoName">ToDo</div>
        </div>
    );
}
const Logo: React.MemoExoticComponent<() => JSX.Element> = memo(UnMemoizedLogo);
function UnMemoizedBackgroundTemplates(): JSX.Element {
    const { darkTheme, setDarkTheme } = useContext(
        NameContext
    ) as NameContextInterface;
    console.log(darkTheme);
    return (
        <div className="backgroundTemplates displayFlex">
            <p>Change Theme</p>
            <ReactSwitch
                checked={darkTheme}
                onChange={() => {
                    setDarkTheme(!darkTheme);
                }}
                onColor="#d3d3d3"
                onHandleColor="#d3d3d3"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
            />
        </div>
    );
}
const BackgroundTemplates: React.MemoExoticComponent<() => JSX.Element> = memo(
    UnMemoizedBackgroundTemplates
);
function UnMemoizedQuote(): JSX.Element {
    return <div className="quote">"Make each day your masterpiece"</div>;
}
const Quote: React.MemoExoticComponent<() => JSX.Element> =
    memo(UnMemoizedQuote);
function UnMemoizedProfileform(): JSX.Element {
    const { fname, lname, setFname, setLname, flag, setFlag } = useContext(
        ProfileContext
    ) as ProfileContextInterface;
    const setValues = () => {
        setFlag(!flag);
    };
    const closeForm = () => {
        setFlag(false);
    };
    return (
        <form className="aboutMe displayFlexColumn animate__animated animate__bounceInDown">
            <h3> Submit Information </h3>
            <label htmlFor="fname"> FirstName: </label>
            <input
                type="text"
                name="fname"
                placeholder="Vedant"
                id="fname"
                value={fname}
                onChange={(e) => {
                    console.log("call in here", e.target.value);
                    setFname(e.target.value);
                }}
            />
            <label htmlFor="lname"> LastName: </label>
            <input
                type="text"
                name="lname"
                placeholder="Shah"
                id="lname"
                value={lname}
                onChange={(e) => {
                    console.log("cole in here", e.target.value);
                    setLname(e.target.value);
                }}
            />
            <div className="buttonProfile displayFlex">
                <button id="closeProfile" onClick={closeForm}>
                    Close
                </button>
                <button type="submit" id="submitProfile" onClick={setValues}>
                    Submit
                </button>
            </div>
        </form>
    );
}
const Profileform: React.MemoExoticComponent<() => JSX.Element> = memo(
    UnMemoizedProfileform
);
function UnMemoizedProfile(): JSX.Element {
    const { darkTheme } = useContext(NameContext) as NameContextInterface;
    const { fname, lname, flag, setFlag } = useContext(
        ProfileContext
    ) as ProfileContextInterface;
    const applyTransition = () => {
        setFlag(!flag);
    };
    return (
        <>
            <div
                className={`profile displayFlex ${
                    darkTheme && "darkBlackColorTheme"
                }`}
                onClick={applyTransition}
                data-testid="profile-id"
            >
                <div id="FirstLast" data-testid="firstlast-id">
                    {Array.from(fname)[0]}
                    {Array.from(lname)[0]}
                </div>
            </div>
            {flag && <Profileform />}
        </>
    );
}
const Profile: React.MemoExoticComponent<() => JSX.Element> =
    memo(UnMemoizedProfile);

function UnMemoizedHeader(): JSX.Element {
    const { fname, setFname, lname, setLname, darkTheme } = useContext(
        NameContext
    ) as NameContextInterface;
    const [flag, setFlag] = useState<boolean>(false);
    const contextValue: ProfileContextInterface = useMemo(
        () => ({ fname, lname, setFname, setLname, flag, setFlag }),
        [fname, lname, setFname, setLname, flag, setFlag]
    );
    return (
        <header
            className={`header displayFlex ${
                darkTheme && "darkBlackImageTheme"
            }`}
            data-testid="header-testid"
        >
            <Logo />
            <BackgroundTemplates />
            <Quote />
            <ProfileContext.Provider value={contextValue}>
                <Profile />
            </ProfileContext.Provider>
        </header>
    );
}
const Header: React.MemoExoticComponent<() => JSX.Element> =
    memo(UnMemoizedHeader);
export default Header;
