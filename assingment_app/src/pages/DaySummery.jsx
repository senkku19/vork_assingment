import React from "react"
import { CircularProgress, Container, Typography } from "@mui/material";
import SummaryForm from "../components/Summary/SummaryForm";
import useTimeCardStore from "../store/timeCard";


const DaySummery = () => {
    const isLoading = useTimeCardStore(state => state.isLoading)

    if (isLoading) {
        return <CircularProgress/>;
    }

    return (
        <Container className="pageWrapper">
            <Typography variant="h4" sx={{color: 'white', padding: '20px'}}>Yhteenveto työpäivästäsi</Typography>
            <Container className="pageContentWrapper">
               <SummaryForm/> 
            </Container>
        </Container>
    )
}

export default DaySummery;