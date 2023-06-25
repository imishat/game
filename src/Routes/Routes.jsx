import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
        
    },
])
export default router