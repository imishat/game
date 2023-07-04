import { Link, createBrowserRouter } from "react-router-dom";
import AddGroupStage from "../Components/Pages/AddGroupStage";
import AddTournament from "../Components/Pages/AddTournament";
import AddMatchDetails from "../Components/Pages/AddMatchDetails";
import AddTeams from "../Components/Pages/AddTeams";
import Teams from "../Components/Pages/Teams";
import Wwcd from "../Components/Pages/Wwcd";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AddTournament/>
        
    },
        {
            path: '/tournament/:id',
            element: <AddGroupStage/>
        },
    {
        path: '/matches/:id',
        element: <AddMatchDetails/>
    },
    {
        path: '/addteams',
        element:  <AddTeams/>
    },
    {
        path: '/teams/:id',
        element:<Teams/>
    },
    {
        path:  '/wwcd',
        element: <Wwcd/>
    },
    
    {
        path: '*',  
        element: <div className="text-4xl font-semibold text-center mt-4 text-red-600"> Oopps  ! This routes not found <Link className="text-blue-500 hover:text-blue-700" to={'/'}> Back Home</Link> </div>
    }
])
export default router