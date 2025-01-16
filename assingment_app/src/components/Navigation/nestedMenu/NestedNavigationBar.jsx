import { Container } from "@mui/material";
import NestedNavigationItem from "./NestedNavigationItem";

const NestedNavigationBar = () => {
    return(
        <Container disableGutters component={'nav'} className="nestedNavigation">
            <NestedNavigationItem to='/kellokortti/tyoaika' label='Työaika'/>
            <NestedNavigationItem to='*' label='Projektitunnit'/>
            <NestedNavigationItem to='*' label='Koonti'/>
        </Container>
    )
}

export default NestedNavigationBar;