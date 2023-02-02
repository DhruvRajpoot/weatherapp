import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <>
      <WeatherProvider>
        <BrowserRouter>
          <Navbar />
          <Home />
        </BrowserRouter>
      </WeatherProvider>
    </>
  );
}

export default App;
