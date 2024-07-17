import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import Home from "./src/pages/Home";
import BlogPage from "./src/pages/BlogPage";
import Create from "./src/pages/Create";
import Update from "./src/pages/Update";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/create', element: <Create />},
            {path: '/blogs/:id', element: <BlogPage />},
            {path: '/update/:id', element: <Update />}
        ]
    }
])