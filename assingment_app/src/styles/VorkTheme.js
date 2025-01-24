import { createTheme } from "@mui/material/styles"; 
import BaseWorkStyles from "./BaseWorkStyles";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

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
    typography: {
        fontFamily: BaseWorkStyles.typograph.fontFamily,
        fontWeightLight: BaseWorkStyles.typograph.fontWeight.light,
        fontWeightRegular: BaseWorkStyles.typograph.fontWeight.regular,
        fontWeightMedium: BaseWorkStyles.typograph.fontWeight.medium,
        fontWeightBold: BaseWorkStyles.typograph.fontWeight.bold,

        h1: {
            fontSize: BaseWorkStyles.typograph.fontSize.xxlarge,
            fontWeight: BaseWorkStyles.typograph.fontWeight.bold,
            lineHeight: BaseWorkStyles.typograph.lineHeight.large
        },

        h2: {
            fontSize: BaseWorkStyles.typograph.fontSize.xlarge,
            fontWeight: BaseWorkStyles.typograph.fontWeight.medium,
            lineHeight: BaseWorkStyles.typograph.lineHeight.large
        },

        h3: {
            fontSize: BaseWorkStyles.typograph.fontSize.large,
            fontWeight: BaseWorkStyles.typograph.fontWeight.bold,
            lineHeight: BaseWorkStyles.typograph.lineHeight.large
        },

        h4: {
            fontSize: BaseWorkStyles.typograph.fontSize.medium,
            fontWeight: BaseWorkStyles.typograph.fontWeight.bold,
            lineHeight: BaseWorkStyles.typograph.lineHeight.large
        },

        body1: {
            fontSize: BaseWorkStyles.typograph.fontSize.medium,
            fontWeight: BaseWorkStyles.typograph.fontWeight.regular,
            lineHeight: BaseWorkStyles.typograph.lineHeight.medium
        },

        body2: {
            fontSize: BaseWorkStyles.typograph.fontSize.small,
            fontWeight: BaseWorkStyles.typograph.fontWeight.light,
            lineHeight: BaseWorkStyles.typograph.lineHeight.medium
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
                        position: 'relative',
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
                        gap: '15px',
                        height: '100%',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        overflowY: 'scroll',
                        padding: '0px !importannt',
                        paddingBottom: '10px',
                        backgroundColor: BaseWorkStyles.colors.secondary.light,
                    }
                },
                {
                    props: { className: 'pageWrapper' },
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        position: 'fixed',
                        width: '100%',
                        padding: '0px !important',
                        backgroundColor: BaseWorkStyles.colors.primary.main,
                    },
                }
            ]
        },
        MuiCard: {
            variants: [
                {
                    props: {className: 'timeCardBase'},
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'center',
                        overflow: 'unset',
                        borderRadius: '5px',
                        boxShadow: 'none',
                        gap: '30px',
                        padding: '15px',
                    }
                },
            ]
        },
        MuiButton:{
            variants: [
                {
                    props: {className: 'activateButton'},
                    style: {
                        backgroundColor: BaseWorkStyles.colors.primary.activate,
                        textTransform: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'white',
                        width: '100%',
                        gap: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px'
                    }
                },
                {
                    props: {className: 'stopButton'},
                    style: {
                        backgroundColor: BaseWorkStyles.colors.primary.stop,
                        textTransform: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'white',
                        width: '100%',
                        gap: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px'
                    }
                },
                {
                    props: {className: 'pauseButton'},
                    style: {
                        backgroundColor: 'white',
                        border: `2px solid ${BaseWorkStyles.colors.secondary.dark}`,
                        textTransform: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        color: BaseWorkStyles.colors.primary.dark,
                        width: '100%',
                        gap: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px'
                    }
                },
            ]

        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: BaseWorkStyles.typograph.fontSize.mediumInput,
                    fontWeight: BaseWorkStyles.typograph.fontWeight.medium,
                    padding: '5px 0px',
                    backgroundColor: 'white',
                    '& input': {
                        padding: '10px 0px'
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: BaseWorkStyles.colors.primary.dark,
                    fontSize: BaseWorkStyles.typograph.fontSize.mediumInput,
                    fontWeight: BaseWorkStyles.typograph.fontWeight.medium,
                    transform: 'translate(16px, 16px)',
                },
                shrink: {
                    transform: 'translate(16px, 6px) scale(0.666)',
                    
                }
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderRadius: '11px',
                    margin: '10px',
                    "&.Mui-focused": {
                        borderRadius: '11px',
                    },
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: 'transparent',
                    maxWidth: 'none'
                },
                root: {
                    "&.Mui-focused": {
                        borderRadius: '11px',
                    },
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderRadius: '11px',
                        border: `1px solid ${BaseWorkStyles.colors.primary.dark}`,
                      },
                    [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                        border: `1px solid ${BaseWorkStyles.colors.primary.dark}`,
                      },
                    input: {
                        padding: '14px 16px 12px', 
                    },
                    legend: {
                        maxWidth: 0
                    }
                }
            }
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    borderRadius: '11px',
                    margin: '10px',
                    padding: '14px 16px 12px',
                    "&.Mui-focused": {
                        borderRadius: '11px',
                    },
                    input: {
                        padding: '14px 14px', 
                    },
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    "&.Mui-error": {
                        fontSize: BaseWorkStyles.typograph.fontSize.xs,
                        width: '100%'
                    },
                }
            }
            
        },
    },
}
)

export default VorkTheme;