import { ThemeProvider } from '@emotion/react';

const theme = {
    colors: {
        white: '#fff',
        attention: '',
        focus: '#B009FF',
        primary: {
            a: '#5754ED',
            b: '#D93114',
            c: '#168070'
        },
        secondary: {
            a: '#F8F8FD',
            b: '#FDF8F8',
            c: '#EBFCF9'
        },
        neutral: {
            a: '#373737',
            b: '',
            c: '#F5F5F5',
            d: ''
        },
        dark: {
            a: '',
            b: '#B61B00'
        }
    },
    spacing: {
        xs: '8px',
        s : '16px',
        m : '24px',
        l : '32px',
        xl: '48px'
    },
    fontFamily: "'Montserrat', sans serif"
}

export const ProviderTheme = ({ children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}