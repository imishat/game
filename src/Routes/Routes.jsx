import { Link, createBrowserRouter } from "react-router-dom";
import AddGroupStage from "../Components/Pages/AddGroupStage";
import AddTournament from "../Components/Pages/AddTournament";
import AddMatchDetails from "../Components/Pages/AddMatchDetails";
import AddTeams from "../Components/Pages/AddTeams";
import Teams from "../Components/Pages/Teams";
import Wwcd from "../Components/Pages/Wwcd";
import DisplayLayout from "../Layout/DisplayLayout";
import Signup from "../Components/Shared/Signup";
import SignIn from "../Components/Shared/SignIn";
import MVP from "../Components/Pages/MVP";
import TopFregger from "../Components/Pages/TopFregger";
import Next from "../Components/Pages/Next";
import OverAllMvp from "../Components/Pages/OverAllMvp";
import Standing from "../Components/Pages/Standing";
import OverallStanding from "../Components/Pages/OverallStanding";
import Schediul from "../Components/Pages/Schediul";
import OverAllTopFragger from "../Components/Pages/OverAllTopFragger";
import Table from "../Components/Utilities/Table";

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
        path: '/display',
        element:  <DisplayLayout/>
    },
    {
        path: '/:id',
        element: <DisplayLayout/>
    },
    {
        path: '/signup',
        element:  <Signup/>
    },
    {
        path:  '/signin',
        element: <SignIn/>
    },
    {
        path: '/mvp',
        element:  <MVP/>
    },
    {
        path:  '/topfragger',
        element: <TopFregger/>  
    },
    {
      path: '/next',
      element: <Next/>
    },
    {
        path: '/overall-topfragger',
        element: <OverAllTopFragger/>
    },
    {
        path: '/schedul',
        element: <Schediul/>
    },
    {
        path: '/overall-mvp',
        element: <OverAllMvp/>
    },
    {
        path: '/:id/standing',
        element: <Standing/>
    },
    {
        path: '/overall-standing',
        element: <OverallStanding/>
    },
    {
      path: '/table',
      element: <Table/>

    },
    
    {
        path: '*',  
        element: <div className="text-4xl font-semibold text-center mt-4 text-red-600"> Oopps  ! This routes not found <Link className="text-blue-500 hover:text-blue-700" to={'/'}> Back Home</Link> </div>
    }
])
export default router