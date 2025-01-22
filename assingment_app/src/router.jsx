import { createBrowserRouter, Navigate } from "react-router-dom";
import Kellokortti from "./pages/Kellokortti";
import WorkTime from "./components/workTime/WorkTime";
import DaySummery from "./pages/DaySummery";
import MonthOverView from "./pages/MonthOverView";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/kellokortti'/>
    },
    {
        path: '/kellokortti',
        element: <Kellokortti />,
        children: [
            {
                path: 'tyoaika',
                element: <WorkTime />
            },
            {
                path: 'koonti',
                element: <MonthOverView />
            }

        ]
    },
    {
        path: '/:id/yhteenveto',
        element: <DaySummery />
    },
])

export default Router;