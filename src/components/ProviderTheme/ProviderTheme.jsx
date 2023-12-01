import { ThemeProvider } from '@emotion/react';

const theme = {
    colors: {
        white: '',
        attention: '',
        focus: '',
        primary: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secondary: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutral: {
            a: '',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: ''
        }
    },
    spacing: {
        xs: '8px',
        s: '16px',
        l: '32px',
    },
    fontFamily: "'Montserrat', sans serif"
}

export const ProviderTheme = ({ children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}