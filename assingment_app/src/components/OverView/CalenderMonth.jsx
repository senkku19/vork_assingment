import React, { useState, useEffect } from 'react';
import { getMonth, getYear } from "date-fns";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Typography, Box, IconButton } from '@mui/material';
import BaseWorkStyles from '../../styles/BaseWorkStyles';

const CalenderMonth = ({ date, getPreviousMonth, getNextMonth }) => {
    const [currentMonth, setCurrentMonth] = useState('');
    const [currentYear, setCurrentYear] = useState('');
    const monthsFin = [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäkuu',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu'
    ];

    const getCurrentDate = () => {
        const month = monthsFin[getMonth(date)];
        const year = getYear(date);
        setCurrentMonth(month);
        setCurrentYear(year);
    }

    useEffect(() => {
        getCurrentDate();
    }, [date])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '20px 0px' }}>
            <IconButton
                onClick={getPreviousMonth}
            >
                <ArrowBackIosNewRoundedIcon 
                    sx={{color: BaseWorkStyles.colors.primary.dark, fontSize: '1rem'}}
                />
            </IconButton>
            <Typography variant="h4" sx={{color: BaseWorkStyles.colors.primary.dark}}>{currentMonth}, {currentYear}</Typography>
            <IconButton
                onClick={getNextMonth}
            >
                <ArrowForwardIosRoundedIcon 
                    sx={{color: BaseWorkStyles.colors.primary.dark, fontSize: '1rem'}}
                />
            </IconButton>

        </Box>
    )
}

export default CalenderMonth;