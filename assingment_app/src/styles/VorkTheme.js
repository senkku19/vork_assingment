import { createTheme } from "@mui/material/styles"; 
import BaseWorkStyles from "./BaseWorkStyles";

const VorkTheme = createTheme({
    palette: {
        primary: {
            main: '#01385E',
            dark: '#012A49',
            light:'#014F85',
        },
        secondary: {
            main: '#8E8E8E',
            light: '#F4F4F4',
        }
    },
    components: {
        MuiContainer: {
            variants: [ 
                {
                    props: { className: 'navigation' },
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: '16px 10px',
                        backgroundColor: 'white',
                        }
                },
                {
                    props: { className: 'nestedNavigation' },
                    style: {
                        display: 'flex',
                        borderRadius: '50px',
                        width: 'unset',
                        padding: 0,
                        margin: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: BaseWorkStyles.colors.primary.dark,
                        }
                },
                {
                    props: {className: 'pageContentWrapper'},
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        height: '100%',
                        borderTopLeftRadius: '40px',
                        borderTopRightRadius: '40px',
                        overflowY: 'auto',
                        padding: '0px !importannt',
                        backgroundColor: BaseWorkStyles.colors.secondary.light,
                    }
                },
                {
                    props: { className: 'pageWrapper' },
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        padding: '0px !important',
                        backgroundColor: BaseWorkStyles.colors.primary.main,
                    },
                }
            ]
        },
    },
}
)

export default VorkTheme;