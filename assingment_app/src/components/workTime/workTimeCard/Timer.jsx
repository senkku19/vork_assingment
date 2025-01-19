import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import BaseWorkStyles from '../../../styles/BaseWorkStyles';
import useTimerStore from '../../../store/timer';

const Timer = () => {
    const hours = useTimerStore(state => state.hours);
    const minutes = useTimerStore(state => state.minutes);
    const isRunning = useTimerStore(state => state.isRunning);
    const setTimer = useTimerStore(state => state.setTimer);

     useEffect(() => {
        let interval;
        if (isRunning) {
           interval = setInterval(() => setTimer(), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <>
            <Typography variant='h3' sx={{color: BaseWorkStyles.colors.primary.dark}}>{hours} h {minutes} min</Typography>
        </>
    )
}

export default Timer;