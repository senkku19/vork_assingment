import React from "react";
import { Container, Typography } from "@mui/material";
import CalenderWeek from "./calender/CalenderWeek";
import TimeCard from "./TimeCard";

const WorkTime = () => {
    return (
        <Container className="pageContentWrapper">
            <CalenderWeek/>
            <TimeCard/>
        </Container>
    )
}

export default WorkTime;