import React from "react"
import { Container, Typography } from "@mui/material";
import SummaryForm from "../components/Summary/SummaryForm";


const DaySummery = () => {


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