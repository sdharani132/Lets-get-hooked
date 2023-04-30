import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ErrorComponent from "./Components/ErrorComponent";
import RestaurantInfo from "./Components/RestautantInfo";
import ShimmerUIComponent from "./Components/ShimmerUIComponent";

const AppComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}

/**
 * Lazy loading
 * lazy is a function provided by react and we use that for dynamically loading components.
 * It expects a call back and we need to return import function which takes in the path of the component.
 * 
 * Generally bundler bundles all the components and create 1 js file.
 * But for a large application which contains too many components, it doesnt make sense to load all the components at once.
 * Because we dont even if they use it or not.
 * So better load them when we require them.
 * 
 * Our component needs to be wrapped around Suspense because react tries to route to the component before import happens and which leads to error. So when wrapped around Suspense, it waits until the import is done and then routes. Suspense also takes a fallback component which can be shown until import happens.
 */
const Instamart = lazy(() => {
    return import("./Components/Instamart");
});
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
                path: "instamart",
                element: <Suspense fallback={<ShimmerUIComponent />}>
                            <Instamart />
                        </Suspense>,
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