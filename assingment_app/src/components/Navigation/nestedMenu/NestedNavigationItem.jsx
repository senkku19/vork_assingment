import { Typography } from "@mui/material";
import VorkTheme from "../../../styles/VorkTheme";
import { NavLink } from "react-router-dom"

const NestedNavigationItem = ({ to, label }) => {

    const NavigationItemStyle = {
        display: 'flex',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 16px',
    }

    const NavigationItemActiveStyle = {
        color: VorkTheme.palette.primary.dark,
        backgroundColor: 'white',
        borderRadius: '50px',
        padding: '8px 16px',
    }


    return (
            <NavLink to={to}
            style={({isActive}) => ({
                ...NavigationItemStyle, 
                ...(isActive ? NavigationItemActiveStyle : {})
            })}
            >
                <Typography variant="h4" >{label}</Typography> 
            </NavLink>
        
    )
}

export default NestedNavigationItem;