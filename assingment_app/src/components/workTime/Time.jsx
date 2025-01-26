import React from "react";
import { Box, Typography } from "@mui/material";
import BaseWorkStyles from "../../styles/BaseWorkStyles";
import useTimeCardStore from "../../store/timeCard";

const Time = ({ loggedTime }) => {
    const timeCard = useTimeCardStore(state => state.timeCard)

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            { timeCard ? (
                <Typography variant='body2' sx={{color: BaseWorkStyles.colors.secondary.dark}}>Työmaalle kirjautuminen</Typography>
            ) : (
                <Typography variant='body2' sx={{color: BaseWorkStyles.colors.secondary.dark}}>Aloitusaika</Typography>
            )}
            <Typography variant='h3' sx={{color: BaseWorkStyles.colors.primary.dark}}>{loggedTime}</Typography>
        </Box>
                
    )
}

export default Time;