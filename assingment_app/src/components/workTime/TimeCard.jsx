import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, IconButton } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import Time from './Time';
import BaseWorkStyles from '../../styles/BaseWorkStyles';
import useTimeCardStore from '../../store/timeCard';
import useTimerStore from '../../store/timer';
import { format } from "date-fns";

const TimeCard = () => {
    const [loggedTime, setLoggedTime] = useState();
    const createTimeCard = useTimeCardStore(state => state.createTimeCard);
    const timeCard = useTimeCardStore(state => state.timeCard)
    const startTimer = useTimerStore(state => state.startTimer)

    const getCurrentTime = () => {
        const time = new Date();
        setLoggedTime(time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0'));
    }

    useEffect(() => {
        if (!timeCard) {
            getCurrentTime();
            const interval = setInterval(getCurrentTime, 1000);
            return () => clearInterval(interval);
        } else {
            setLoggedTime(timeCard.startTime);
        }
    }, [timeCard]);

    const startWorkDay = () => {
        createTimeCard({
            date: format(new Date(), 'yyyy-MM-dd'),
            startTime: loggedTime
        })
        startTimer();
    }


    return (
        <Card className = 'timeCardBase'>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <AccessTimeRoundedIcon sx={{color: BaseWorkStyles.colors.primary.activate}}/>
                <Time loggedTime={loggedTime}/>
                <IconButton>
                    <EditNoteRoundedIcon sx={{color: BaseWorkStyles.colors.primary.light}}/>
                </IconButton>
            </Box>
            {timeCard ? (
                <Button 
                    className='activateButton'
                 >
                    <Typography variant='h4' sx={{color: BaseWorkStyles.colors.secondary.light}}>Kirjaudu työmaalle</Typography>
                </Button>
                ) : (
                <Button 
                    className='activateButton'
                    sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                    startIcon={<PlayCircleOutlineRoundedIcon/>}
                    onClick={()=> startWorkDay()}
                >
                    <Typography variant='h4' sx={{color: BaseWorkStyles.colors.secondary.light}}>Aloita työpäivä</Typography>
                </Button>
            )}
        </Card>
    )
    
}

export default TimeCard;