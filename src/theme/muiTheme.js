import { createMuiTheme } from '@material-ui/core/styles';

const color = 'rgba(255, 255, 255, 0.7)';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        minWidth: 256,
        background: '#18202c',
        '& *': {
          color,
        },
      },
    },
  },
});

export default theme;
