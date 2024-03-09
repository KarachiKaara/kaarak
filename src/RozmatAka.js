import {createBrowserRouter} from "react-router-dom";
import Header from "./pages/Header";
import RozmatJon from "./pages/RozmatJon/RozmatJon";
import DiplomKKKKemas from "./pages/Rozmat_City/Rozmat_Akami_Presi/DiplomKKKKemas";
import Manbirinchi from "./pages/Rozmat_City/Rozmat_Akami_Presi/Manbirinchi";
import Olamanmidipni from "./pages/Rozmat_City/Rozmat_Akami_Presi/Olamanmidipni";
import Olasiz from "./pages/Rozmat_City/Rozmat_Akami_Presi/Olasiz";
import Omonatizni from "./pages/Rozmat_City/Rozmat_Akami_Presi/Omonatizni";
import Qolizdan from "./pages/Rozmat_City/Rozmat_Akami_Presi/Qolizdan";



export const RozmatAka =createBrowserRouter([
    {
        path : '/',
        element: <Header/>,
        children : [
            {
                path : '/DiplomKKKKemas',
                element : <DiplomKKKKemas/>
            },
            {
                path : '/Manbirinchi',
                element : <Manbirinchi/>
            },
            {
                path : '/Olamanmidipni',
                element : <Olamanmidipni/>
            },
            {
                path : '/Qolizdan',
                element : <Qolizdan/>
            },
            {
                path : '/Omonatizni',
                element : <Omonatizni/>
            },
            {
                path : '/Olasiz',
                element : <Olasiz/>
            },
        ]
        
    },
    {
        path : '/',
        element: <RozmatJon/>
    }
])