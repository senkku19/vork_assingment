import React from "react"
import NavigationBar from "../components/Navigation/menu/NavigationBar";
import { Container, Typography } from "@mui/material";

const Kellokortti = () => {
    return(
        <Container className="pageWrapper">
            <Typography variant="h3">Kellokortti</Typography>
            <Container className="pageContentWrapper">
            </Container>
            <NavigationBar/>
        </Container>
    )
}

export default Kellokortti;