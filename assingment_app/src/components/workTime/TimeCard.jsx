import React from 'react';
import { Button, Card, Typography, Box, IconButton } from '@mui/material';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import Time from './Time';
import BaseWorkStyles from '../../styles/BaseWorkStyles';

const TimeCard = () => {


    return (
        <Card className = 'timeCardBase'>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <AccessTimeRoundedIcon sx={{color: BaseWorkStyles.colors.primary.activate}}/>
                <Time/>
                <IconButton>
                    <EditNoteRoundedIcon sx={{color: BaseWorkStyles.colors.primary.light}}/>
                </IconButton>
            </Box>
            <Button 
                className='activateButton'
                sx={{ "& .MuiButton-startIcon": { margin: "0px" }}}
                startIcon={<PlayCircleOutlineRoundedIcon/>}>
                <Typography variant='h4' sx={{color: BaseWorkStyles.colors.secondary.light}}>Aloita työpäivä</Typography>
            </Button>
        </Card>
    )
    
}

export default TimeCard;