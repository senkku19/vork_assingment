import React, { useEffect, useState } from "react"
import { startOfMonth, endOfMonth, subMonths, addMonths, } from "date-fns";
import CalenderMonth from "../components/OverView/CalenderMonth";
import OverViewInfo from "../components/OverView/OverViewInfo";
import { CircularProgress, Container } from "@mui/material";
import useTimeCardStore from "../store/timeCard";

const MonthOverView = () => {
    const [helperDate, setDateHelper] = useState('');
    const fetchTimeCards = useTimeCardStore(state => state.fetchTimeCards)
    const isLoading = useTimeCardStore(state => state.isLoading)

    const getCurrentMonth = () => {
        const today = new Date();
        setDateHelper(today);
    }

    useEffect(() => {
        fetchTimeCards();
        getCurrentMonth();
    }, [])

    const getNextMonth = () => {
        const endDate = endOfMonth(helperDate);
        const monthEnd = addMonths(endDate, 1)
        setDateHelper(monthEnd);
    }

    const getPreviousMonth = () => {
        const startDate = startOfMonth(helperDate);
        const monthStart = subMonths(startDate, 1);
        setDateHelper(monthStart);
    }


     if (isLoading) {
            return <CircularProgress/>;
    }

    return(
        <Container className='pageContentWrapper' maxWidth={false}>
            <CalenderMonth date={helperDate} getNextMonth={getNextMonth} getPreviousMonth={getPreviousMonth} />
            <OverViewInfo currentDate={helperDate} />
        </Container>
    )
}

export default MonthOverView;