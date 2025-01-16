import React from "react"
import NavigationBar from "../components/Navigation/menu/NavigationBar";
import NestedNavigationBar from "../components/Navigation/nestedMenu/NestedNavigationBar";
import { Container, Typography } from "@mui/material";
import BaseWorkStyles from "../styles/BaseWorkStyles";
import { Outlet } from "react-router-dom";

const Kellokortti = () => {
    return(
        <Container className="pageWrapper">
            <Typography variant="h4" sx={{color: 'white', padding: '20px'}}>Kellokortti</Typography>
            <NestedNavigationBar/>
            <Outlet/>
            <NavigationBar/>
        </Container>
    )
}

export default Kellokortti;