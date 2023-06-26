import { createBrowserRouter } from "react-router-dom";
import AddGroupStage from "../Components/Pages/AddGroupStage";
import AddTournament from "../Components/Pages/AddTournament";
import AddMatchDetails from "../Components/Pages/AddMatchDetails";
import AddTeams from "../Components/Pages/AddTeams";

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
    },
    {
        path: '/addteams',
        element:  <AddTeams/>
    }
])
export default router