import React, { useEffect, useState } from "react"
import useTimeCardStore from "../../store/timeCard";
import { getMonth, getYear, parseISO, parse, differenceInMinutes } from "date-fns";
import { Box, Typography } from "@mui/material";
import BaseWorkStyles from "../../styles/BaseWorkStyles";


const TimeCardList = ({ currentDate }) => {
    const timeCards = useTimeCardStore(state => state.timeCards);
    const [filteredCards, setFilteredCards] = useState([]);
    const [monthSummary, setMonthSummary] = useState([]);

    const filterTimeCards = () => {
        const month = getMonth(currentDate);
        const year = getYear(currentDate);
        const filterCards = timeCards.filter(timeCard => {
            const date = parseISO(timeCard.date);
            if (getYear(date) === year && getMonth(date) === month) {
                return timeCard;
            }
        })
        setFilteredCards(filterCards);
    }

    const getMonthSummary = () => {
        const summary = {
            workDays: 0,
            workTime: 0,
            travellingTime: 0,
            overTime: 0, 
        };
    
        filteredCards.forEach(function(val) {
            summary['workDays'] ++;

            let startTime = parse(val.startTime, "HH:mm", new Date());
            let endTime = parse(val.endTime, "HH:mm", new Date());
            let minutes = differenceInMinutes(endTime, startTime);
            summary['workTime'] += minutes;

            summary['overTime'] += parseFloat(val.overTime)
            summary['travellingTime'] += parseFloat(val.travellingTime)

            if(!summary[val.compensation]) 
                summary[val.compensation] = 1;
            else
                summary[val.compensation] ++;
        
        })

        let hoursRounded = Math.floor(summary['workTime'] / 60);
        let hours = (summary['workTime'] / 60).toFixed(2);
        let minutes = Math.floor(summary['workTime'] % 60).toString().padStart(2, '0');

        summary['workTimeOne'] = hoursRounded + ' h ' + minutes + ' min';
        summary['workTimeTwo'] = hours + ' h';

        hoursRounded = Math.floor(summary['travellingTime']);
        minutes = Math.floor((summary['travellingTime'] - hoursRounded) * 60 ).toString().padStart(2, '0');

        summary['travellingTimeOne'] = hoursRounded + ' h ' + minutes + ' min';

        hoursRounded = Math.floor(summary['overTime']);
        minutes = Math.floor((summary['overTime'] - hoursRounded) * 60 ).toString().padStart(2, '0');

        summary['overTimeOne'] = hoursRounded + ' h ' + minutes + ' min';
        console.log(summary)

        setMonthSummary(summary);
    }

    useEffect(() => {
        filterTimeCards();
    }, [currentDate, timeCards])

    useEffect(() => {
        getMonthSummary();
    }, [filteredCards]);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                gap: '5px'
            }}
        >
            <Typography variant='h4' > Kuukauden yhteenveto: </Typography>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '5px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Työaika yhteensä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.workTimeOne}</Typography>
                        <Typography variant="body1" sx={{ color: BaseWorkStyles.colors.secondary.dark }}>( {monthSummary.workTimeTwo} )</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Matkustusaika yhteensä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.travellingTimeOne}</Typography>
                        <Typography variant="body1" sx={{ color: BaseWorkStyles.colors.secondary.dark }}>( {monthSummary.travellingTime} h )</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Ylityöaika yhteensä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.overTimeOne}</Typography>
                        <Typography variant="body1" sx={{ color: BaseWorkStyles.colors.secondary.dark }}>( {monthSummary.overTime} h )</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Työpäivien lukumäärä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.workDays} kpl</Typography>
                    </Box>
                </Box>
               
                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Sairaspäivien lukumäärä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.sairaana || 0} kpl</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Kokopäivärahojen lukumäärä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.kokopaivaraha || 0} kpl</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Osapäivärahojen lukumäärä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.osapaivaraha || 0} kpl</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        padding: '10px',
                        backgroundColor: 'white',
                        borderRadius: '10px'
                    }}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Ateriakorvausten lukumäärä: </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            margin: '10px'
                        }}
                    >
                        <Typography variant="h6">{monthSummary.ateriakorvaus || 0} kpl</Typography>
                    </Box>
                </Box>
        </Box>
    )
}

export default TimeCardList;