import React, { useState, useEffect } from 'react';
import { eachDayOfInterval, endOfWeek, getMonth, startOfWeek, getWeek } from "date-fns";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Typography, Box, IconButton } from '@mui/material';
import CalenderWeekItem from './CalenderWeekItem';
import BaseWorkStyles from '../../../styles/BaseWorkStyles';

const CalenderWeek = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateHelper, setDateHelper] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState([]);
    const [currentMonth, setCurrentMonth] = useState('');
    const [weekNumber, setWeekNumber] = useState(0);
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

    const getCurrentWeek = () => {
        const today = new Date();
        const start = startOfWeek(today, { weekStartsOn: 1 });
        const end = endOfWeek(today, { weekStartsOn: 1 });
        setCurrentWeek(eachDayOfInterval({ start: start, end: end }));
        setCurrentDate(today);
        setDateHelper(today);
        setCurrentMonth(monthsFin[getMonth(today)]);
        setWeekNumber(getWeek(today, { weekStartsOn: 1 }));
    };

    const getNextWeek = () => {
       const end = endOfWeek(dateHelper, { weekStartsOn: 1});
       const nextWeekStarts = startOfWeek(new Date(end.getTime() +1), { weekStartsOn: 1});
       const nextWeekEnd = endOfWeek(new Date(end.getTime() + 7), { weekStartsOn: 1} );
       setCurrentWeek(eachDayOfInterval({ start: nextWeekStarts, end: nextWeekEnd }));
       setWeekNumber(getWeek(nextWeekStarts, { weekStartsOn: 1}));
       setCurrentMonth(monthsFin[getMonth(nextWeekStarts)]);
       setDateHelper(nextWeekStarts)
    }

    const getPreviousWeek = () => {
        const start = startOfWeek(dateHelper, { weekStartsOn: 1});
       const previousWeekStarts = startOfWeek(new Date(start.getTime() - 1), { weekStartsOn: 1});
       const previousWeekEnd = endOfWeek(new Date(start.getTime() - 7), { weekStartsOn: 1} );
       setCurrentWeek(eachDayOfInterval({ start: previousWeekStarts, end: previousWeekEnd }));
       setWeekNumber(getWeek(previousWeekStarts, { weekStartsOn: 1}));
       setCurrentMonth(monthsFin[getMonth(previousWeekStarts)]);
       setDateHelper(previousWeekStarts);
    }

    useEffect(() => {
        getCurrentWeek();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, padding: '20px 0px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <IconButton
                    onClick={getPreviousWeek}
                >
                    <ArrowBackIosNewRoundedIcon 
                        sx={{color: BaseWorkStyles.colors.primary.dark, fontSize: '1rem'}}
                    />
                </IconButton>
                
                <Typography variant="h4" sx={{color: BaseWorkStyles.colors.primary.dark}}>{currentMonth}, vko {weekNumber}</Typography>
                <IconButton
                    onClick={getNextWeek}
                >
                    <ArrowForwardIosRoundedIcon 
                        sx={{color: BaseWorkStyles.colors.primary.dark, fontSize: '1rem'}}
                    />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                {currentWeek.map((date, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <CalenderWeekItem date={date} index={index} currentDate={currentDate}/>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CalenderWeek;