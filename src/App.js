import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
