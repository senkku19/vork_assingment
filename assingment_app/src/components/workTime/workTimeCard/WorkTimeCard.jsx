import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, IconButton } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import BaseWorkStyles from '../../../styles/BaseWorkStyles';
import Timer from './Timer';
import useTimerStore from '../../../store/timer';

const WorkTimeCard = () => {
    const isRunning = useTimerStore(state => state.isRunning);
    const pauseTimer = useTimerStore(state => state.pauseTimer);
    const startTimer = useTimerStore(state => state.startTimer);


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
                        onClick={pauseTimer}
                    >
                        <Typography variant='h4' sx={{color: BaseWorkStyles.colors.primary.dark}}>Tauko</Typography>
                    </Button>
                ) : (
                    <Button 
                    className='pauseButton'
                    sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                    startIcon={<PlayCircleOutlineRoundedIcon/>}
                    onClick={startTimer}
                    >
                        <Typography variant='h4' sx={{color: BaseWorkStyles.colors.primary.dark}}>Jatka</Typography>
                    </Button>
                )}
                <Button 
                    className='stopButton'
                    sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                    startIcon={<PlayCircleOutlineRoundedIcon/>}
                >
                    <Typography variant='h4' sx={{color: BaseWorkStyles.colors.secondary.light}}>Päätä työpäivä</Typography>
                </Button>
            </Box>
            
        </Card>
    )

}

export default WorkTimeCard;
