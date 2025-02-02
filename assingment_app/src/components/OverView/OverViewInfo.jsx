import React, { useEffect, useState } from "react"
import useTimeCardStore from "../../store/timeCard";
import { getMonth, getYear, parseISO, parse, differenceInMinutes } from "date-fns";
import { Box, Typography } from "@mui/material";
import BaseWorkStyles from "../../styles/BaseWorkStyles";


const OverViewInfo = ({ currentDate }) => {
    const timeCards = useTimeCardStore(state => state.timeCards);
    const [filteredCards, setFilteredCards] = useState([]);
    const [monthSummary, setMonthSummary] = useState([]);

    const rowStyleBox = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        margin: '10px'
    }

    const columnStyleBox = {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '5px'
    }

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

    useEffect(() => {
        filterTimeCards();
    }, [currentDate, timeCards])

    const getMonthSummary = () => {
        const summary = {
            workDays: 0,
            workTime: 0,
            travellingTime: 0,
            overTime: 0, 
        };
    
        filteredCards.forEach(function(val) {
            summary.workDays ++;

            let startTime = parse(val.startTime, "HH:mm", new Date());
            let endTime = parse(val.endTime, "HH:mm", new Date());
            let minutes = differenceInMinutes(endTime, startTime);
            let hours = minutes/60
            summary.workTime += parseFloat(hours.toFixed(2));

            let overTime = parseFloat(val.overTime.replace(',', '.'));
            let travellingTime = parseFloat(val.travellingTime.replace(',', '.'));

            summary.overTime = parseFloat((summary.overTime + overTime).toFixed(2));
            summary.travellingTime = parseFloat((summary.travellingTime + travellingTime).toFixed(2));


            if(!summary[val.compensation]) 
                summary[val.compensation] = 1;
            else
                summary[val.compensation] ++;
        
        })

        const convertToHoursMinutes = (hours) => {
            let hoursRounded = Math.floor(hours);
            let minutes = Math.floor((hours - hoursRounded) * 60).toString().padStart(2, '0');

            return hoursRounded + ' h ' + minutes + ' min';
        }

        summary.overTimeHoursMinutes = convertToHoursMinutes(summary.overTime)

        summary.travellingTimeHoursMinutes = convertToHoursMinutes(summary.travellingTime)

        summary.workTimeHoursMinutes = convertToHoursMinutes(summary.workTime)

        setMonthSummary(summary);
    }

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
            <Typography variant='h4' >Kuukauden yhteenveto: </Typography>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Työaika yhteensä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.workTimeHoursMinutes}</Typography>
                        <Typography variant="body1" sx={{ color: BaseWorkStyles.colors.secondary.dark }}>( {monthSummary.workTime} h )</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Matkustusaika yhteensä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.travellingTimeHoursMinutes}</Typography>
                        <Typography variant="body1" sx={{ color: BaseWorkStyles.colors.secondary.dark }}>( {monthSummary.travellingTime} h )</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Ylityöaika yhteensä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.overTimeHoursMinutes}</Typography>
                        <Typography variant="body1" sx={{ color: BaseWorkStyles.colors.secondary.dark }}>( {monthSummary.overTime} h )</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Työpäivien lukumäärä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.workDays} kpl</Typography>
                    </Box>
                </Box>
               
                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Sairaspäivien lukumäärä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.sairaana || 0} kpl</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Kokopäivärahojen lukumäärä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.kokopaivaraha || 0} kpl</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Osapäivärahojen lukumäärä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.osapaivaraha || 0} kpl</Typography>
                    </Box>
                </Box>

                <Box 
                    sx={columnStyleBox}
                >
                    <Typography variant='h4' sx={{ color: BaseWorkStyles.colors.primary.dark }}> Ateriakorvausten lukumäärä: </Typography>
                    <Box
                        sx={rowStyleBox}
                    >
                        <Typography variant="h6">{monthSummary.ateriakorvaus || 0} kpl</Typography>
                    </Box>
                </Box>
        </Box>
    )
}

export default OverViewInfo;