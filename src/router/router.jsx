import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Freelando</h1>,
        children: [],
    },
]);