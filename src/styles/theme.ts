import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        dark: {
            heading: '#47585B',
            info: '#999999',
        },
        light: {
            heading: '#F5F8FA',
            info: '#DADADA',
        },
        highlight: '#FFBA08',
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                color: '#47585B'
            }
        }
    }
});