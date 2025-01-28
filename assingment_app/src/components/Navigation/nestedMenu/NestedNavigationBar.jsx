import { Container } from "@mui/material";
import NestedNavigationItem from "./NestedNavigationItem";

const NestedNavigationBar = () => {
    return(
        <Container disableGutters component={'nav'} maxWidth={false} className="nestedNavigation">
            <NestedNavigationItem to='/kellokortti/tyoaika' label='Työaika'/>
          
            <NestedNavigationItem to='/kellokortti/koonti' label='Koonti'/>
        </Container>
    )
}

export default NestedNavigationBar;