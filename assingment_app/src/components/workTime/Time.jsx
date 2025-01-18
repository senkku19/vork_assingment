import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import BaseWorkStyles from "../../styles/BaseWorkStyles";

const Time = ({ loggedTime }) => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Typography variant='body2' sx={{color: BaseWorkStyles.colors.secondary.dark}}>Aloitusaika</Typography>
            <Typography variant='h3' sx={{color: BaseWorkStyles.colors.primary.dark}}>{loggedTime}</Typography>
        </Box>
                
    )
}

export default Time;