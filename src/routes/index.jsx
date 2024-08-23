import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import SearchResults from "../pages/SearchResults";
import ContactPage from "../pages/ContactPage";
import AboutUs from "../pages/AboutUs";
import HowItWorksPage from "../pages/HowItWorksPage";

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
                path: "about",
                element: <AboutUs />,
            },
            {
                path: "privacy",
                element: <Privacy />,
            },
            {
                path: "contact",
                element: <ContactPage/>,
            },
            {
                path: "how-it-works",
                element: <HowItWorksPage/>,
            },
            {
                path: "*",
                element: <p>NOT Found</p>,
            },
        ],
    },
]);
