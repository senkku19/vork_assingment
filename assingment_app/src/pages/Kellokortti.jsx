import React, { useEffect } from "react"
import NavigationBar from "../components/Navigation/menu/NavigationBar";
import NestedNavigationBar from "../components/Navigation/nestedMenu/NestedNavigationBar";
import { Container, Typography, Box } from "@mui/material";
import BaseWorkStyles from "../styles/BaseWorkStyles";
import CircleIcon from '@mui/icons-material/Circle';
import useTimerStore from "../store/timer";
import useTimeCardStore from "../store/timeCard";
import { Outlet } from "react-router-dom";

const Kellokortti = () => {
    const timecard = useTimeCardStore(state => state.timeCard);
    const hours = useTimerStore(state => state.hours)
    const minutes = useTimerStore(state => state.minutes)
    const isRunning = useTimerStore(state => state.isRunning)
    const setTimer = useTimerStore(state => state.setTimer)

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTimer(), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return(
        <Container maxWidth={false} className="pageWrapper">
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant="h4" sx={{color: 'white', padding: '20px'}}>Kellokortti</Typography>
                { timecard &&
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5px', alignItems: 'center', backgroundColor: BaseWorkStyles.colors.primary.dark, borderRadius: '20px', padding: '5px', margin: '20px' }}>
                         {isRunning ? (
                            <CircleIcon sx={{ fontSize: 'x-small', color: BaseWorkStyles.colors.primary.activate }}/>
                         ):(
                            <CircleIcon sx={{ fontSize: 'x-small', color: BaseWorkStyles.colors.primary.stop }}/>
                         )}
                        <Typography variant='h4' sx={{color: 'white'}}>{hours} h {minutes} min</Typography>
                    </Box>
                }
            </Box>
            <NestedNavigationBar/>
            <Outlet/>
            <NavigationBar/>
        </Container>
    )
}

export default Kellokortti;