import { light } from "@mui/material/styles/createPalette";

const BaseWorkStyles = {
    colors: {
        primary: {
            main: '#01385E',
            dark: '#012A49',
            light: '#11A6D2',
            activate: '#007C00',
            stop: '#CF0000',
        },
        secondary: {
            light: '#F4F4F4',
            dark: '#B0B0B0'
        }
    }, 
    typograph: {
        fontFamily: 'Roboto, sans-serif',

        fontWeight: {
            light: 100,
            regular: 400,
            medium: 500,
            bold: 600,
        },

        fontSize: {
            xs: '10px',
            small: '12px',
            medium: '14px',
            mediumInput: '16px',
            large: '24px',
            xlarge: '32px',
            xxlarge: '48px' 
        }, 

        lineHeight: {
            medium: '1.22rem',
            large: '1.5rem'
        }
    }
}


export default BaseWorkStyles;