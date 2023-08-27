import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'SofiaPro',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#0E1821',
    },
    primary: {
      main: '#F12C4C',
    },
    secondary: {
      main: '#323B45',
    },
    success: {
      main: '#2BFF80',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '100%',
          minWidth: 'auto',
          fontWeight: 'bold',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          background: '#0E1821',
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
