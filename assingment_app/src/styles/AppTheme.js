import { createTheme } from "@mui/material";

const AppTheme = createTheme({
    components: {
        MuiContainer: {
            variants: [ {
                    props: {className: 'navigation'},
                    style: {
                        display: 'flex',
                        borderRadius: 0,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: '16px 10px',
                    },
                    props: {className: 'pageWrapper'},
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                    }
                }
            ]
        },
    },
})

export default AppTheme;