import './App.css';
import Header from './components/Navbar';
import Home from './components/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import UserLogin from './components/UserLogin';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1656c4"
    },
    secondary: {
      main: "#ab2237"
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <div class="container mx-auto">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Login' element={<UserLogin/>}/>
        </Routes>
        </div>
      </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
