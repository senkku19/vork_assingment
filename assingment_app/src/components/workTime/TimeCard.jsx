import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, IconButton } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import Time from './Time';
import BaseWorkStyles from '../../styles/BaseWorkStyles';
import TimeCardService from '../../services/timeCard'
import { format } from "date-fns";

const TimeCard = () => {
    const [loggedTime, setLoggedTime] = useState();

    const getCurrentTime = () => {
        const time = new Date();
        setLoggedTime(time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0'));
    }

    useEffect(() => {
        getCurrentTime();
    }, [])

    const startWorkDay = () => {
        TimeCardService.create({
            date: format(new Date(), 'yyyy-MM-dd'),
            startTime: loggedTime
        })
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
            <Button 
                className='activateButton'
                sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                startIcon={<PlayCircleOutlineRoundedIcon/>}
                onClick={()=> startWorkDay()}
                >
                <Typography variant='h4' sx={{color: BaseWorkStyles.colors.secondary.light}}>Aloita työpäivä</Typography>
            </Button>
        </Card>
    )
    
}

export default TimeCard;