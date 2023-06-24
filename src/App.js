import './App.css';
import Header from './components/Navbar';
import Home from './components/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">
      <div class="container mx-auto">
      <Header/>
      <Home/>
      </div>
    </div>
    </LocalizationProvider>
  );
}

export default App;
