import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Dialog, Button, DialogActions, DialogTitle, DialogContentText, DialogContent, CircularProgress, TextField, MenuItem } from "@mui/material";
import useWorkSiteStore from "../../store/workSite";
import useTimeCardStore from "../../store/timeCard";
import BaseWorkStyles from "../../styles/BaseWorkStyles";


const WorkSiteForm = ({ open, handleClose }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
        workSite: ''
        }
    }) 
    const isLoading = useWorkSiteStore(state => state.isLoading)
    const fetchWorkSites = useWorkSiteStore(state => state.fetchWorkSites);
    const workSites = useWorkSiteStore(state => state.workSites);
    const timeCard = useTimeCardStore(state => state.timeCard);
    const updateTimeCard = useTimeCardStore(state => state.updateTimeCard);
    const setLoggedIn = useWorkSiteStore(state => state.setLoggedIn);

    useEffect(() => {
       fetchWorkSites()
    }, [])

    if (isLoading) {
        return (
            <CircularProgress/>
        )
    }

    const onSubmit = (data) => {
        if (data.workSite)
            updateTimeCard(timeCard.id, { workSite: data.workSite });
        
        setLoggedIn(true);
        handleClose();
    }

    const handleFormClose = () => {
        reset();
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            closeAfterTransition={false}
            fullWidth={true}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit(onSubmit)
            }}
        >
            <DialogTitle variant="h3" color={BaseWorkStyles.colors.primary.dark}>Kirjaudu työmaalle</DialogTitle>
            <DialogContent>
                <DialogContentText variant="body2">
                    Valitse mille työmaalle haluat kirjautua
                </DialogContentText>
                <Controller 
                    name="workSite"
                    control={ control }
                    rules={{
                        required: "Valitse työmaa"
                    }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            InputProps={{
                                id: 'worksite-select',
                            }}
                            label="Työmaa"
                            InputLabelProps={{
                                id: 'worksite-select-label',
                                htmlFor: 'worksite-select'
                            }}
                            select
                            sx={{
                                width: '100%',
                            }}
                            error={!!errors.workSite}
                            helperText={errors.workSite ? errors.workSite.message : ""}
                        >
                            {workSites.map((workSite) => 
                                <MenuItem key={workSite.id} value={workSite.id}>{workSite.title}</MenuItem>
                            )}
                        </TextField>
                    }
                />
            </DialogContent>
            <DialogActions className="formButtons">
                <Button className='stopButton' onClick={handleFormClose}>Peruuta</Button>
                <Button className='activateButton' type="submit">Kirjaudu</Button>
            </DialogActions>
        </Dialog>
    )

}

export default WorkSiteForm;