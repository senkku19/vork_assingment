import React from 'react';
import { Typography } from '@mui/material';
import BaseWorkStyles from '../../../styles/BaseWorkStyles';
import useTimerStore from '../../../store/timer';

const Timer = () => {
    const hours = useTimerStore(state => state.hours);
    const minutes = useTimerStore(state => state.minutes);

    return (
        <>
            <Typography variant='h3' sx={{color: BaseWorkStyles.colors.primary.dark}}>{hours} h {minutes} min</Typography>
        </>
    )
}

export default Timer;