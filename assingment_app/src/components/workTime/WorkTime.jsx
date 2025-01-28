import React, { useState } from "react";
import { Container } from "@mui/material";
import CalenderWeek from "./calender/CalenderWeek";
import TimeCard from "./timeCard/TimeCard";
import WorkTimeCard from "./workTimeCard/WorkTimeCard";
import useTimeCardStore from "../../store/timeCard";
import WorkSiteForm from "./workSiteForm";

const WorkTime = () => {
    const timeCard = useTimeCardStore(state => state.timeCard)
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose  = () => {
        setOpen(false);
    }

    return (
        <Container maxWidth={false} className="pageContentWrapper">
            <WorkSiteForm open={open} handleClose={handleClose}/>
            <CalenderWeek/>
            <TimeCard handleOpen={handleOpen}/>
            {timeCard && <WorkTimeCard />}
        </Container>
    )
}

export default WorkTime;