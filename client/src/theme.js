import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        type: 'dark',
        background: '#0B0B0B',
        primary: {
            light: '#a4a4a4',
            main: '#757575',
            dark: '#494949',
            contrastText: '#fff',
        },
        secondary: {
            light: '#bc477b',
            main: '#880e4f',
            dark: '#560027',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: [
            'Quicksand',
            'sans-serif'
        ]
    }
  });

  export default theme