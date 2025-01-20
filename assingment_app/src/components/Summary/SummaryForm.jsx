import React, { useState } from "react"
import { Container, Typography, Box, TextField, InputAdornment, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { parse, parseISO } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import useTimeCardStore from "../../store/timeCard";

const SummaryForm = () => {
    const timeCard = useTimeCardStore(state => state.timeCard)
    const [ overTime, setOverTime ] = useState(timeCard ? timeCard.overTime : 0)
    const [ travellingTime, setTravellingTime ] = useState(timeCard ? timeCard.travellingTime : 0);
    const [ compensation, setCompensation ] = useState('');


    return(
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                }}
            >
                <DatePicker
                    label="Päivämäärä"
                    value={parseISO(timeCard.date)}
                />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <TimePicker
                        label="Aloitusaika"
                        ampm={false}
                        value={parse(timeCard.startTime, "HH:mm", new Date())}

                    />
                    <TimePicker
                        label="Lopetusaika"
                        ampm={false}
                        value={parse(timeCard.endTime, "HH:mm", new Date())}
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
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <TimePicker
                        label="Tauon aloitus"
                        ampm={false}
                        value={parse(timeCard.breakStart, "HH:mm", new Date())}

                    />
                    <TimePicker
                        label="Tauon lopetus"
                        ampm={false}
                        value={parse(timeCard.breakEnd, "HH:mm", new Date())}
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
                >
                    <MenuItem>Kokopäiväraha</MenuItem>
                    <MenuItem>Osapäiväraha</MenuItem>
                    <MenuItem>Ateriakorvaus</MenuItem>
                    <MenuItem>Sairaana</MenuItem>
                </TextField>
            </Box>
         </LocalizationProvider>
    )
}

export default SummaryForm;