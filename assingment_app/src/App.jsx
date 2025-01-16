//import { Routes, Route, Navigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import Kellokortti from "./pages/Kellokortti";
import { ThemeProvider, CssBaseline } from "@mui/material";
import VorkTheme from "./styles/VorkTheme";
import WorkTime from "./components/workTime/WorkTime";

export default function App() {
    return (
        <ThemeProvider theme={VorkTheme}>
            <CssBaseline/>
            <RouterProvider router={Router}/>
        </ThemeProvider>
       
    );
}