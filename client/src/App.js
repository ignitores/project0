import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
<<<<<<< HEAD
import Error from './pages/erro404/error'

=======
//import TextField from "@mui/material/TextField";
>>>>>>> 9ae77611d080a8ee8f8d9358c3217e87524786a0
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        
        <Route exact path="*" element={<Error />} />

      </Routes>
    </>
  );
}

export default App;
