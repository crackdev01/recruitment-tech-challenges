import {useState, useEffect} from "react";
import {
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import Employees from '../pages/Employees/Employees';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const [department, setDepartment] = useState([])
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu department={department} setDepartment={(e) => setDepartment(e)} />
      <div className={classes.appMain}>
        <Header />
        
        <Employees department={department} />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

// 1:07

export default App;
