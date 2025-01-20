import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, IconButton } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import BaseWorkStyles from '../../../styles/BaseWorkStyles';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import useTimerStore from '../../../store/timer';
import useTimeCardStore from '../../../store/timeCard';

const WorkTimeCard = () => {
    const isRunning = useTimerStore(state => state.isRunning);
    const stopTimer = useTimerStore(state => state.stopTimer);
    const pauseTimer = useTimerStore(state => state.pauseTimer);
    const startTimer = useTimerStore(state => state.startTimer);
    const timeCard = useTimeCardStore(state => state.timeCard);
    const updateTimeCard = useTimeCardStore(state => state.updateTimeCard);
    const navigate = useNavigate();

    const endWorkDay = () => {
        stopTimer();
        const time = new Date();
        const endTime = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
        updateTimeCard(timeCard.id, { endTime: endTime })
        navigate(`/${timeCard.id}/yhteenveto`)
    }

    const handleBreakStart = () => {
        pauseTimer();
        const time = new Date();
        const start = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
        updateTimeCard(timeCard.id, { breakStart: start })
    }

    const handleBreakEnd = () => {
        startTimer();
        const time = new Date();
        const end = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
        updateTimeCard(timeCard.id, {breakEnd: end });
    }

    return (
        <Card className = 'timeCardBase'>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <AccessTimeRoundedIcon sx={{color: BaseWorkStyles.colors.primary.activate}}/>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Typography variant='body2' sx={{color: BaseWorkStyles.colors.secondary.dark}}>Työaika</Typography>
                    <Timer/>
                </Box>
                <IconButton>
                    <EditNoteRoundedIcon sx={{color: BaseWorkStyles.colors.primary.light}}/>
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '15px' }}>
                {isRunning ? (
                    <Button 
                        className='pauseButton'
                        sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                        startIcon={<PauseCircleOutlineRoundedIcon/>}
                        onClick={handleBreakStart}
                    >
                        <Typography variant='h4' sx={{color: BaseWorkStyles.colors.primary.dark}}>Tauko</Typography>
                    </Button>
                ) : (
                    <Button 
                    className='pauseButton'
                    sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                    startIcon={<PlayCircleOutlineRoundedIcon/>}
                    onClick={handleBreakEnd}
                    >
                        <Typography variant='h4' sx={{color: BaseWorkStyles.colors.primary.dark}}>Jatka</Typography>
                    </Button>
                )}
                <Button 
                    className='stopButton'
                    sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                    startIcon={<StopCircleRoundedIcon/>}
                    onClick={endWorkDay}
                >
                    <Typography variant='h4' sx={{color: BaseWorkStyles.colors.secondary.light}}>Päätä työpäivä</Typography>
                </Button>
            </Box>
            
        </Card>
    )

}

export default WorkTimeCard;
