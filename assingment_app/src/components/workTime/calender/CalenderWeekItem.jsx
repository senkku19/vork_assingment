import React from 'react';
import { format } from "date-fns";
import { Typography, Box } from '@mui/material';
import VorkTheme from '../../../styles/VorkTheme';
import BaseWorkStyles from '../../../styles/BaseWorkStyles';

const CalenderWeekItem = ({ date, index, currentDate }) => {

    const weekDaysFin = [
        'Ma',
        'Ti',
        'Ke',
        'To',
        'Pe',
        'La',
        'Su'
    ];

    const ifCurrentDate = (date) => {
        if (format(date, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd')) {
            return (
                <>
                    <Box sx={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: VorkTheme.palette.primary.dark }} />
                    <Typography variant='body1' sx={{ position: 'relative', zIndex: 1, color: 'white' }}>{format(date, 'd')}</Typography>
                </>

            );
        } else {
            return (
                <Typography variant='body1' sx={{color: BaseWorkStyles.colors.primary.dark}}>{format(date, 'd')}</Typography>
            );
        }
    };

    return (
        <>
            <Typography variant='h4' sx={{color: BaseWorkStyles.colors.primary.dark}}>{weekDaysFin[index]}</Typography>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
                {ifCurrentDate(date)}
            </Box>
        </>
    )
}

export default CalenderWeekItem;