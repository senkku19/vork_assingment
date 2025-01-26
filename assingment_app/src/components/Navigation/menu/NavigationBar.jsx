import NavigationItem from "./NavigationItem";
import { Container, Badge } from "@mui/material";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import useTimeCardStore from "../../../store/timeCard";
import useTimerStore from "../../../store/timer";
import BaseWorkStyles from "../../../styles/BaseWorkStyles";

const NavigationBar = () => {
    const timeCard = useTimeCardStore(state => state.timeCard);
    const isRunning = useTimerStore(state => state.isRunning);

    const isTimeCardActive = () => {
        if (!timeCard) {
            return(
                <AccessTimeRoundedIcon/>
            )
        } else {
            return(
                <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
                    { isRunning ? (
                        <Badge variant="dot" color="success">
                            <AccessTimeRoundedIcon/>
                        </Badge>
                    ) : (
                        <Badge variant="dot" color="error">
                            <AccessTimeRoundedIcon/>
                        </Badge>
                    )}
                </div>
                
            )
        }
    }


    return(
        <Container component={'nav'} className="navigation">
            <NavigationItem to={"/kellokortti"} icon={isTimeCardActive()} label="Kellokortti"/>
        </Container>
    )
}

export default NavigationBar;