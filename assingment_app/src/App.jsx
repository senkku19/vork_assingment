import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kellokortti from "./pages/Kellokortti";
import { ThemeProvider, CssBaseline } from "@mui/material";
import VorkTheme from "./styles/VorkTheme";

export default function App() {
    return (
        <ThemeProvider theme={VorkTheme}>
            <CssBaseline/>
                <Router>
                    <Routes>
                        <Route path="/" element={<Kellokortti/>}>
                            <Route path="/tyoaika"/>
                        </Route>
                    </Routes>  
                </Router>
        </ThemeProvider>
       
    );
}