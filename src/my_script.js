import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";

const AppComponent = () => {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppComponent />);