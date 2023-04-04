import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
      <WeatherProvider>
        <BrowserRouter>
          <Navbar />
          <Home />
        </BrowserRouter>
      </WeatherProvider>
  );
}

export default App;
