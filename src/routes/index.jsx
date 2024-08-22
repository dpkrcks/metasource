import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import SearchResults from "../pages/SearchResults";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "search",
                element: <SearchResults />,
            },
            {
                path: "privacy",
                element: <Privacy />,
            },
            {
                path: "*",
                element: <p>NOT Found</p>,
            },
        ],
    },
]);
