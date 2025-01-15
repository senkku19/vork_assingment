import React from "react"
import NavigationBar from "../components/Navigation/menu/NavigationBar";
import NestedNavigationBar from "../components/Navigation/nestedMenu/NestedNavigationBar";
import { Container, Typography } from "@mui/material";
import WorkTime from "../components/workTime/WorkTime";
import { Outlet } from "react-router-dom";

const Kellokortti = () => {
    return(
        <Container className="pageWrapper">
            <Typography variant="h3">Kellokortti</Typography>
            <NestedNavigationBar/>
            <Outlet/>
            <NavigationBar/>
        </Container>
    )
}

export default Kellokortti;