import { Typography } from "@mui/material";
import VorkTheme from "../../../styles/VorkTheme";
import { cloneElement } from "react";
import { NavLink } from "react-router-dom"

const NavigationItem = ({ to, icon, label }) => {

    const NavigationItemStyle = {
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        color: VorkTheme.palette.secondary.main,
    }

    const NavigationItemActiveStyle = {
        color: VorkTheme.palette.primary.light,
    }


    return (
        <NavLink to={to}
            style={({isActive}) => ({
                ...NavigationItemStyle, 
                ...(isActive ? NavigationItemActiveStyle : {})
            })}
        >
            {cloneElement(icon)}
            <Typography>{label}</Typography>
        </NavLink>
    )
}

export default NavigationItem;