import React from "react";
import { Container } from "@mui/material";
import CalenderWeek from "./calender/CalenderWeek";
import TimeCard from "./TimeCard";
import WorkTimeCard from "./workTimeCard/WorkTimeCard";
import useTimeCardStore from "../../store/timeCard";

const WorkTime = () => {
    const timeCard = useTimeCardStore(state => state.timeCard)


    return (
        <Container className="pageContentWrapper">
            <CalenderWeek/>
            <TimeCard/>
            {timeCard && <WorkTimeCard/>}
        </Container>
    )
}

export default WorkTime;