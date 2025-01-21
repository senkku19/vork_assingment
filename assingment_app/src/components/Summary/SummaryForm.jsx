import React, { useState } from "react"
import { Container, Typography, Box, TextField, InputAdornment, FormControl, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { format, parse, parseISO } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import useTimeCardStore from "../../store/timeCard";
import useTimerStore from "../../store/timer";
import BaseWorkStyles from "../../styles/BaseWorkStyles";
import { useNavigate } from "react-router-dom";

const SummaryForm = () => {
    const timeCard = useTimeCardStore(state => state.timeCard)
    const [ overTime, setOverTime ] = useState(timeCard ? timeCard.overTime : 0)
    const [ travellingTime, setTravellingTime ] = useState(timeCard ? timeCard.travellingTime : 0);
    const [ compensation, setCompensation ] = useState('');
    const acceptTimeCard = useTimeCardStore(state => state.acceptTimeCard);
    const stopTimer = useTimerStore(state => state.stopTimer)
    const navigation = useNavigate();

    const rowStyle = {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        gap: '10px'
    }

    const handleTimeChanges = ( newValue ) => {
        const field = newValue.getHours() + ':' + newValue.getMinutes().toString().padStart(2, '0')
        return field;
    }

    const handleCancel = () => {
        navigation('/kellokortti/tyoaika');
    }

    const handleSelect = (event) => {
        setCompensation(event.target.value)
    }

    const handleAccept = () => {
        acceptTimeCard(timeCard.id, {
            date: timeCard.date,
            startTime: timeCard.startTime,
            endTime: timeCard.endTime,
            breakStart: timeCard.breakStart,
            breakEnd: timeCard.breakEnd,
            overTime: overTime,
            travellingTime: travellingTime,
            compensation: compensation
        })
        stopTimer()
        navigation('/kellokortti')
    }


    return(
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                }}
                onSubmit={handleAccept}
            >
                <Typography variant="h4"  sx={{ color: BaseWorkStyles.colors.primary.dark, margin: '20px 10px 0px'}}>Työpäiväsi</Typography>
                <Typography variant="body2"  sx={{ color: BaseWorkStyles.colors.primary.dark, margin: '10px'}}>Tarkista ja muokkaa työpäiväsi tietoja:</Typography>
                <DatePicker
                    label="Päivämäärä"
                    value={parseISO(timeCard.date)}
                    onChange={(newValue) => timeCard.date = format(newValue, 'yyyy-MM-dd')}
                />
                <Box sx= { rowStyle }>
                    <TimePicker
                        label="Aloitusaika"
                        ampm={false}
                        value={parse(timeCard.startTime, "HH:mm", new Date())}
                        onChange={(newValue) => timeCard.startTime = handleTimeChanges(newValue)}

                    />
                    <Typography variant='h2' sx={{ color: BaseWorkStyles.colors.primary.dark }}>-</Typography>
                    <TimePicker
                        label="Lopetusaika"
                        ampm={false}
                        value={parse(timeCard.endTime, "HH:mm", new Date())}
                        onChange={(newValue) => timeCard.endTime = handleTimeChanges(newValue)}
                    />
                </Box>
                <TextField
                    label="Ylityötunnit"
                    slotProps={{
                        input: {
                             endAdornment: <InputAdornment position="end">h</InputAdornment>
                        }
                    }}
                    type="number"
                    value={overTime}
                    onChange={e => setOverTime(e.target.value)}
                />
                <Box sx= { rowStyle }>
                    <TimePicker
                        label="Tauon aloitus"
                        ampm={false}
                        value={parse(timeCard.breakStart, "HH:mm", new Date())}
                        onChange={(newValue) => timeCard.breakStart = handleTimeChanges(newValue)}
                    />
                    <Typography variant='h2' sx={{ color: BaseWorkStyles.colors.primary.dark }}>-</Typography>
                    <TimePicker
                        label="Tauon lopetus"
                        ampm={false}
                        value={parse(timeCard.breakEnd, "HH:mm", new Date())}
                        onChange={(newValue) => timeCard.breakEnd = handleTimeChanges(newValue)}
                    />
                </Box>
                <TextField
                    label="Matkustusaika"
                    slotProps={{
                        input: {
                             endAdornment: <InputAdornment position="end">h</InputAdornment>
                        }
                    }}
                    type="number"
                    value={travellingTime}
                    onChange={e => setTravellingTime(e.target.value)}
                />
                <TextField
                        label="Korvaustapa"
                        select
                        value={compensation}
                        onChange={handleSelect}
                >
                    <MenuItem value="kokopäiväraha">Kokopäiväraha</MenuItem>
                    <MenuItem value="osapäiväraha">Osapäiväraha</MenuItem>
                    <MenuItem value="ateriakorvaus">Ateriakorvaus</MenuItem>
                    <MenuItem value="sairaana">Sairaana</MenuItem>
                </TextField>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '15px', padding: '10px' }}>
                    <Button
                         className='stopButton'
                         sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                         startIcon={<HighlightOffRoundedIcon/>}
                         onClick={handleCancel}
                    >
                        Peruutta
                    </Button>
                    <Button
                         className='activateButton'
                         sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                         startIcon={<CheckCircleOutlineRoundedIcon/>}
                         type="submit"
                    >
                        Hyväksy
                    </Button>
                </Box>
            </Box>
         </LocalizationProvider>
    )
}

export default SummaryForm;