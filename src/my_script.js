import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ErrorComponent from "./Components/ErrorComponent";
import RestaurantInfo from "./Components/RestautantInfo";

const AppComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "",
                element: <BodyComponent />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "/restaurant-info/:restID",
                element: <RestaurantInfo />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);