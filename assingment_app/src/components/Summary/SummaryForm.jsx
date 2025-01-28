import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Typography, Box, TextField, InputAdornment, MenuItem, Button, CircularProgress } from "@mui/material";
import { format, parse, parseISO } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import useTimeCardStore from "../../store/timeCard";
import useTimerStore from "../../store/timer";
import useWorkSiteStore from "../../store/workSite";
import BaseWorkStyles from "../../styles/BaseWorkStyles";
import { useNavigate } from "react-router-dom";

const SummaryForm = () => {
    const timeCard = useTimeCardStore(state => state.timeCard);
    const emptyTimeCard = useTimeCardStore(state => state.emptyTimeCard);
    const isLoading = useTimeCardStore(state => state.isLoading);
    const { 
        control,
        watch,
        setError,
        handleSubmit,
        formState: { errors },
     } = useForm({
        defaultValues: timeCard
        ? {
            date: parseISO(timeCard.date),
            startTime: parse(timeCard.startTime, "HH:mm", new Date()),
            endTime: parse(timeCard.endTime, "HH:mm", new Date()),
            breakStart: timeCard.breakStart
            ? parse(timeCard.breakStart, "HH:mm", new Date())
            : null,
            breakEnd: timeCard.breakEnd
            ? parse(timeCard.breakEnd, "HH:mm", new Date())
            : null,
            overTime: timeCard.overTime || 0,
            travellingTime: timeCard.travellingTime || 0,
            compensation: "", 
        } : {},
    })

    const watchStartTime = watch('startTime')
    const watchEndTime = watch('endTime')
    const watchBreakStart = watch('breakStart')
    const acceptTimeCard = useTimeCardStore(state => state.acceptTimeCard);
    const stopTimer = useTimerStore(state => state.stopTimer);
    const setLoggedIn = useWorkSiteStore(state => state.setLoggedIn);
    const navigate = useNavigate();


    const rowStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        width: "100%",
        gap: "10px",
    };

    const validateNumber = (value) => {
        const isNumeric = value.match(/^\d+([.,]\d{1,2})?$/)
        return isNumeric !== null;
    }

    const validateWorkTime = ( startTime, endTime ) => {
        if (startTime >= endTime) {
            setError("endTime", {
                type: "manual",
                message: "Työpäivän täytyy päättyä aloitusajan jälkeen."
            });
            return false;
        }

        return true;
    }

    const validateBreakTime = ( breakStart, breakEnd, startTime, endTime ) => {

        let isValid = true;

    
        if ((breakStart <= startTime) || (endTime <= breakStart)) {
            setError("breakStart", {
                type: "manual",
                message: "Tauon täytyy sijoittua työajalle."
            }) 
            isValid = false;
        }
             
        if ((breakEnd >= endTime) || (breakEnd <= startTime) ) {
            setError("breakEnd", {
                type: "manual",
                message: "Tauon täytyy sijottua työajalla"
            }) 
            isValid = false;
        } else if (breakStart >= breakEnd) {
            setError("breakEnd", {
                type: "manual",
                message: "Tauko ei voi päättyä ennen sen alkua"
            }) 
            isValid = false;
        }

        return isValid;

    }


    const validateForm = (data) => {
        let isValid = true;

       isValid = validateWorkTime(data.startTime.getTime(), data.endTime.getTime());

       if (data.breakStart && !data.breakEnd) {
            setError("breakEnd", {
                type: "manual",
                message: "Tauolla pitää olla aloitus ja lopetus."
            }) 
            isValid = false;
        } else if (!data.breakStart && data.breakEnd) {
            setError("breakStart", {
                type: "manual",
                message: "Tauolla pitää olla aloitus ja lopetus."
            }) 
            isValid = false;
        } else if (data.breakStart && data.breakEnd) {

            isValid = validateBreakTime(data.breakStart.getTime(), data.breakEnd.getTime(), data.startTime.getTime(), data.endTime.getTime());
        
        }


        if (!data.compensation) {
            setError("compensation", {
                type: "manual",
                message: "Korvaustapa on pakollinen."
            })
            isValid = false;
        }

        if (!validateNumber(data.travellingTime)) {
            setError("travellingTime", {
                type: "manual",
                message: "Matkustusajan on oltava kokonaisluku tai desimaaliluku"
            })
            isValid = false
        }

        if (!validateNumber(data.overTime)) {
            setError("overTime", {
                type: "manual",
                message: "Ylityötunnit on oltava kokonaisluku tai desimaaliluku"
            })
            isValid = false
        }

          return isValid;
    };

    const onSubmit = async (data) => {
        if (!validateForm(data)) return;

        await acceptTimeCard(timeCard.id, {
            ...timeCard,
            ...data,
            date: format(data.date, 'yyyy-MM-dd'),
            startTime: format(data.startTime, "HH:mm"),
            endTime: format(data.endTime, "HH:mm"),
            breakStart: data.breakStart
            ? format(data.breakStart, "HH:mm")
            : null,
            breakEnd: data.breakEnd ? format(data.breakEnd, "HH:mm") : null,
        });

        setLoggedIn(false);
        stopTimer();
        
        navigate("/kellokortti/koonti");
        emptyTimeCard();
    };

    if (isLoading || timeCard === null) {
        return <CircularProgress/>;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: BaseWorkStyles.colors.primary.dark,
                        margin: "20px 10px 0px",
                    }}
                >
                    Työpäiväsi
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: BaseWorkStyles.colors.primary.dark,
                        margin: "10px",
                    }}
                >
                    Tarkista ja muokkaa työpäiväsi tietoja:
                </Typography>
                <Controller
                    name="date"
                    control={ control }
                    render={({ field }) => 
                        <DatePicker
                            {...field}
                            label="Päivämäärä"
                            format="dd.MM.yyyy"
                        />
                    }
                />
                <Box sx={rowStyle}>
                    <Controller
                        name="startTime"
                        control={ control }
                        render={({ field }) => 
                            <TimePicker
                                {...field}
                                label="Aloitusaika"
                                ampm={false}
                            />
                        }
                    />
                    <Typography
                        variant="h2"
                        sx={{ color: BaseWorkStyles.colors.primary.dark }}
                    >
                        -
                    </Typography>
                    <Controller
                        name="endTime"
                        control={ control }
                        render={({ field }) => 
                            <TimePicker
                                {...field}
                                label="Lopetusaika"
                                ampm={false}
                                minTime={watchStartTime}
                                slotProps={{
                                    textField: {
                                        error: !!errors.endTime,
                                        helperText: errors?.endTime?.message
                                    }
                                }}
                            />
                        }
                    />
                </Box>
                <Controller
                    name="overTime"
                    control={ control }
                    render={({ field }) => 
                        <TextField
                            {...field}
                            label="Ylityötunnit"
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">h</InputAdornment>,
                                },
                            }}
                            inputProps={{ 
                                inputMode: "decimal"
                            }}
                            error={!!errors.overTime}
                            helperText={errors?.overTime?.message}
                        />
                    }
                />
                <Box sx={rowStyle}>
                    <Controller
                        name="breakStart"
                        control={ control }
                        render={({ field }) => 
                            <TimePicker
                                {...field}
                                label="Tauon aloitus"
                                ampm={false}
                                minTime={watchStartTime}
                                maxTime={watchEndTime}
                                slotProps={{
                                    textField: {
                                        error: !!errors.breakStart,
                                        helperText: errors?.breakStart?.message
                                    }
                                }}
                            />
                        }
                    />
                    <Typography
                        variant="h2"
                        sx={{ color: BaseWorkStyles.colors.primary.dark }}
                    >
                        -
                    </Typography>
                    <Controller
                        name="breakEnd"
                        control={ control }
                        render={({ field }) => 
                            <TimePicker
                                {...field}
                                label="Tauon lopetus"
                                ampm={false}
                                minTime={watchBreakStart}
                                maxTime={watchEndTime}
                                slotProps={{
                                    textField: {
                                        error: !!errors.breakEnd,
                                        helperText: errors?.breakEnd?.message
                                    }
                                }}

                            />
                        }
                    />
                </Box>
                <Controller
                    name="travellingTime"
                    control={ control }
                    render={({ field }) => 
                        <TextField
                            {...field}
                            label="Matkustusaika"
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">h</InputAdornment>,
                                },
                            }}
                            inputProps={{ 
                                inputMode: "decimal"
                            }}
                            error={!!errors.travellingTime}
                            helperText={errors?.travellingTime?.message}
                        />
                    }
                />
                <Controller 
                    name="compensation"
                    control={ control }
                    render={({ field }) =>
                        <TextField
                            {...field}
                            InputProps={{
                                id: 'compensation-select',
                            }}
                            label="Korvaustapa"
                            InputLabelProps={{
                                id: 'compensation-select-label',
                                htmlFor: 'compensation-select'
                            }}
                            select
                            error={!!errors.compensation}
                            helperText={errors?.compensation?.message }

                        >
                            <MenuItem value="kokopaivaraha">Kokopäiväraha</MenuItem>
                            <MenuItem value="osapaivaraha">Osapäiväraha</MenuItem>
                            <MenuItem value="ateriakorvaus">Ateriakorvaus</MenuItem>
                            <MenuItem value="sairaana">Sairaana</MenuItem>
                        </TextField>
                    }
                />
                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: "15px",
                    padding: "10px",
                }}
                >
                    <Button
                        className="stopButton"
                        sx={{ "& .MuiButton-startIcon": { margin: "0px" } }}
                        startIcon={<HighlightOffRoundedIcon />}
                        onClick={() => navigate("/kellokortti/tyoaika")}
                    >
                        Peruuta
                    </Button>
                    <Button
                        className="activateButton"
                        sx={{ "& .MuiButton-startIcon": { margin: "0px" } }}
                        startIcon={<CheckCircleOutlineRoundedIcon />}
                        type="submit"
                    >
                        Hyväksy
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default SummaryForm;
