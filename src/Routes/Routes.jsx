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

import OverAllMvp from "../Components/Pages/OverAllMvp";
import Standing from "../Components/Pages/Standing";
import OverallStanding from "../Components/Pages/OverallStanding";

import OverAllTopFragger from "../Components/Pages/OverAllTopFragger";
import Table from "../Components/Utilities/Table";
import WinerTeam from "../Components/Pages/WinerTeam";
import Coming from "../Components/Pages/Coming";
import PubgMatchTime from "../Components/Pages/PubgMatchTime";
import GrandFinal from "../Components/Pages/GrandFinal";
import Eelemination from "../Components/Pages/Eelemination";


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
        path:  '/wwcd/:id',
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
        path: '/:id/mvp',
        element:  <MVP/>
    },
    {
        path:  '/:id/topfragger',
        element: <TopFregger/>  
    },
    
    {
        path: '/overall-topfragger',
        element: <OverAllTopFragger/>
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
      path: '/:id/winer',
      element: <WinerTeam/>

    },
    {
      path: '/next',
      element: <Coming/>

    },
    {
      path: '/schedul',
      element: <PubgMatchTime/>

    },
    {
      path: '/grandFinal',
      element: <GrandFinal/>

    },
    {
      path: '/elemintion',
      element: <Eelemination/>

    },
 
    
    {
        path: '*',  
        element: <div className="text-4xl font-semibold text-center mt-4 text-red-600"> Oopps  ! This routes not found <Link className="text-blue-500 hover:text-blue-700" to={'/'}> Back Home</Link> </div>
    }
])
export default router;