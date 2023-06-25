import { createBrowserRouter } from "react-router-dom";
import AddGroupStage from "../Components/Pages/AddGroupStage";
import AddTournament from "../Components/Pages/AddTournament";
import AddMatchDetails from "../Components/Pages/AddMatchDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AddTournament/>
        
    },
    {
        path: '/addgroup-stage',
        element: <AddGroupStage/>
    },
    {
        path: '/addmatch-details',
        element: <AddMatchDetails/>
    }
])
export default router