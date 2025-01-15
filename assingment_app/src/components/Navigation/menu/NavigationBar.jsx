import NavigationItem from "./NavigationItem";
import { Container } from "@mui/material";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const NavigationBar = () => {
    return(
        <Container component={'nav'} className="navigation">
            <NavigationItem to={"/"} icon={<AccessTimeRoundedIcon/>} label="Kellokortti"/>
        </Container>
    )
}

export default NavigationBar;