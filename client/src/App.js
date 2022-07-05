import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
//import TextField from "@mui/material/TextField";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
