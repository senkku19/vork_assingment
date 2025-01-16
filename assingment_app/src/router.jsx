import { createBrowserRouter, Navigate } from "react-router-dom";
import Kellokortti from "./pages/Kellokortti";
import WorkTime from "./components/workTime/WorkTime";

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
        ]
    },
])

export default Router;